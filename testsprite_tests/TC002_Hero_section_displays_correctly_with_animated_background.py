import asyncio
from playwright import async_api

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:8080", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # Assert hero section is full width and height as per design
        hero_section = await page.locator('section.hero')
        hero_box = await hero_section.bounding_box()
        viewport_size = page.viewport_size
        assert hero_box is not None, 'Hero section bounding box should not be None'
        assert abs(hero_box['x']) < 1, f'Hero section x position should be 0, got {hero_box["x"]}'
        assert abs(hero_box['y']) < 1, f'Hero section y position should be 0, got {hero_box["y"]}'
        assert abs(hero_box['width'] - viewport_size['width']) < 2, f'Hero section width {hero_box["width"]} should match viewport width {viewport_size["width"]}'
        assert abs(hero_box['height'] - viewport_size['height']) < 2, f'Hero section height {hero_box["height"]} should match viewport height {viewport_size["height"]}'
        # Assert presence of introductory text and primary call-to-action buttons
        intro_text = await hero_section.locator('text=Cybersecurity Student & Full-Stack Developer').first
        assert await intro_text.is_visible(), 'Introductory text should be visible in hero section'
        primary_cta_buttons = await hero_section.locator('button.primary, a.primary').all()
        assert len(primary_cta_buttons) > 0, 'At least one primary call-to-action button should be visible'
        # Assert animated background plays animation if reduced motion is not set
        prefers_reduced_motion = await page.evaluate('window.matchMedia("(prefers-reduced-motion: reduce)").matches')
        if not prefers_reduced_motion:
            animation_playing = await page.evaluate("document.querySelector('section.hero .animated-background').getAnimations().some(anim => anim.playState === 'running')")
            assert animation_playing, 'Animated background should be playing when reduced motion is not set'
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    