import React from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We build responsive, scalable, and high-performance websites tailored to your business needs. From frontend to backend, we handle it all.',
    icon: '💻', // You can replace this with an image or SVG
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Our designers create stunning and intuitive user interfaces that enhance user experience and drive engagement.',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'We optimize your website to rank higher on search engines, driving organic traffic and increasing visibility.',
    icon: '🔍',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'From social media marketing to PPC campaigns, we help you reach your target audience and grow your business.',
    icon: '📈',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    description: 'We develop cross-platform mobile applications that deliver seamless performance and exceptional user experiences.',
    icon: '📱',
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description: 'We provide cloud-based solutions for scalability, security, and efficient data management.',
    icon: '☁️',
  },
  {
    id: 7,
    title: 'E-commerce Solutions',
    description: 'We build robust e-commerce platforms that help you sell products and services online with ease.',
    icon: '🛒',
  },
  {
    id: 8,
    title: 'Maintenance & Support',
    description: 'We offer ongoing maintenance and support to ensure your systems run smoothly and efficiently.',
    icon: '🔧',
  },
];

const Service = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-center text-red-600 mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Service;