import React from "react";
import logo from "../../assets/images/ICrew.png";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <Link to="/" className="navbar-logo block sm:w-60 max-w-full px-4">
              <img src={logo} alt="logo" className="header-logo h-12" />
            </Link>
            <ul className="hidden lg:flex">
              <li className="group relative">
                <NavItem title={"Home"} link="/" />
              </li>
              <li className="group relative">
                <NavItem title={"About"} link="/about" />
              </li>
              <li className="group relative">
                <NavItem title={"Pricing"} link="/pricing" />
              </li>
              <li className="group relative">
                <NavItem title={"Blog"} link="/blog" />
              </li>
            </ul>
            <div className="sm:flex">
              <Link
                to="/signin"
                className="flex-1 loginBtn px-1 py-2 text-xs sm:px-[22px] sm:py-2 sm:text-base font-medium text-white hover:opacity-70"
                aria-label="Sign In"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="signUpBtn rounded-md bg-white bg-opacity-20 py-1 px-2 text-xs sm:px-6 sm:py-2 sm:text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                aria-label="Sign Up"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
