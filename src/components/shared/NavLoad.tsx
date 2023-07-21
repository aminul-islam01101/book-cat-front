import logo from '../../assets/images/shared/logo.png';

const NavLoad = () => (
  <nav className="shadow-custom fixed top-0 left-0 right-0  z-50 p-4 bg-gray-900 text-white">
    <div className="container">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          <span className="font-bold text-xl">Book Cat</span>
        </div>
      </div>
    </div>
  </nav>
);

export default NavLoad;
