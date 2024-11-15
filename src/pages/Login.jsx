import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  //Regular login
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      console.log("mysql response is",response);
      const data = await response.json();
      
      if (response.ok) {
        login(data.user.email); 
        alert('Login successful');
        navigate('/recommendation');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
  };

  // Automatically login as guest if "guest=true" is in the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isGuest = queryParams.get('guest');

    if (isGuest === 'true') {
      handleLogin('mahalleharsh9@gmail.com', '12345');
    }
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gradient-to-r from-green-400 to-blue-500 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl mb-6 text-center font-semibold text-blue-600">Login</h2>
        
        <input
          type="email"
          className="mb-4 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          className="mb-6 p-3 border border-gray-300 rounded w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          onClick={() => handleLogin(email, password)} 
          className="bg-blue-600 text-white py-3 px-6 rounded w-full hover:bg-blue-700 transition duration-300">
          Login
        </button>
        
        <p className="mt-4 text-center text-gray-500">
          Don't have an account? <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;





