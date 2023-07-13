import 'react-toastify/dist/ReactToastify.css';

import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import router from './routes/Routes';

const App = () => {
    console.log('first');
    return (
        <div>
            <RouterProvider router={router} />
            <Toaster />
            <ToastContainer autoClose={3000} />
        </div>
    );
};

export default App;
