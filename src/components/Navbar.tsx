import { useState } from "react";
import { close, menu, day } from "../assets";
import { navLinkItemProps, navLinks } from "../data/dataUsed";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={day} alt="theme" className="w-[32px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-start flex-1">
        {navLinks.map((navLink: navLinkItemProps, index: number) => (
          <li
            key={navLink.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggleMenu((currToggleMenu) => !currToggleMenu)}
        />

        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w[200px] rounded-xk sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map((navLink: navLinkItemProps, index: number) => (
              <li
                key={navLink.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-3"
                } `}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
