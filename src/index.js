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
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./Cart";


const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </Provider>
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
            },
            {
                path: "/cart",
                element: <Cart />,
            }
        ]
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


export default RestaurantCard

