import React from 'react';
import { motion } from 'framer-motion';

const teams = [
  {
    title: 'Technical Team',
    description:
      'The Technical Team focuses on learning and working with programming, software tools, and new technologies. Members help build and maintain projects, solve coding problems, and support others in improving their technical knowledge.',
    image: 'https://cdn-icons-png.freepik.com/256/11010/11010897.png?ga=GA1.1.1014509044.1701959108&semt=ais_hybrid',
    bgColor: 'bg-gradient-to-br from-green-200 to-yellow-100',
  },
  {
    title: 'Management Team',
    description:
      'The Management Team handles planning and organization. They take care of scheduling events, communicating with participants, and ensuring everything runs smoothly during activities and meetings.',
    image: 'https://cdn-icons-png.freepik.com/256/6312/6312486.png?ga=GA1.1.1014509044.1701959108&semt=ais_hybrid',
    bgColor: 'bg-gradient-to-br from-pink-100 to-yellow-100',
  },
  {
    title: 'Design Team',
    description:
      'The Design Team works on visual content such as posters, social media graphics, and presentations. They use tools to create clean and simple designs that support the teams goals and ideas.',
    image: 'https://cdn-icons-png.freepik.com/256/11199/11199563.png?ga=GA1.1.1014509044.1701959108&semt=ais_hybrid',
    bgColor: 'bg-gradient-to-br from-green-100 to-orange-100',
  },
  {
    title: 'Social Media Team',
    description:
      'The Social Media Team manages the chapter’s presence online. They post updates, share information, and help keep everyone informed about events and activities.',
    image: 'https://cdn-icons-png.freepik.com/256/4545/4545111.png?uid=R158796959&ga=GA1.1.1014509044.1701959108&semt=ais_hybrid',
    bgColor: 'bg-gradient-to-br from-blue-100 to-green-100',
  },
  {
    title: 'Marketing Team',
    description:
      'The Marketing Team helps spread the word about the chapter’s events and programs. They come up with ways to reach more students, both online and offline, to increase participation.',
    image: 'https://cdn-icons-png.freepik.com/256/11180/11180579.png?uid=R158796959&ga=GA1.1.1014509044.1701959108&semt=ais_hybrid',
    bgColor: 'bg-gradient-to-br from-blue-100 to-green-100',
  },
  {
    title: 'Public Outreach Team',
    description:
      'The Public Outreach Team connects with students and others outside the chapter. They handle announcements, answer questions, and make sure the chapter stays visible and welcoming to new members.',
    image: 'https://cdn-icons-png.freepik.com/256/8142/8142223.png?uid=R158796959&ga=GA1.1.1014509044.1701959108&semt=ais_hybrid',
    bgColor: 'bg-gradient-to-br from-blue-100 to-green-100',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const TeamCards = () => {
  return (
    <>
    <div className='container'>
      <h1 className='team-title'>Our Domain</h1>
    <div className="team-split grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {teams.map((team, index) => (
        <motion.div
          key={index}
          className={`teamcard flex items-center rounded-xl shadow-md ${team.bgColor}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <img src={team.image} alt={team.title} className="w-32 h-32 mr-6" />
          <div className='card-txt'>
            <h2 className="text-xl font-semibold mb-2">{team.title}</h2>
            <p className="text-sm text-gray-700 max-w-md">{team.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
    </>
  );
};

export default TeamCards;