import React, { useState } from "react";
import Link from "./Link";
import { IoClose, IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      id: 1,
      path: "/home",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About Us",
    },
    {
      id: 3,
      path: "/services",
      name: "Services",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 5,
      path: "/login",
      name: "Login",
    },
  ];

  return (
    <nav>
      <div
        className="p-8 md:hidden text-2xl bg-gray-400 "
        onClick={() => setOpen(!open)}
      >
        {open == true ? <IoClose /> : <IoMenu className="md:hidden" />}
      </div>
      <ul
        className={`md:flex items-center absolute md:static duration-1000
      ${open ? "top-16" : "-top-60"}
         px-6 bg-gray-400 text-black mt-1`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
