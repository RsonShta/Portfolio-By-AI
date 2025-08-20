import ProjectCard from '../components/ProjectCard';
import Transition from '../components/Transition';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/projects/ecommerce.jpg',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express'],
      imageUrl: '/projects/taskmanager.jpg',
      githubUrl: 'https://github.com/yourusername/taskmanager',
      liveUrl: 'https://taskmanager-demo.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that shows current weather and forecasts using weather API integration.',
      technologies: ['React', 'API Integration', 'Charts.js'],
      imageUrl: '/projects/weather.jpg',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
    },
    // Add more projects as needed
  ];

  return (
    <Transition>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            These are just a few examples of my work. Visit my GitHub profile to see more projects!
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </Transition>
  );
};

export default Projects;
