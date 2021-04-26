import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import CreateNewAccount from "../CreateNewAccount/CreateNewAccount";
import Login from "../Login/Login";
import UserProfile from "../UserProfile/UserProfile";
import Search from "../Search/Search"

const Navbar = () => {
  return (
    // <Router>
    <div>
      <nav className="header__navigator">
        <p className="header__logo">
          <Link className="link" to="/">
            {" "}
            CRYPTO COLLECTION. <br />
            LINK
          </Link>
        </p>
      <Search/>
        <div className="registration__buttons">
          {/* <Link className="link" to="/login"> */}
            <Login />
          {/* </Link> */}

          {/* <Link className="link" to="/register"> */}
            <CreateNewAccount />
          {/* </Link> */}
      {/* <Link className="link" to="/profile" > */}
      
      {/* <UserProfile/> */}
      {/* </Link> */}
        </div>
      </nav>

      <div>
        <nav className="router__tabs">
          <Link className="link" to="/profile">
            <div className="my__collection__tab">
              <span className="tab__text"> My Profile</span>
            </div>
          </Link>

          <Link className="link" to="/watchlist">
            <div className="my__watchlist__tab">
              <span className="tab__text">My Watchlist</span>
            </div>
          </Link>

          <Link className="link" to="/shop">
            <div className="shop__tab">
              <span className="tab__text">Get T-Shirt</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
    /* </Router> */
  );
};

export default Navbar;
