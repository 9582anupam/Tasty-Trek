import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header"
import Body from "./Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About"
import Contact from "./Contact";
import Error from "./Error";
import RestaurantCard from "./RestaurantCard"
import RestaurantMenu from "./RestaurantMenu";





const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* <Body /> */}
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:   [
            {
                path: "/",
                element: <Body />,
            }
            ,
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


export default RestaurantCard

