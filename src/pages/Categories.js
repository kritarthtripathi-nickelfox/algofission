/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolio from 'parts/AllPortfolio';
import Fade from 'react-reveal/Fade';

import Data from 'json/landingPage.json';

export default class ProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const detailData = Data.service.filter((item) => item.id === `${this.props.match.params.id}`);
        return (
            <>
                <Header {...this.props} />
                <>
                    <Fade bottom>
                        <h1 className="text-5xl text-theme-blue text-center font-bold " style={{ marginTop: "100px" }}>{detailData[0].title}</h1>
                    </Fade>

                    <Fade bottom delay={300 * 1}>
                        <div className="flex justify-center xl:mb-6">
                            <img src={`../${detailData[0].imageUrl}`} alt="Project" className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" />
                        </div>
                    </Fade>
                </>
                <Fade bottom delay={300 * 1}>
                    <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                        <h1 className="text-3xl text-theme-blue font-bold mb-3">
                            Project Detail
                        </h1>

                        <p className="font-light text-lg text-gray-400 text-justify">
                            {detailData[0].description}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {detailData[0].metholodigies.map((metholodigies, index) => (
                            <div key={index} className="flip-card w-64 h-64 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden relative mx-4 my-4" style={{ borderRadius: "15px" }}>
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
                </Fade>

                <AllPortfolio data={Data.portfolio} />
                <Discuss {...this.props} />
                <Footer />
            </>
        );
    }
}
