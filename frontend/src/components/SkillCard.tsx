interface SkillCardProps {
  category: string;
  skills: string[];
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img src={icon} alt={category} className="w-8 h-8 mr-3" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
