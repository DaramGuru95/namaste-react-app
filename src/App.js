import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart";
// import RestaurantMenu from "./Components/RestaurantMenu";
//Planning the Project
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  - search
 *  - Restaurant Container
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* This Outlet Components will work like this 
      // if (path is /) then load
      the component as <Body /> under the <Header /> Component 
      // if (path is
      “/about”) then load the component as <About /> under the <Header />{" "}
      component */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      // {
      //   path: "/restaurant",
      //   element: <RestaurantMenu />,
      // },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<RouterProvider router={appRouter} />);
