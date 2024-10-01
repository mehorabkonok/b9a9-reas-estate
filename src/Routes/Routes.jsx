import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Update_profile from "../Components/Update_profile/Update_profile";
import User_profile from "../Components/User_profile/User_profile";
import Estate_details from "../Components/Estates/Estates_details/Estate_details";
import PrivateRout from "../Components/Private/PrivateRout";
import Extra from "../Components/Extra/Extra";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRout>
            <Update_profile></Update_profile>
          </PrivateRout>
        ),
      },
      {
        path: "/user_profile",
        element: (
          <PrivateRout>
            <User_profile></User_profile>
          </PrivateRout>
        ),
      },
      {
        path: "/estate_details/:expected_id",
        element: (
          <PrivateRout>
            <Estate_details></Estate_details>
          </PrivateRout>
        ),
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/extra",
        element: <Extra></Extra>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

export default router;
