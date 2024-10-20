import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle the profile dropdown menu
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Close menus when a link is clicked
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
             
              <img src="data:image/png;base64,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" alt="Smart Health Assistant Logo" className="h-8 w-8 mr-2 border-r-2" />
              <span className="text-2xl font-bold">HealthSync</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {isLoggedIn ? (
                <>
                  <NavLink
                    to="/recommendation"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    Wellness Tips
                  </NavLink>
                  <NavLink
                    to="/chatbot"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    Virtual Assistant
                  </NavLink>
                  <NavLink
                    to="/mental-health-support"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    Emotional Support
                  </NavLink>
                  {/* Profile Dropdown */}
                  <div className="relative">
                    <button
                      onClick={toggleProfileDropdown}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded={isProfileDropdownOpen}
                    >
                      <FaUserCircle className="h-5 w-5 mr-1" />
                      Profile
                    </button>
                    {isProfileDropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          <Link
                            to="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              handleLinkClick();
                              setIsProfileDropdownOpen(false);
                            }}
                          >
                            My Account
                          </Link>
                          <button
                            onClick={() => {
                              logout();
                              setIsProfileDropdownOpen(false);
                              handleLinkClick();
                            }}
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Log Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    Create Account
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/recommendation"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Wellness Tips
                </NavLink>
                <NavLink
                  to="/chatbot"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Virtual Assistant
                </NavLink>
                <NavLink
                  to="/mental-health-support"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Emotional Support
                </NavLink>
                <button
                  onClick={() => {
                    logout();
                    handleLinkClick();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-colors"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive ? 'bg-purple-700' : 'hover:bg-purple-700'
                      }`
                    }
                  onClick={handleLinkClick}
                >
                  Create Account
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




/*import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white fixed top-0 left-0 w-full z-10 flex justify-between items-center py-4 px-8 shadow-lg">
      <div className="text-2xl font-bold">Smart Health Assistant</div>
      <div className="flex space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/recommendation" className="btn-nav">Wellness Tips</Link>
            <Link to="/chatbot" className="btn-nav">Virtual Assistant</Link>
            <Link to="/mental-health-support" className="btn-nav">Emotional Support</Link>
            <button 
              onClick={logout}
              className="btn-nav"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-nav">Sign In</Link>
            <Link to="/signup" className="btn-nav">Create Account</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

*/



