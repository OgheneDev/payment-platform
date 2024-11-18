import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FinancialContextProvider } from './context/FinancialContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import MainLayout from './layouts/MainLayout';
import SendPage from './pages/SendPage';
import WalletPage from './pages/WalletPage';
import ActivityPage from './pages/ActivityPage';

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
      },
      {
        path: '/wallet',
        element: <WalletPage />
      },
      {
        path: '/activity',
        element: <ActivityPage />
      }
    ],
  },
]);


const App = () => {
  return (
    <FinancialContextProvider>
      <RouterProvider router={router} />
    </FinancialContextProvider>
  );
}

export default App;


