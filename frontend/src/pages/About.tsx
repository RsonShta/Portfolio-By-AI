import Transition from '../components/Transition';

const About = () => {
  return (
    <Transition>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Hello! I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
              I enjoy creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="mb-6">
              My journey in web development started [Your Start Date]. Since then, I've worked on various projects,
              ranging from small business websites to complex web applications. I'm constantly learning and staying
              up-to-date with the latest technologies and best practices.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Develop full-stack web applications</li>
              <li>Create responsive and intuitive user interfaces</li>
              <li>Design and implement RESTful APIs</li>
              <li>Work with databases and optimize queries</li>
              <li>Implement security best practices</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="mb-6">
              [Your Degree] in [Your Field]<br />
              [Your University] - [Graduation Year]
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Interests</h2>
            <p>
              Outside of coding, I enjoy [Your Interests]. I believe in continuous learning and giving back to the
              developer community through open-source contributions and sharing knowledge.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default About;
