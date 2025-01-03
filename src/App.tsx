import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Home from './pages/Home';
import Generator from './pages/Generator';
import Marketplace from './pages/Marketplace';
import Activity from './pages/Activity';
import AgentDetails from './pages/AgentDetails';
import Profile from './pages/Profile';

// Create React Query client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/generate', element: <Generator /> },
      { path: '/marketplace', element: <Marketplace /> },
      { path: '/activity', element: <Activity /> },
      { path: '/agent/:id', element: <AgentDetails /> },
      { path: '/profile', element: <Profile /> }
    ]
  }
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}