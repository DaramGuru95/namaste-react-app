import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      <Body />
    </>
  );
};

console.log(1 + "1" - 1);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<RouterProvider router={appRouter} />);
