    import { createBrowserRouter } from "react-router-dom";
import HomePage from "./features/auth/components/HomePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);