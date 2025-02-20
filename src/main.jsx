import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./feature/dashboard/pages/dashboard.jsx";
import UserInformation from "./feature/users/pages/userInformation.jsx";
import Login from "./feature/auth/pages/login.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Cars from "./feature/addCar/pages/cars.jsx";

const router = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/cars", element: <Cars /> },

  { path: "/user", element: <UserInformation /> },
  { path: "/", element: <Login /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
