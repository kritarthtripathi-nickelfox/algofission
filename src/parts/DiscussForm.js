import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Fade from 'react-reveal/Fade';
import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './DiscussForm.css'; // Import the CSS for styling

export default function DiscussForm(props) {
  const { data, resetForm } = props;

  function submitEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_m6fop85', 'template_o91d9xc', e.target, 'MOUlVQVNt592rH8fA')
      .then(() => {
        toast.success("Success! We'll get back to you soon. Thank you!");
        resetForm();
      }, (error) => {
        toast.error(error);
      });
  }

  const isLargeScreen = useMediaQuery({ minWidth: 720 });

  return (
    <section className={`flex flex-col container mx-auto mt-24 justify-center ${isLargeScreen ? '120px' : 'large-screen-1'} md:top-10`}>
      <Fade bottom>
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-theme-blue text-center font-bold xl:mt-24">Ready to get started with us?</h1>
        <p className="font-light text-xl text-black text-center mb-12">
          Discover how nExcellence Care's compassionate and reliable support can bring a difference in your and loved one's lives
        </p>

        <div className="flex flex-col">
          <form onSubmit={submitEmail}>
            <div className="flex flex-col sm:flex-row mx-auto">
              <input
                id="name"
                name="name"
                type="text"
                value={data.name}
                placeholder="Your name"
                className="input"
                onChange={props.onChange}
              />

              <input
                id="company"
                name="company"
                type="text"
                value={data.company}
                placeholder="Company Name"
                className="input"
                onChange={props.onChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row mx-auto">
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                placeholder="Your email address"
                className="input"
                onChange={props.onChange}
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                placeholder="Your contact number"
                className="input"
                onChange={props.onChange}
              />
            </div>

            <div className="mx-auto">
              <textarea
                id="projectIdea"
                name="projectIdea"
                value={data.projectIdea}
                placeholder="Post your query here."
                className="input"
                onChange={props.onChange}
              />
            </div>
            <input type="submit" value="Send" className="submit-button" />
          </form>
        </div>
      </Fade>

      <ToastContainer />
    </section>
  );
}
