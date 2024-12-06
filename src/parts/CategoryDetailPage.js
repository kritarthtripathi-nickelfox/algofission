import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const CategoryDetailPage = (props) => {
  const { name } = useParams(); // Get the category name from the URL params

  const categories = [
    {
      name: 'Frontend',
      tools: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Gatsby'],
      description: 'Frontend technologies focus on building the user interface and experience.',
      detailedDescription: 'Frontend development includes building the visible part of the website, handling user interaction, and ensuring responsiveness across different devices.',
    },
    {
      name: 'Backend',
      tools: ['Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails', 'Java'],
      description: 'Backend technologies handle server-side logic, databases, and APIs.',
      detailedDescription: 'Backend development involves creating server-side applications that handle data processing, business logic, and database interactions.',
    },
    {
      name: 'DevOps',
      tools: ['Docker', 'Kubernetes', 'CI/CD'],
      description: 'DevOps tools enable seamless collaboration between development and operations teams.',
      detailedDescription: 'DevOps tools help manage the deployment, monitoring, and infrastructure of software applications.',
    },
    {
      name: 'Mobile',
      tools: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      description: 'Mobile technologies are used for building cross-platform or native mobile applications.',
      detailedDescription: 'Mobile development includes creating apps for iOS and Android.',
    },
    {
      name: 'Database',
      tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      description: 'Database technologies store and manage structured and unstructured data efficiently.',
      detailedDescription: 'Databases are essential for managing large sets of data. SQL databases like MySQL and PostgreSQL are commonly used for structured data.',
    },
    {
      name: 'Cloud',
      tools: ['AWS', 'Azure', 'Google Cloud'],
      description: 'Cloud platforms offer scalable infrastructure for hosting applications.',
      detailedDescription: 'Cloud computing offers on-demand access to resources such as computing power, storage, and networking.',
    },
    {
      name: 'ML',
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      description: 'Machine Learning tools enable predictive models and artificial intelligence solutions.',
      detailedDescription: 'Machine Learning is a subset of AI that enables systems to learn and improve from experience.',
    },
    {
      name: 'Blockchain',
      tools: ['Ethereum', 'Solidity', 'Hyperledger'],
      description: 'Blockchain technologies are used for decentralized applications and smart contracts.',
      detailedDescription: 'Blockchain is a decentralized and secure way to record transactions across multiple computers.',
    },
  ];

  const category = categories.find((category) => category.name === name);

  if (!category) {
    return <div className="text-center text-red-600 font-bold mt-20">Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header {...props} />
      <div className="container mx-auto mt-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 mt-20">
          {category.name} Details
        </h1>

        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-xl p-8 transform transition duration-500 hover:scale-105 mb-20">
          <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b-2 border-indigo-300 pb-2">
            About {category.name}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{category.detailedDescription}</p>

          <h3 className="text-xl font-semibold mb-2 text-indigo-600">Tools Used:</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {category.tools.map((tool) => (
              <li
                key={tool}
                className="bg-indigo-50 text-indigo-700 py-2 px-4 rounded-lg text-center font-medium shadow-md transform hover:scale-110 transition-transform"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryDetailPage;
