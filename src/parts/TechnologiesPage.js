import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from 'parts/Header';
import Footer from 'parts/Footer';

const TechnologiesPage = (props) => {
    const categories = [
        {
            name: 'Frontend',
            tools: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Gatsby'],
            description: 'Frontend technologies focus on building the user interface and experience. These frameworks and libraries are used for creating responsive and dynamic web applications.',
        },
        {
            name: 'Backend',
            tools: ['Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails', 'Java'],
            description: 'Backend technologies handle server-side logic, databases, and APIs to power web and mobile applications.',
        },
        {
            name: 'DevOps',
            tools: ['Docker', 'Kubernetes', 'CI/CD'],
            description: 'DevOps tools enable seamless collaboration between development and operations teams, ensuring smooth deployment and maintenance of software.',
        },
        {
            name: 'Mobile',
            tools: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
            description: 'Mobile technologies are used for building cross-platform or native mobile applications with optimized performance and user experience.',
        },
        {
            name: 'Database',
            tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
            description: 'Database technologies store and manage structured and unstructured data efficiently for various applications.',
        },
        {
            name: 'Cloud',
            tools: ['AWS', 'Azure', 'Google Cloud'],
            description: 'Cloud platforms offer scalable and cost-effective infrastructure for hosting applications, storage, and computation.',
        },
        {
            name: 'ML',
            tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
            description: 'Machine Learning tools enable the development of predictive models, data analysis, and artificial intelligence solutions.',
        },
        {
            name: 'Blockchain',
            tools: ['Ethereum', 'Solidity', 'Hyperledger'],
            description: 'Blockchain technologies are used for building decentralized applications, smart contracts, and secure transaction systems.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r p-6">
            <Header {...props} />
            <h1 className="text-4xl mt-16 font-bold text-center mb-6">Technologies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {categories.map((category) => (
                    <Link
                        key={category.name}
                        to={`/category/${category.name}`}
                        className="p-4 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                        style={{ backgroundColor: "#843ff4" }}
                    >
                        <h2 className="text-lg text-white font-semibold mb-2">{category.name}</h2>
                        <p className="text-sm text-white mb-4">{category.description}</p>
                        <ul className="mt-2 list-disc list-inside text-white">
                            {category.tools.map((tool) => (
                                <li key={tool}>{tool}</li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default TechnologiesPage;
