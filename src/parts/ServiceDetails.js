// src/pages/ServiceDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
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
        name: 'UI/UX Design',
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

const ServiceDetails = (props) => {
    const { serviceName } = useParams();
    const service = services.find((s) => s.name === serviceName);

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-100 p-6">
                <Header {...props} />
                <div className="text-center mt-20">
                    <h1 className="text-4xl font-bold">Service Not Found</h1>
                    <p className="text-lg mt-4">The requested service does not exist.</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <Header {...props} />
            <div className="max-w-4xl mx-auto mt-20 mb-20">
                <h1 className="text-4xl font-bold text-center mb-6">{service.name}</h1>
                <p className="text-lg mb-4">{service.description}</p>
                <h2 className="text-2xl font-semibold mb-4">Subcategories</h2>
                <ul className="list-disc list-inside">
                    {service.subcategories.map((subcategory) => (
                        <li key={subcategory} className="mb-2">
                            {subcategory}
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
