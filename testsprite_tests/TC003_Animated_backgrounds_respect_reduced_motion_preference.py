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
        # Scroll down to locate the animated background component or relevant CSS/JS that controls animation and check for reduced motion support.
        await page.mouse.wheel(0, window.innerHeight)
        

        # Extract content or scroll further to find the animated background component or relevant style/script information about reduced motion.
        await page.mouse.wheel(0, window.innerHeight)
        

        # Assert that the animated background respects the user's reduced motion preference
        reduced_motion = await page.evaluate("window.matchMedia('(prefers-reduced-motion: reduce)').matches")
        assert reduced_motion, 'User preference for reduced motion is not set as expected'
        # Check if the animated background element has reduced or no animation
        animated_bg_animation = await page.evaluate("window.getComputedStyle(document.querySelector('.animated-background')).animationPlayState")
        assert animated_bg_animation in ['paused', 'none'], 'Animated background animation is not paused or disabled for reduced motion preference'
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    