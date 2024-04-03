import React, { useState } from "react";
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark px-[80px] `}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src={logo}
                alt="logo"
                className="w-full h-14"
              />
             
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/#" too="/">Home</ListItem>
                  <ListItem NavLink="/#" too="/About">About</ListItem>
                  <ListItem NavLink="/#" too="/Quiz">Career Quiz</ListItem>
                  <ListItem NavLink="/#" too="/Resources">Resources</ListItem>
                  <ListItem NavLink="/#" too="/expert">Talk to an Expert</ListItem>
                  <ListItem NavLink="/#" too="/Blog">Blog</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end gap-8 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base rounded-md font-medium text-dark hover:text-primary bg- dark:text-white bg-primary"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink,too}) => {
  return (
    <>
      <li>
        <Link to={too}><a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 hover:text-primary lg:ml-12 lg:inline-flex"
        >
          {children}
        </a></Link>
        
      </li>
    </>
  );
};
