
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Servicedetails from "../pages/Servicedetails/Servicedetails";
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register'
import Feedback from "../Shared/Feedback/Feedback";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {path:'/',
    element:<Home></Home>,
    
    loader:()=>fetch('/feedback.json'),
    loader:()=>fetch('/events.json'),
      },
      {path:'/events/:id',
      element:<Servicedetails></Servicedetails>,
      loader:()=>fetch('/events.json')
        },
       
        {path:'/login',
    element:<Login></Login>
    },
    {path:'/register',
    element:<Register></Register>
    },



      ]
    },
  ]);
  export default router;