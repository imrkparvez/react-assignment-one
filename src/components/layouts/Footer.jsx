import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ICrew.png";
import blogFooter1 from "../../assets/images/blog/blog-footer-01.jpg";
import blogFooter2 from "../../assets/images/blog/blog-footer-02.jpg";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../icons";

const Footer = () => {
  return (
    <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block  max-h-[100px]">
                <img src={logo} alt="logo" className="lg:w-10 h-10" />
              </Link>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                <Link to="/" className="px-3 text-gray-7 hover:text-white">
                  <FacebookIcon />
                </Link>
                <Link to="/" className="px-3 text-gray-7 hover:text-white">
                  <TwitterIcon />
                </Link>
                <Link to="/" className="px-3 text-gray-7 hover:text-white">
                  <InstagramIcon />
                </Link>
                <Link to="/" className="px-3 text-gray-7 hover:text-white">
                  <LinkedinIcon />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <ul>
                <li>
                  <Link
                    to="/work-process"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Refund policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                <Link to="/" className="group flex items-center gap-[22px]">
                  <div className="overflow-hidden rounded">
                    <img src={blogFooter1} alt="blog" />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    I think really important to design with...
                  </span>
                </Link>
                <Link to="/" className="group flex items-center gap-[22px]">
                  <div className="overflow-hidden rounded">
                    <img src={blogFooter2} alt="blog" />
                  </div>
                  <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                    Recognizing the need is the primary...
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
