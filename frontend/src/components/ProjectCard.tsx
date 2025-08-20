interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{title}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4 flex space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          GitHub
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
