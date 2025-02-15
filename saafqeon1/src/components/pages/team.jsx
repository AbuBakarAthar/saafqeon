import React from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    image: '/images/team/john-doe.jpg',
    bio: 'John is the visionary leader of our company, with over 15 years of experience in the tech industry.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/team/jane-smith.jpg',
    bio: 'Jane is our tech guru, leading the development of cutting-edge software solutions.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'Lead Designer',
    image: '/images/team/alice-johnson.jpg',
    bio: 'Alice is the creative mind behind our stunning designs and user interfaces.',
  },
  {
    id: 4,
    name: 'Bob Brown',
    position: 'Senior Developer',
    image: '/images/team/bob-brown.jpg',
    bio: 'Bob is a coding wizard, specializing in backend development and system architecture.',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    position: 'Marketing Manager',
    image: '/images/team/charlie-davis.jpg',
    bio: 'Charlie is the driving force behind our marketing strategies and brand presence.',
  },
  {
    id: 6,
    name: 'Eva Green',
    position: 'Product Manager',
    image: '/images/team/eva-green.jpg',
    bio: 'Eva ensures that our products meet the highest standards and deliver exceptional value to our clients.',
  },
];

const Team = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-red-600 mb-12">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800">{member.name}</h2>
                  <p className="text-sm text-gray-600">{member.position}</p>
                  <p className="mt-4 text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;