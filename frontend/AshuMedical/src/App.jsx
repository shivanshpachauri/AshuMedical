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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SortingProvider } from "./components/Context/sortingcontext";
import { DeleteProvider } from "./components/Context/deletecontext";
import { EditingProvider } from "./components/Context/Editingcontext.jsx";
import Loading from "./components/Loading/Loading.jsx";
import ErrorBoundary from "./components/Errorboundary/Errorboundary.jsx";
const queryClient = new QueryClient();
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard.jsx"));
const Carousel = lazy(() => import("./components/Carousel/Carousel.jsx"));
const Newentries = lazy(() => import("./components/Newentries/Newentries.jsx"));
const Bestselling = lazy(() => import("./components/Bestselling/Bestselling"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <h1>Error element not found</h1>,
      // index: true,
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
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <EditingProvider>
        <DeleteProvider>
          <SortingProvider>
            <RouterProvider router={router}></RouterProvider>
          </SortingProvider>
        </DeleteProvider>
      </EditingProvider>
    </QueryClientProvider>
  );
}

export default App;
