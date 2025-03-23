import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import Groups from "./pages/Groups";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./ui/layout/AppLayout";
import AddTransaction from "./pages/AddTransaction";

import { DarkModeProvider } from "./context/DarkModeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "income",
        element: <Income />,
      },
      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "add-transaction",
        element: <AddTransaction />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
