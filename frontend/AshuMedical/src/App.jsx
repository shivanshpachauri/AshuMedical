import { Suspense } from "react";
import { lazy } from "react";
import "./App.css";
import Hero from "./components/Hero/hero";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/signup";
import Productcards from "./components/ProductCard/Productcards";
import Faq from "./components/Faq/faq";
import Search from "./components/Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/Loading/Loading.jsx";
import ErrorBoundary from "./components/Errorboundary/Errorboundary.jsx";
import Parsingcsv from "./components/Dashboard/parsingcsv.jsx";
import Customers from "./components/Dashboard/Customers/Customers.jsx";
import Cart from "./components/Cart/Cart.jsx";
import ParsingDocument from "./components/Dashboard/parsingdocument.jsx";
const Customid = lazy(() => import("./components/AI/Customid.jsx"));
const AI = lazy(() => import("./components/AI/AI.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard.jsx"));
const Carousel = lazy(() => import("./components/Carousel/Carousel.jsx"));
const Newentries = lazy(() => import("./components/Newentries/Newentries.jsx"));
const ViewCustomers = lazy(() =>
  import("./components/Dashboard/ViewCustomers/ViewCustomers.jsx")
);
const Bestselling = lazy(() => import("./components/Bestselling/Bestselling"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <h1>Error element not found</h1>,
      children: [
        {
          path: "/carousel",
          element: <Carousel />,
        },
        {
          path: "/search",
          element: (
            <ErrorBoundary>
              <Search />
            </ErrorBoundary>
          ),
        },
        {
          path: "/bestselling",
          element: (
            <ErrorBoundary>
              <Suspense fallback={<Loading title="Loading Bestselling" />}>
                <Bestselling />
              </Suspense>
            </ErrorBoundary>
          ),
        },
        {
          path: "/productcard",
          element: <Productcards />,
        },

        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            {
              path: "csvparsing",
              element: <Parsingcsv />,
            },
            {
              path: "documents",
              element: <ParsingDocument />,
            },
            {
              path: "customers",
              element: <Customers />,
            },
            {
              path: "viewcustomers",
              element: (
                <ErrorBoundary>
                  <Suspense
                    fallback={<Loading title="Loadin view customers" />}
                  >
                    <ViewCustomers />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            // {
            //   path:"/Productsale",
            //   element:
            // }
          ],
        },
        {
          path: "/Newentries",
          element: <Newentries />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/hero",
          element: <Hero />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/ai",
          element: (
            <ErrorBoundary>
              <Suspense fallback={<Loading title="loading ai" />}>
                <AI />
              </Suspense>
            </ErrorBoundary>
          ),
          children: [
            {
              path: ":id",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<Loading title="loading id" />}>
                    <Customid />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
