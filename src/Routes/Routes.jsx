import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blog from "../Pages/Blog/Blog";
import MyToys from "../Pages/MyToys/MyToys";
import Contact from "../Pages/Contact/Contact";


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
            
           },
           {
            path: '/',
            element: <AddToy></AddToy>
           },
           {
            path: 'blog',
            element: <Blog></Blog>
           },
           {
            path: 'mytoys',
            element: <MyToys></MyToys>
           },
           {
            path: 'contact',
            element: <Contact></Contact>
           }

        ]
    }
])
export default router;
  