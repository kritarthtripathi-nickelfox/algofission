/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Portfolio({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center">
      <Fade bottom>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Our Portfolio</h1>

        <p className="font-light text-lg text-gray-400 text-center mb-12">
          We are ready to scale up your business with our great work result.
        </p>
      </Fade>

      <div className=" grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
        {
          data.map((item, index) => (
            <Fade bottom delay={500 * index}>
              <Button type="link">
                <div className=" bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card " style={{ border: "0.2px solid #6610F2" }}>
                  <div className="relative">
                    <h2 className="text-center text-xl" style={{ color: '#6610F2', fontSize: "40px", fontWeight: "bold" }}>{item.description}</h2>

                  </div>
                  <div className="py-4">
                    <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                  </div>
                </div>
              </Button>
            </Fade>
          ))
        }
      </div>
    </section>
  );
}
