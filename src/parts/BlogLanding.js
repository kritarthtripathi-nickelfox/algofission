import React from 'react';
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const BlogLanding = ({data}) => {
  
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        {/* Centered heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Blogs</h1>
        
        {/* Horizontal scrolling with Splide carousel */}
        <div className="w-full p-8">
          <Splide
            options={{
              type: 'loop',
              autoplay: true,
              perPage: 3, // Show 3 items at once by default
              gap: '1rem', // Space between items
              breakpoints: {
                1200: {
                  perPage: 2, // Show 2 items for medium screens
                },
                768: {
                  perPage: 1, // Show 1 item for small screens
                }
              },
            }}
          >
            {data.map((blog) => (
              <SplideSlide key={blog.id}>
                <Link
                  to={blog.link} // Dynamic route based on blog's link
                  className="w-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                >
                  <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                    <p className="text-gray-600 mt-2">{blog.description}</p>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default BlogLanding;
