// src/routes.jsx
import { createHashRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);