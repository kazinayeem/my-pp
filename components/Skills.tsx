"use client"
import Image from 'next/image';

const Skills = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-semibold">My Skills</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center"
          >
            <div className="relative w-16 h-16">
              <Image
                src={skill.logo}
                alt={skill.name}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <p className="font-semibold mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
