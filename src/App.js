// App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import Chatbot from './pages/Chatbot';
import MentalHealthSupport from './pages/MentalHealthSupport';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AuthProvider, { AuthContext } from './AuthContext';

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = React.useContext(AuthContext);
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<PrivateRoute element={<Recommendation />} />} />
        <Route path="/chatbot" element={<PrivateRoute element={<Chatbot />} />} />
        <Route path="/mental-health-support" element={<PrivateRoute element={<MentalHealthSupport />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;



