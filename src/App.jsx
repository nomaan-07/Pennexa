import { Navigate, RouterProvider } from "react-router";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Groups from "./pages/Groups";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./ui/layout/AppLayout";
import Signup from "./pages/Signup";
import ProtectedRoute from "./features/authentication/ProtectedRoute";

import { DarkModeProvider } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { createHashRouter } from "react-router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
});

const router = createHashRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
        path: "incomes",
        element: <Incomes />,
      },

      {
        path: "groups",
        element: <Groups />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
