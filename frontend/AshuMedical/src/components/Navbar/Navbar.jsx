import { lazy } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import Confirmationdialog from "../Modals/Confirmationdialog";
import ErrorBoundary from "../Errorboundary/Errorboundary";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/hero";
import Productcards from "../ProductCard/Productcards";
import Faq from "../Faq/faq";
import Header from "../Header/Header";
import "./Navbar.css";
import Swal from "sweetalert2";

const Bestselling = lazy(() => import("../Bestselling/Bestselling"));
const Search = lazy(() => import("../Search/Search"));

const Navbar = () => {
  const location = useLocation();

  return (
    <div style={{ flexWrap: "wrap" }}>
      <nav
        id="navid"
        className="navbar navbar-expand-sm"
        style={{ flexWrap: "wrap" }}
      >
        <div id="navcontainer" className="container rounded shadow-lg">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <strong>Ashu Medical</strong>
            </a>
          </div>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/bestselling">
                  Bestselling
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Productcard">
                  Product Card
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard/csvparsing">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Newentries">
                  New Entries
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hero">
                  Style
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
              <li className="nav-item">
                <NavLink className="nav-link ai-link" to="/ai">
                  AI
                </NavLink>
              </li>
              {localStorage.getItem("loggedin") && (
                <li className="nav-item" style={{ marginLeft: "0.5em" }}>
                  <div
                    className="btn btn-danger "
                    onClick={() => {
                      localStorage.removeItem("loggedin");
                      Swal.fire("logged out successfully");
                      window.location.reload();
                    }}
                  >
                    Signout
                  </div>
                </li>
              )}
            </ul>
            <h5 className="m-1 p-1 text-light">Cart &nbsp;</h5>
            <NavLink className="d-flex" to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                className="carticon bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </NavLink>
            <button id="searchnavigation" className="btn border-0">
              <NavLink className="searchlink" to="/search">
                Search
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
      {location.pathname === "/" && (
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
    </div>
  );
};

export default Navbar;
