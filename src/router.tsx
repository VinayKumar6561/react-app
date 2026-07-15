import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./features/auth/components/HomePage";
import Layout from "./features/Layout/Layout";
import Dashboard from "./features/pages/Dashboard";
import Analytics from "./features/pages/Analytics";
import Help from "./features/pages/Help";
import Users from "./features/pages/Users";
import Settings from "./features/pages/Settings";
import NotFound from "./features/pages/NotFound";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/user",
        element: <Layout />,
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
            path: "analytics",
            element: <Analytics />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "help",
            element: <Help />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
