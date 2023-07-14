import { Link } from 'react-router-dom';

import logo from '../../assets/images/shared/logo.png';

const Navbar = () => {
  console.log('first');
  return (
    <nav className="shadow-custom fixed top-0 left-0 right-0  z-50 p-4 bg-gray-900 text-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
            <span className="font-bold text-xl">Book Cat</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/sign-up" className="bg-transparent text-white hover:text-gray-300">
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-primary hover:bg-secondary 00 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
