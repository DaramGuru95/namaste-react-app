import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery";
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

// Lazy Loading  this Lazy Loading have different names
// Chuncking
// Code Splitting
// Dynamic Bundling
// Dynamic import
// On Demand Loading we can call different names of Lazy Loading
const Grocery = lazy(() => import("./Components/Grocery"));
const About = lazy(() => import("./Components/About"));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
