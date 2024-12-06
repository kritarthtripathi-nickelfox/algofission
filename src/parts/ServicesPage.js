import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from 'parts/Header';
import Footer from 'parts/Footer';

const services = [
    {
        name: 'CSD',
        description: 'CSD (Custom Software Development) involves analyzing requirements, designing systems, implementing solutions, and providing ongoing maintenance.',
        subcategories: ['Requirement Analysis', 'System Design', 'Implementation', 'Maintenance'],
    },
    {
        name: 'Mobile App',
        description: 'Mobile App development focuses on building applications for iOS, Android, or cross-platform solutions, ensuring a seamless user experience.',
        subcategories: ['iOS Development', 'Android Development', 'Cross-Platform Development', 'App Maintenance'],
    },
    {
        name: 'UI\UX Design',
        description: 'UI/UX Design involves creating user-friendly interfaces and optimizing the user experience through research, wireframing, prototyping, and visual design.',
        subcategories: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
        name: 'QA',
        description: 'Quality Assurance (QA) ensures that software products meet the desired quality standards through manual, automated, performance, and security testing.',
        subcategories: ['Manual Testing', 'Automated Testing', 'Performance Testing', 'Security Testing'],
    },
    {
        name: 'Cloud',
        description: 'Cloud services provide scalable infrastructure for hosting applications, with services like cloud architecture, migration, security, and management.',
        subcategories: ['Cloud Architecture', 'Cloud Migration', 'Cloud Security', 'Cloud Management'],
    },
    {
        name: 'DevOps',
        description: 'DevOps practices ensure seamless collaboration between development and operations through CI/CD pipelines, infrastructure automation, and continuous monitoring.',
        subcategories: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Logging', 'Automation'],
    },
];

const ServicesPage = (props) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header {...props} />
            <h1 className="text-4xl font-bold text-center mb-6 mt-20">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 p-6">
                {services.map((service) => (
                    <Link
                        key={service.name}
                        to={`/services/${service.name}`} // Dynamic route based on service name
                        className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105"
                    // style={{ backgroundColor: "#843ff4" }}
                    >
                        <h2 className="text-lg text-black-text font-semibold mb-2">
                            {service.name}
                        </h2>
                        <p className="text-black-text mb-4">{service.description}</p>
                        <ul className="mt-2 list-disc list-inside text-black-text">
                            {service.subcategories.map((subcategory) => (
                                <li key={subcategory}>{subcategory}</li>
                            ))}
                        </ul>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ServicesPage;
