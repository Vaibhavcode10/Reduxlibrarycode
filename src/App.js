import react,{useState} from "react";
import "./App.css";
import Setcookies from './Cookies/Setcookies'
import { Link, Route,Routes } from "react-router";
import Getcookievlaue from "./Cookies/Getcookievlaue";
import CookieDataProvider from './Cookies/Cookiedataprovider';
import LoginPage from "./Cookies/LoginPage";
import Page1 from "./Cookies/Page1";
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-light ms-2" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-light">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link text-light">
                Retrieve
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" className="nav-link text-light">
                 Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <CookieDataProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/search" element={<Getcookievlaue />} />
          <Route path="/Home" element={<Page1 />}/>
        </Routes>
      </CookieDataProvider>
    </>
  );
}

export default App;
