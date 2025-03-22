import { createBrowserRouter, RouterProvider } from 'react-router';

import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import Groups from './pages/Groups';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'expenses',
        element: <Expenses />,
      },
      {
        path: 'income',
        element: <Income />,
      },
      {
        path: 'groups',
        element: <Groups />,
      },
      {
        path: 'account',
        element: <Account />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
