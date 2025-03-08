import { lazy } from "react";
import Confirmationdialog from "../Modals/Confirmationdialog";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import "./Navbar.css";
import ErrorBoundary from "../Errorboundary/Errorboundary";
const Bestselling = lazy(() => import("../Bestselling/Bestselling"));
const Search = lazy(() => import("../Search/Search"));
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/hero";
import Productcards from "../ProductCard/Productcards";
import Faq from "../Faq/faq";
import Header from "../Header/Header";
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav
        id="navid"
        className="navbar  navbar-expand-sm text-center text-capitalize "
      >
        <div
          id="navcontainer"
          className="container rounded text-white shadow-lg"
        >
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <strong>Ashu Medical</strong>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/carousel"
                  aria-current="page"
                >
                  Carousel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bestselling">
                  Bestselling
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Productcard">
                  productcard
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Newentries">
                  Newentries
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  Faq
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/hero">
                  hero
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
            </ul>
            <button
              id="searchnavigation"
              className="btn btn-outline my-2 my-sm-0"
              type="button"
            >
              <NavLink className="searchlink" to="/search">
                Search
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
      {location.pathname == "/" && (
        <>
          <Header />
          <Confirmationdialog />
          <Carousel />
          <Hero />
          <ErrorBoundary>
            <Bestselling />
          </ErrorBoundary>
          <Productcards />
          <Faq />
          <ErrorBoundary>
            <Search />
          </ErrorBoundary>
        </>
      )}
      <Footer />
    </>
  );
};

export default Navbar;
