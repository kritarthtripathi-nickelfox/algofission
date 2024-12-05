import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const blogData = [
    { 
      id: 'games', 
      title: 'Games', 
      description: `
        Dive into the exciting world of gaming with our detailed reviews, tips, and news about the latest game releases. 
        Explore different genres, learn about the gaming industry trends, and stay updated with cutting-edge technology 
        shaping the future of entertainment. Technologies like AI, real-time multiplayer games powered by Unity, and 
        cloud gaming solutions such as Google Stadia are transforming the gaming world. Whether you're a casual gamer or 
        an esports enthusiast, this is your go-to place for everything gaming.`,
      image: '../assets/images/gaming.jpg' 
    },
    { 
      id: 'food-catering', 
      title: 'Food Catering', 
      description: `
        Elevate your events with exceptional catering services. From mouth-watering appetizers to exquisite desserts, 
        discover how professional catering can transform any occasion into a culinary masterpiece. Our detailed guide 
        covers tips for choosing the right catering service, trending menu options, and ways to make your event 
        unforgettable for your guests. Modern catering services also leverage platforms like mobile apps built with React Native 
        for easy order management, and cloud-based solutions such as AWS for seamless event coordination.`,
      image: '../assets/images/food.jpg' 
    },
    { 
      id: 'travel', 
      title: 'Travel Guides', 
      description: `
        Embark on an unforgettable journey with our comprehensive travel guides. Find insider tips, must-visit 
        destinations, and travel hacks to make your trips hassle-free. Whether you're planning a solo adventure, 
        family vacation, or romantic getaway, our travel content offers insights to ensure a memorable experience. 
        Discover hidden gems, cultural hotspots, and practical advice for every type of traveler. With technology like 
        travel apps built with React and cloud-based solutions for booking and itinerary management, planning your next 
        adventure has never been easier.`,
      image: '../assets/images/travel.jpg' 
    },
  ];
  

const BlogDetails = (props) => {
    const { id } = useParams();
    const blog = blogData.find((item) => item.id === id);

    if (!blog) {
        return (
            <>
                <Header {...props} />
                <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <h1 className="text-3xl font-semibold text-gray-600">Blog not found</h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header {...props} />
            <div className="min-h-screen bg-gradient-to-r p-6 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-6 mt-20 text-center">{blog.title}</h1>
                <img src={blog.image} alt={blog.title} className="w-full md:w-1/2 h-auto rounded-lg mb-6" />
                <p className="text-gray-700 text-lg text-justify leading-relaxed max-w-4xl mx-auto mb-12">
                    {blog.description}
                </p>

            </div>
            <Footer />
        </>
    );
};

export default BlogDetails;
