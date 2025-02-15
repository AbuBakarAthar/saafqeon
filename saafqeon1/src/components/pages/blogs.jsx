import React, { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Top Web Development Trends in 2024',
    description: 'Discover the latest trends in web development, from AI integration to serverless architectures.',
    image: '/images/blogs/web-dev-trends.jpg',
    date: 'January 15, 2024',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Why UI/UX Design Matters for Your Business',
    description: 'Learn how good design can improve user engagement and drive business growth.',
    image: '/images/blogs/ui-ux-design.jpg',
    date: 'February 10, 2024',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: 'SEO Best Practices for 2024',
    description: 'Stay ahead of the competition with these proven SEO strategies for the new year.',
    image: '/images/blogs/seo-best-practices.jpg',
    date: 'March 5, 2024',
    author: 'Alice Johnson',
  },
  {
    id: 4,
    title: 'The Future of Mobile App Development',
    description: 'Explore the latest technologies shaping the future of mobile app development.',
    image: '/images/blogs/mobile-app-future.jpg',
    date: 'April 20, 2024',
    author: 'Bob Brown',
  },
  {
    id: 5,
    title: 'How Cloud Computing is Transforming Businesses',
    description: 'Understand the impact of cloud computing on modern businesses and industries.',
    image: '/images/blogs/cloud-computing.jpg',
    date: 'May 12, 2024',
    author: 'Charlie Davis',
  },
  {
    id: 6,
    title: 'The Role of AI in Digital Marketing',
    description: 'Learn how AI is revolutionizing digital marketing strategies and campaigns.',
    image: '/images/blogs/ai-marketing.jpg',
    date: 'June 8, 2024',
    author: 'Eva Green',
  },
];

const Blogs = () => {
  const [randomBlog, setRandomBlog] = useState(null);

  // Function to select a random blog
  const getRandomBlog = () => {
    const randomIndex = Math.floor(Math.random() * blogs.length);
    setRandomBlog(blogs[randomIndex]);
  };

  // Set a random blog on component mount
  useEffect(() => {
    getRandomBlog();
  }, []);

  return (
    <Layout>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h1
            className="text-4xl font-bold text-center text-blue-600 mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Blogs
          </motion.h1>

          {/* Random Blog Section */}
          {randomBlog && (
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={randomBlog.image}
                alt={randomBlog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{randomBlog.title}</h2>
                <p className="text-gray-600 mb-4">{randomBlog.description}</p>
                <div className="text-sm text-gray-500">
                  <span>{randomBlog.date}</span> | <span>By {randomBlog.author}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* All Blogs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: blog.id * 0.1 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="text-sm text-gray-500">
                    <span>{blog.date}</span> | <span>By {blog.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;