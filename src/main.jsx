import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Dashboard from "./feature/dashboard/pages/dashboard.jsx";
import AddCar from "./feature/addCar/pages/addCar.jsx";
import Transactions from "./feature/transactions/pages/transactions.jsx";
import UserInformation from "./feature/usersInformation/pages/userInformation.jsx";
import Login from "./feature/auth/pages/login.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/cars", element: <AddCar /> },
  { path: "/order", element: <Transactions /> },
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
