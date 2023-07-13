import logo from '../../assets/images/shared/logo.png';

const Navbar = () => {
    console.log('first');
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                <span className="font-bold text-xl">Book Cat</span>
            </div>
            <div className="flex items-center space-x-4">
                <button type="button" className="bg-transparent text-white hover:text-gray-300">
                    Sign Up
                </button>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
