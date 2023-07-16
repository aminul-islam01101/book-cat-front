import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import AuthMiddleware from './helpers/AuthMiddleware';
import router from './routes/Routes';

const App = () => {
  console.log('first');
  return (
    <div>
      <AuthMiddleware>
        <>
          <RouterProvider router={router} />
          <Toaster />
        </>
      </AuthMiddleware>
    </div>
  );
};

export default App;
