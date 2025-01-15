import React from 'react';

const ExperienceCard = ({ thumbnail, company, role, description }) => {
  return (
    <div className="group bg-[#0a0a14] rounded-2xl p-8 transition-all duration-300 ease-in-out hover:bg-purple-500 hover:shadow-xl hover:scale-105">
      <div className="flex gap-6 items-start">
        {/* Larger logo container */}
        <div className="w-24 h-24 rounded-xl bg-[#1a1a2e] p-4 flex items-center justify-center">
          <img
            src={thumbnail}
            alt={`${company} icon`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-white">
            {role}
          </h3>
          <p className="text-gray-400 text-base mt-1 group-hover:text-white">
            {company}
          </p>
          {description && (
            <p className="text-gray-500 text-sm mt-3 leading-relaxed group-hover:text-white">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      thumbnail: '/images/1.png',
      company: 'OpsHub',
      role: 'Software Engineer Intern',
      description: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.'
    },
    {
      id: 2,
      thumbnail: '/images/3.png',
      company: 'JP Morgan',
      role: 'Participant - Code for Good',
      description: 'Participated in developing solutions for social good using modern technologies.'
    },
    {
      id: 3,
      thumbnail: '/images/2.png',
      company: 'Organic Products India',
      role: 'Web Developer',
      description: 'Developed and maintained user-facing features using modern frontend technologies.'
    },
    {
      id: 4,
      thumbnail: '/images/4.png',
      company: 'Woosong University',
      role: 'Research Intern',
      description: 'Developed and maintained user-facing features using modern frontend technologies.'
    }
  ];

  return (
    <div className="py-20 bg-[#050507] min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16">
          <span className="text-white">My</span>{' '}
          <span className="text-purple">Work Experience</span>
        </h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          {workExperience.map((card) => (
            <ExperienceCard
              key={card.id}
              {...card}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
