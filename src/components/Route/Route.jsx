import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import ProductCardDetails from "../Products/ProductCardDetails";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import EditProfile from "../Dashboard/EditProfile";
import DashboardInfo from "../Dashboard/DashboardInfo";

const createdRoute = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch(`https://dummyjson.com/products`),
                element: <Home></Home>
            },
            {
                path: "/products",
                loader: () => fetch(`https://dummyjson.com/products`),
                element: <Products></Products>
            },
            {
                path: "/products/:id",
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`),
                element: <ProductCardDetails></ProductCardDetails>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard/dash-board",
                        element: <DashboardInfo></DashboardInfo>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    },
                    {
                        path: "/dashboard/edit-profile",
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
]);

export default createdRoute;