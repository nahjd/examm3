import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav">
          <div className="leftsect">
            <h1>Tasty</h1>
          </div>
          <div className="rightsect">
            <ul className="nav1">
              <Link
                style={{
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                }}
                to="/"
              >
                <li>Home</li>
              </Link>
              <Link style={{
                color: "white",
                border: "none",
                textDecoration: "none",
              }} to="/menu"> <li >Menu</li></Link>
              <li>Specialties</li>
              <li>Reservation</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <Link style={{
                backgroundColor: "black",
                color: "orange",
                border: "none",
                textDecoration: "none",
              }} to="/add"> <li >Add</li></Link>
              <Link
                style={{
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                }}
                to="/basket"
              >
                <li>
                  <FaShoppingBasket
                    style={{ color: "red", fontSize: "25px" }}
                  />
                </li>
              </Link>
              <Link
                style={{
                  color: "white",
                  border: "none",
                  textDecoration: "none",
                }}
                to="/wishlist"
              >
                <li>
                  Wishlist
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
