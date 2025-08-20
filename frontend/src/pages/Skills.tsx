import SkillCard from '../components/SkillCard';
import Transition from '../components/Transition';

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend',
      icon: '/icons/frontend.svg',
      skills: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
    },
    {
      category: 'Backend',
      icon: '/icons/backend.svg',
      skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Tools & DevOps',
      icon: '/icons/devops.svg',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
    },
    {
      category: 'Other Skills',
      icon: '/icons/other.svg',
      skills: ['Agile', 'Problem Solving', 'Team Collaboration', 'Technical Writing'],
    },
  ];

  return (
    <Transition>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skillSet, index) => (
            <SkillCard
              key={index}
              category={skillSet.category}
              skills={skillSet.skills}
              icon={skillSet.icon}
            />
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Currently Learning
          </h2>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'Python', 'Machine Learning'].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Skills;
