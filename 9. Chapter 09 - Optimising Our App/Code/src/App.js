import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

//Chuking 
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/grocery',
                element: <Suspense><Grocery /></Suspense>,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);