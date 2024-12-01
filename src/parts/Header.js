/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import { Transition } from '@headlessui/react';

import Button from 'elements/Button';
import BrandIcon from 'parts/BrandIcon';

export default function Header(props) {
  const { location } = props;
  const [isCollapse, setIsCollapse] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isTechnologiesDropdownOpen, setIsTechnologiesDropdownOpen] = useState(false);
  const path = location.pathname;
  const technologies = [
    { name: 'Frontend', subcategories: ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Gatsby'] },
    { name: 'Backend', subcategories: ['Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails', 'Java'] },
    { name: 'DevOps', subcategories: ['Docker', 'Kubernetes', 'CI/CD'] },
    { name: 'Mobile', subcategories: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { name: 'Database', subcategories: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { name: 'Cloud', subcategories: ['AWS', 'Azure', 'Google Cloud'] },
    { name: 'ML', subcategories: ['TensorFlow', 'PyTorch', 'Scikit-learn'] },
    { name: 'Blockchain', subcategories: ['Ethereum', 'Solidity', 'Hyperledger'] },
  ];
  const services = [
    {
      name: 'CSD',
      subcategories: ['Requirement Analysis', 'System Design', 'Implementation', 'Maintenance']
    },
    {
      name: 'Mobile App',
      subcategories: ['iOS Development', 'Android Development', 'Cross-Platform Development', 'App Maintenance']
    },
    {
      name: 'UI/UX Design',
      subcategories: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      name: 'QA',
      subcategories: ['Manual Testing', 'Automated Testing', 'Performance Testing', 'Security Testing']
    },
    {
      name: 'Cloud',
      subcategories: ['Cloud Architecture', 'Cloud Migration', 'Cloud Security', 'Cloud Management']
    },
    {
      name: 'DevOps',
      subcategories: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring & Logging', 'Automation']
    }
  ];

  return (
    <header className="header bg-white shadow-md" style={{ maxWidth: '100%', width: '100%' }}>
      <Fade>
        <div className="flex justify-between px-4 lg:px-0">
          <BrandIcon />
          <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => { setIsCollapse(!isCollapse); setIsServicesDropdownOpen(false); setIsTechnologiesDropdownOpen(false) }}>
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
          <li>
            <Button
              className={`${path === '/' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline`}
              type="link"
              href=""
            >
              Home
            </Button>
          </li>
          <li
            className={`py-2 lg:py-0 relative text-lg px-5 no-underline hover:underline`}
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            Services
            {isServicesDropdownOpen && (
              <div className="absolute left-0 mt-2 max-h-auto bg-white shadow-lg rounded " >
                <ul className="grid grid-cols-4 gap-4 p-4" style={{ width: '750px' }}>
                  {services.map((tech) => (
                    <li key={tech.name}>
                      <div className="text-base"><span style={{ backgroundColor: "#6610F2", color: "white", padding: "2px 15px 2px 15px", borderRadius: "7px" }}>{tech.name}</span></div>
                      {tech.subcategories && (
                        <ul className="mt-2">
                          {tech.subcategories.map((subcat) => (
                            <li className="text-gray-700 hover:text-blue-600 py-1 ml-5 text-sm" key={subcat}>
                              {subcat}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li
            className={`py-2 lg:py-0 relative text-lg px-5 no-underline hover:underline`}
            onMouseEnter={() => setIsTechnologiesDropdownOpen(true)}
            onMouseLeave={() => setIsTechnologiesDropdownOpen(false)}
          >
            Technologies
            {isTechnologiesDropdownOpen && (
              <div className="absolute left-0 mt-2 max-h-auto bg-white shadow-lg rounded " >
                <ul className="grid grid-cols-4 gap-4 p-4" style={{ width: '650px' }}>
                  {technologies.map((tech) => (
                    <li key={tech.name}>
                      <div className="text-base"><span style={{ backgroundColor: "#6610F2", color: "white", padding: "2px 15px 2px 15px", borderRadius: "7px" }}>{tech.name}</span></div>
                      {tech.subcategories && (
                        <ul className="mt-2">
                          {tech.subcategories.map((subcat) => (
                            <li className="text-gray-700 hover:text-blue-600 py-1 ml-5 text-sm" key={subcat}>
                              {subcat}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${path === '/project' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li className="py-2 lg:py-0">
            <Button
              className={`${path === '/aboutus' ? 'active-link' : ''} text-lg px-5 no-underline hover:underline`}
              type="link"
              href="/aboutus"
            >
              About Us
            </Button>
          </li>
          <li>
            <Button
              className="text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Discuss Project
            </Button>
          </li>
        </ul>
      </Fade>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Fade>
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li className="py-2 bg-white relative">
              <Button
                className={`${path === '/technologies' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href=""
                onClick={() => {
                  setIsMobileDropdownOpen(!isMobileDropdownOpen);
                  setIsServicesDropdownOpen(true); setIsTechnologiesDropdownOpen(false)
                }}
              >
                Services
              </Button>
              {isMobileDropdownOpen && isServicesDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded ml-10 max-h-60 overflow-y-auto">
                  <ul className="p-4">
                    {services.map((tech) => (
                      <li key={tech.name}>
                        <div className="text-base"><span style={{ backgroundColor: "#6610F2", color: "white", padding: "2px 15px 2px 15px", borderRadius: "7px" }}>{tech.name}</span></div>
                        {tech.subcategories && (
                          <ul className="mt-2 ml-4">
                            {tech.subcategories.map((subcat) => (
                              <li className="text-gray-700 hover:text-blue-600 py-1 text-sm" key={subcat}>
                                {subcat}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="py-2 bg-white relative">
              <Button
                className={`${path === '/technologies' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href=""
                onClick={() => {
                  setIsMobileDropdownOpen(!isMobileDropdownOpen);
                  setIsTechnologiesDropdownOpen(true); setIsServicesDropdownOpen(false)
                }}

              >
                Technologies
              </Button>
              {isMobileDropdownOpen && isTechnologiesDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded ml-10 max-h-60 overflow-y-auto mb-2">
                  <ul className="p-4">
                    {technologies.map((tech) => (
                      <li key={tech.name}>
                        <div className="text-base"><span style={{ backgroundColor: "#6610F2", color: "white", padding: "2px 15px 2px 15px", borderRadius: "7px" }}>{tech.name}</span></div>
                        {tech.subcategories && (
                          <ul className="mt-2 ml-4">
                            {tech.subcategories.map((subcat) => (
                              <li className="text-gray-700 hover:text-blue-600 py-1 text-sm" key={subcat}>
                                {subcat}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Project
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/aboutus' ? 'active-link' : ''} px-10 no-underline hover:underline`}
                type="link"
                href="/aboutus"
              >
                About Us
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Button
                className="mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Discuss Project
              </Button>
            </li>
          </ul>
        </Fade>
      </Transition>
    </header>
  );
}
