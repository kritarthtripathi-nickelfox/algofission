/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa'

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border-t border-gray-800 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-600 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-600 font-light">
              algofission2024@gmail.com
            </p>
            <p className="text-lg text-gray-600 font-light">
              127/B, Pitambra Vihar, Dewa Road, Chinhat, Lucknow, 226028
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social Media 
            </h1>
            <div style={{display:"flex"}}>
            <Button href="https://www.instagram.com/ten0nten?igsh=N25yZHRtYzRpaTY0" type="link" target="_blank" className="flex text-lg text-gray-300 font-light hover:underline" isExternal>
              <FaInstagram className="mr-5 text-theme-white w-10 h-10" style={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",borderRadius:"10px"}}/>
            </Button>
            <Button href="https://www.linkedin.com/company/algofission/ " type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              <FaLinkedinIn className="mr-5 text-theme w-10 h-10" style={{color: "#0072b1"}}/>
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              <FaFacebook className="mr-5 text-theme w-10 h-10" style={{color:"#1877F2"}}/>
            </Button>
            </div>
          </div>
          {/* <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Career
            </h1>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Nodejs Developer
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Team Lead - Frontend 
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              UI/UX Designer
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Software Engineer
            </Button>
            <Button href="" type="link" target="_blank" className="flex text-lg text-gray-600 font-light hover:underline" isExternal>
              Bussiness Development Executive
            </Button>
          </div> */}
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - AlgoFission
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-600 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              AlgoFission
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
