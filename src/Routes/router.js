import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/DashBoard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllProductDetailsPage from "../Pages/Home/AllProductDetailsPage";
import AllProductsSection from "../Pages/Home/AllProductSection/AllProductsSection";
import ProductOfCategory from "../Pages/Home/CategoriesSection/ProductOfCategory/ProductOfCategory";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
            {
                path: "/advertiseDetails/:id",
                element: <AllProductDetailsPage></AllProductDetailsPage>,
                // element: <PrivateRoute><AllProductDetailsPage></AllProductDetailsPage></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://computer-zone-server.vercel.app/advertiseDetails/${params.id}`)
                }
            },
            {
                path: "/all_product_details/:id",
                element: <AllProductDetailsPage></AllProductDetailsPage>,
                // element: <PrivateRoute><AllProductDetailsPage></AllProductDetailsPage></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://computer-zone-server.vercel.app/all_product_details/${params.id}`)
                }
            },
            {
                path: "/category_products_details/:id",
                element: <AllProductDetailsPage></AllProductDetailsPage>,
                loader: ({ params }) => {
                    return fetch(`https://computer-zone-server.vercel.app/all_product_details/${params.id}`)
                }
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
                // loader: () => {
                //     return fetch("https://computer-zone-server.vercel.app/blogs")
                // }
            },
            {
                path: "/products",
                element: <AllProductsSection></AllProductsSection>,
                // loader: () => {
                //     return fetch("https://computer-zone-server.vercel.app/blogs")
                // }
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => {
                    return fetch(`https://computer-zone-server.vercel.app/blogDetails/${params.id}`)
                }
            },
            {
                path: "/category/:id",
                element: <ProductOfCategory></ProductOfCategory>,
                // element: <PrivateRoute><ProductOfCategory></ProductOfCategory></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://computer-zone-server.vercel.app/category/${params.id}`)
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
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            // {
            //     path: "/dashboard/wishlist",
            //     element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            // },
            {
                path: "/dashboard/add-product",
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: "/dashboard/my-product",
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path: "/dashboard/all-sellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/all-buyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/reported-items",
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://computer-zone-server.vercel.app/bookings/${params.id}`)
                }
            },

        ]
    }
])

export default router;