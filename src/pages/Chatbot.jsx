import React, { useState, useRef } from 'react';
import { 
  FaPaperPlane, 
  FaUserCircle, 
  FaRobot, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
 // useEffect(() => {
  //  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  //}, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user's message to the chat
    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const apiKey = process.env.REACT_APP_GROQ_API_KEY; 

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          model: 'llama3-8b-8192',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content || 'No content available';

      // Add assistant's response to the chat
      setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      setError('Error fetching chat completion');
      toast.error('Error fetching chat response. Please try again.');
      console.error('Error fetching chat completion:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-50 mt-16" >


      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white" 
        style={{ 
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_t31XvoEzMOOTjPH0-WBq2KzJYGRfZ0eBgA&s')` 
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content */}
        <div className="relative max-w-7xl mx-auto py-32 px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to HealthSync
          </h1>
          <p className="text-xl mb-6 drop-shadow-lg">
            Your ultimate companion for achieving optimal health and wellness. Engage with our AI-powered chatbot to receive personalized recommendations tailored just for you.
          </p>
      
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Why Choose HealthSync?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-green-50">
              <FaRobot className="mx-auto text-green-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Receive tailored health and wellness advice based on your unique needs and preferences.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-green-100">
              <FaUserCircle className="mx-auto text-green-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Get support and answers anytime, anywhere, without waiting for office hours.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-green-200">
              <FaPaperPlane className="mx-auto text-green-600 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Confidential & Secure</h3>
              <p className="text-gray-600">
                Your conversations are private and securely handled to protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Chat Section */}
      <main className="flex-grow container mx-auto p-6">

        {/* Chat Header */}
        <div className="flex flex-row gap-2 mb-4 text-center mx-auto ml-96">
            <FaRobot className="text-green-500 text-3xl mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800">Chat with HealthSync</h3>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <FaRobot className="text-green-500 text-3xl mr-2" aria-hidden="true" />
                )}
                {msg.role === 'user' && (
                  <FaUserCircle className="text-blue-500 text-3xl mr-2" aria-hidden="true" />
                )}
                <div
                  className={`max-w-md px-4 py-2 rounded-lg shadow ${
                    msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-green-100 text-green-800'
                  } animate-fade-in`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {error && <p className="text-red-500">{error}</p>}
            {loading && (
              <div className="flex justify-start mb-4">
                <FaRobot className="text-green-500 text-3xl mr-2 animate-pulse" aria-hidden="true" />
                <div className="max-w-md px-4 py-2 rounded-lg bg-green-100 text-green-800 flex items-center">
                  <div className="loader"></div>
                  <span className="ml-2">HealthSync is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Type your message"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center"
              aria-label="Send Message"
            >
              <FaPaperPlane className="text-xl" />
            </button>
          </div>
        </div>
      </main>

      {/* Additional Information Section 
      <section className="bg-gradient-to-r from-green-400 to-green-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Join Our Community</h2>
          <p className="text-lg">
            Connect with like-minded individuals, share your progress, and stay motivated on your health journey with HealthSync.
          </p>
          <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </section>
    */}
      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
              <p className="mb-4 italic">"HealthSync has been a game-changer for my fitness routine. The personalized advice is exactly what I needed."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah L." className="w-12 h-12 rounded-full mr-4" />
                <p className="font-semibold">- Sarah L.</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
              <p className="mb-4 italic">"The 24/7 availability of the chatbot ensures I always have support when I need it."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Mark T." className="w-12 h-12 rounded-full mr-4" />
                <p className="font-semibold">- Mark T.</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
              <p className="mb-4 italic">"I love how HealthSync keeps my information secure while providing insightful recommendations."</p>
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emily R." className="w-12 h-12 rounded-full mr-4" />
                <p className="font-semibold">- Emily R.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-500 to-green-700 text-white py-6 border">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} HealthSync. All rights reserved.</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default ChatComponent;

