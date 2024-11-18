import React, { useState } from 'react';
import { Menu, Bell, X, Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Swal from 'sweetalert2';
import logo from '../assets/images/paypal-icon-1735x2048-7umw9cq7.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      Swal.fire({
        title: 'Success',
        text: 'You have been successfully logged out',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Failed to logout. Please try again.',
        icon: 'error'
      });
      console.error('Logout error:', error);
    }
  };

  return (
    <header className='bg-[#003087] text-custom-light-blue py-[30px] px-[10px] md:px-[100px] flex justify-between items-center relative'>
      {/* Menu Button */}
      <button className='md:hidden' onClick={() => setIsMenuOpen(true)}>
        <Menu size={25} />
      </button>

      {/* Logo */}
      <div className="logo md:hidden">
        <img src={logo} alt="Dashboard Logo" className='w-[25px]' />
      </div>

      {/* Desktop Navigation Menu */}
      <ul className="desktop-menu hidden md:flex items-center gap-[20px]">
        <li>
          <img src={logo} alt="" className='w-[25px]' />
        </li>
        <li>
          <Link
            to="/dashboard"
            className={`block px-3 py-2 rounded-full ${
              location.pathname === '/dashboard'
                ? 'bg-[#0046aa] text-white'
                : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/send"
            className={`block px-3 py-2 rounded-full ${
              location.pathname === '/send'
                ? 'bg-[#0046aa] text-white'
                : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
            }`}
          >
            Send
          </Link>
        </li>
        <li>
          <Link
            to="/wallet"
            className={`block px-3 py-2 rounded-full ${
              location.pathname === '/wallet'
                ? 'bg-[#0046aa] text-white'
                : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
            }`}
          >
            Wallet
          </Link>
        </li>
        <li>
          <Link
            to="/activity"
            className={`block px-3 py-2 rounded-full ${
              location.pathname === '/activity'
                ? 'bg-[#0046aa] text-white'
                : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
            }`}
          >
            Activity
          </Link>
        </li>
      </ul>

      {/* Right-side Icons and Logout */}
      <div className='flex gap-[20px] items-center'>
        <button>
          <Bell size={20} />
        </button>
        <button className='hidden md:block'>
          <Settings size={20} />
        </button>
        <button 
          className='uppercase hidden md:block hover:text-white transition-colors'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-[#003087] z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='p-4 flex justify-between items-center'>
          <button 
            className="uppercase text-white hover:text-gray-200 transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={25} className="text-white" />
          </button>
        </div>
        <nav className='p-4'>
          <ul className='space-y-4 text-[18px]'>
            <li>
              <Link
                to="/dashboard"
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === '/dashboard'
                    ? 'bg-[#0046aa] text-white'
                    : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/send"
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === '/send'
                    ? 'bg-[#0046aa] text-white'
                    : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
                }`}
              >
                Send
              </Link>
            </li>
            <li>
              <Link
                to="/wallet"
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === '/wallet'
                    ? 'bg-[#0046aa] text-white'
                    : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
                }`}
              >
                Wallet
              </Link>
            </li>
            <li>
              <Link
                to="/activity"
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === '/activity'
                    ? 'bg-[#0046aa] text-white'
                    : 'text-custom-light-blue hover:bg-[#0046aa] hover:text-white'
                }`}
              >
                Activity
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;