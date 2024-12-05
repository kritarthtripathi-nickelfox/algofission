/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from 'parts/Header';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolio from 'parts/AllPortfolio';
import Fade from 'react-reveal/Fade';

import Data from 'json/projectdetail.json'
import Data1 from 'json/landingPage.json';
const AboutUs = (props) => {
    const isLargeScreen = useMediaQuery({ minWidth: 220 });
    const marginTop = isLargeScreen ? '100px' : '0';
    return (
        <>
            <Header {...props} />
            <>
                <Fade bottom>
                    <h1 className="text-5xl text-theme-blue text-center font-bold"></h1>
                </Fade>
            </>
            <Fade bottom delay={300 * 1}>
                <section style={{ marginTop: marginTop }}>
                    <div className={`flex flex-col mt-2 mb-12 mx-8 sm:mx-16 xl:mx-28 bg-gradient-to-r `}>
                        <h1 className="text-3xl text-theme-blue font-bold mb-3">
                            About Us
                        </h1>

                        <p className="font-light text-lg text-gray-1000 text-justify">
                            At AlgoFission, we believe in the power of collaboration and transparency. We work closely with our clients to understand their goals, challenges, and vision, allowing us to develop personalized software solutions that align with their objectives. From initial consultation to final delivery, our streamlined development process ensures efficient project management and timely delivery, all while maintaining the highest standards of quality.

                            With a customer-centric approach, we strive to build long-lasting relationships, providing ongoing support and maintenance to ensure the continued success of our clients' software solutions. Together, let's unlock the full potential of technology and embark on a digital journey that propels your business forward. Discover the difference of working with a dedicated and experienced software development team at AlgoFission.
                        </p>
                    </div>
                    <h1 className="text-3xl text-center text-theme-blue font-bold mb-3">
                        How Do We Work
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        {Data.howtowork.map((metholodigies, index) => (
                            <div key={index} className="flip-card w-64 h-64 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden relative mx-4 my-4 text-justify" style={{ borderRadius: "15px" }} >
                                <div className="flip-card-inner absolute inset-0 transition-transform duration-500 transform">
                                    <div className="flip-card-front flex items-center justify-center h-full bg-blue-500 text-white rounded-lg">
                                        <h1 className="text-2xl font-bold text-center">{metholodigies.title}</h1>
                                    </div>
                                    <div className="flip-card-back flex flex-col items-center justify-center h-full bg-white text-gray-800 transform rotate-y-180 absolute inset-0 rounded-lg">
                                        <p className="px-4 py-2 text-center">{metholodigies.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </section>

            </Fade>

            <AllPortfolio data={Data1.portfolio} />
            <Discuss {...props} />
            <Footer />
        </>
    );
}
export default AboutUs;