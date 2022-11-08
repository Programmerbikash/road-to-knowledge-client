import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "contacts/:contactId",
          element: <h1>Children Route</h1>,
        },
      ],
    },
  ]);