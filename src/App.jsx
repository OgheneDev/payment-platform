import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import SendPage from './pages/SendPage';

const router = createBrowserRouter([
  {
    path: '/', // Root route
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />, // Wrap routes under MainLayout
    children: [
      {
        path: 'dashboard', // Accessible as /dashboard
        element: <Dashboard />,
      },
      // Add more pages wrapped by MainLayout here
      {
        path: 'profile', // Example future page
        element: <div>Profile Page</div>,
      },
      {
        path: '/send',
        element: <SendPage />
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;


