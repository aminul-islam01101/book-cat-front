import 'react-toastify/dist/ReactToastify.css';

import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { store } from './redux/store';
import router from './routes/Routes';

const App = () => {
    console.log('first');
    return (
        <div>
            <Provider store={store}>
                <RouterProvider router={router} />
                <Toaster />
                <ToastContainer autoClose={3000} />
            </Provider>
        </div>
    );
};

export default App;
