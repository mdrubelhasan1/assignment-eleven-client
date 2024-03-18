import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path:'signup',
            element: <SignUp></SignUp>
           },
           {
            path: 'login',
            element: <Login></Login>
           },
           {
            path: 'toyCollection',
            element: <AllToys></AllToys>,
            
           }

        ]
    }
])
export default router;
  