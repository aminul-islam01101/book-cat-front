import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
    console.log('Root test');

    return (
        <div className=" flex flex-col justify-between min-h-screen">
            <div>
                <Navbar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Root;
