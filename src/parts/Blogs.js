import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Blogs = (props) => {
  const blogs = [
    { id: 1, title: 'Games', description: 'Explore the latest games', image: '/assets/images/gaming.jpg', link: '/blogs/games' },
    { id: 2, title: 'Food Catering', description: 'Delicious food services', image: '/assets/images/food.jpg', link: '/blogs/food-catering' },
    { id: 3, title: 'Travel Guides', description: 'Top travel destinations', image: '/assets/images/travel.jpg', link: '/blogs/travel' },
    // Add more cards as needed
  ];

  return (
    <>
      <Header {...props} />
      <div className="flex flex-col items-center mt-20 ">
        {/* Centered heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mt-10">Our Blogs</h1>
        
        <div className="flex flex-wrap gap-6 justify-center p-8 mb-16">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={blog.link} // Dynamic route based on blog's link
              className=" bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 w-80 bg-gradient-to-r shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            >
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>
                <p className=" text-gray-600 mt-2">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
