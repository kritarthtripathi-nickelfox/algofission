/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Fade from 'react-reveal/Fade';

import heroPortfolio from 'assets/images/portfolioHero.png';

export default function HeroPortfolio() {
  const isLargeScreen = useMediaQuery({ minWidth: 720 });
  return (
    <section className={`hero sm:items-center lg:items-start sm:flex-row ${isLargeScreen ? 'large-screen' : 'large-screen-1'}`}>
      <Fade bottom>
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-0 lg:mt-6 xl:mt-20">
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
            Portfolio
          </h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            As a Software House that designs and develops website, mobile apps, and UI/UX design, we have been trusted by our clients from all around the world.
            <br />
            Crafting Digital Excellence
            <br />
            Global Trust, Local Expertise
            <br />
            Website Design that Captivates
            <br />
            Mobile Apps for the Future
            <br />
            UI/UX Excellence
            <br />
            Join the Digital Revolution
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pr-12 xl:mt-20">
          <img src={heroPortfolio} alt="Hero" />
        </div>
      </Fade>
    </section>
  );
}
