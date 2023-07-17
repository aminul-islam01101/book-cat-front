import { Outlet } from 'react-router-dom';

import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const Root = () => {
  console.log('Root test');

  return (
    <div className=" flex flex-col justify-between min-h-screen">
      <div className="pt-20">
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
