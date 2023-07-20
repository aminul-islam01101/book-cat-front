import { Link, NavLink } from 'react-router-dom';

import logo from '../../assets/images/shared/logo.png';

import { useLogOutMutation } from '@/redux/features/auth/authApiSlice';
import { useAppSelector } from '@/redux/hooks';

const Navbar = () => {
  const [logOut] = useLogOutMutation();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogOut = async () => {
    await logOut(undefined);
  };
  const active = 'bg-primary/20 hover:bg-secondary/30  text-white px-4 py-1 rounded';
  const inactive = 'bg-transparent text-white hover:text-gray-300';

  return (
    <nav className="shadow-custom fixed top-0 left-0 right-0  z-50 p-4 bg-gray-900 text-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
              <span className="font-bold text-xl">Book Cat</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            {user?.email && (
              <NavLink to="/add-book" className={({ isActive }) => (isActive ? active : inactive)}>
                Add Books
              </NavLink>
            )}
            <NavLink to="/all-books" className={({ isActive }) => (isActive ? active : inactive)}>
              All Books
            </NavLink>
            {!user?.email ? (
              <>
                <NavLink to="/sign-up" className={({ isActive }) => (isActive ? active : inactive)}>
                  Sign Up
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => (isActive ? active : inactive)}>
                  Login
                </NavLink>
              </>
            ) : (
              <button
                type="button"
                onClick={handleLogOut}
                className="bg-secondary/10 hover:bg-secondary/10  text-white px-4 py-1 rounded"
              >
                LogOut
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
