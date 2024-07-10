import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import FAQ from "../pages/FAQ/FAQ";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'products',
        element:<Products/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'faq',
        element:<FAQ/>
      }
    ]
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'register',
    element:<Register/>
  },
]);
