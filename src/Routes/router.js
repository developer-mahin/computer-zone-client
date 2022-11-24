import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductOfCategory from "../Pages/Home/CategoriesSection/ProductOfCategory/ProductOfCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:"/", 
        element: <Main></Main>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/", 
                element: <Home></Home>
            }, 
            {
                path:"/home", 
                element: <Home></Home>
            }, 
            {
                path:"/login", 
                element:<Login></Login>
            }, 
            {
                path:"/signup", 
                element:<SignUp></SignUp>
            },
            {
                path:"/category/:id", 
                element:<ProductOfCategory></ProductOfCategory>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
        ]
    }
])

export default router;