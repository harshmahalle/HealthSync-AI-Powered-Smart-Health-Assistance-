import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Your Smart Health Assistant
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">
          Empowering you to take control of your health with personalized recommendations, AI-powered insights, and mental health support.
        </p>
        <Link to="/login?guest=true">
                <button className="bg-white text-indigo-600 font-semibold py-3 px-6 -px-4 rounded-full hover:bg-gray-100 transition">Guest login</button>
        </Link>
      </section>

      {/* Features Cards Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Personalized Health Plans</h3>
              <p className="text-gray-700">
                Get AI-powered diet and exercise recommendations tailored to your health metrics and goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Virtual Health Coach</h3>
              <p className="text-gray-700">
                Interact with our virtual coach, powered by ChatGPT, for real-time health advice and support.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Mental Health Support</h3>
              <p className="text-gray-700">
                Access mindfulness exercises and stress management tips to support your mental well-being.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Health Data Tracking</h3>
              <p className="text-gray-700">
                Monitor your daily health metrics and visualize your progress over time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Community Challenges</h3>
              <p className="text-gray-700">
                Participate in health challenges and share your progress with others.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-700">
                Leverage AI to gain deep insights into your health and receive proactive recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Footer Section */}
      <footer className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">About Us</h3>
          <p className="max-w-xl mx-auto text-lg">
            We are dedicated to providing personalized health solutions powered by cutting-edge AI technology. Our mission is to empower individuals to lead healthier lives through proactive and intelligent health management tools.
          </p>
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/feed/" className="hover:text-gray-300">Twitter</a>
              <a href="https://www.linkedin.com/feed/" className="hover:text-gray-300">LinkedIn</a>
              <a href="https://www.linkedin.com/feed/" className="hover:text-gray-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400">&copy; 2024 HealthSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
