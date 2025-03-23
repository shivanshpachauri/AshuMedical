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
            </ul>
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
