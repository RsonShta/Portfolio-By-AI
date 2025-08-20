import { Link } from 'react-router-dom';
import Transition from '../components/Transition';

const Home = () => {
  return (
    <Transition>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Full Stack Developer | React | Node.js | TypeScript
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I build modern web applications with a focus on clean code, performance, and user experience.
            Always learning and exploring new technologies.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Home;
