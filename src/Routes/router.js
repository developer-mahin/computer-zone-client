import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../Pages/Dashboard/DashBoard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductOfCategory from "../Pages/Home/CategoriesSection/ProductOfCategory/ProductOfCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            // {
            //     path: "/products",
            //     element: <SignUp></SignUp>
            // },
            {
                path: "/category/:id",
                element: <PrivateRoute><ProductOfCategory></ProductOfCategory></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/my-orders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/add-product",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/dashboard/my-product",
                element: <MyProduct></MyProduct>
            },

        ]
    }
])

export default router;