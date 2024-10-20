import React, { useState } from 'react';
import { FaHeart, FaEnvelope } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MentalHealthSupport = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Placeholder for subscription logic
    if (email) {
      toast.success('Thank you for subscribing! We will keep you updated.');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center text-white">
        <FaHeart className="mx-auto text-6xl mb-6 text-red-500" />
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Empowering Your Mental Well-being
        </h2>
        <p className="text-lg sm:text-xl mb-8 drop-shadow-lg">
          We’re developing comprehensive mental health support tools to help you navigate life’s challenges with ease and confidence.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to stay updated"
            className="w-full sm:w-auto px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
            aria-label="Subscribe"
          >
            <FaEnvelope className="mr-2" />
            Subscribe
          </button>
        </form>

        {/* Optional: Countdown Timer */}
        {/* Uncomment the following block if you want to include a countdown timer */}
        {/* 
        <div className="flex justify-center mt-8">
          {timerComponents.length ? (
            <div className="flex space-x-4">
              {timerComponents}
            </div>
          ) : (
            <span className="text-xl">We’ve Launched!</span>
          )}
        </div>
        */}
      </div>
    </section>
  );
};

export default MentalHealthSupport;

