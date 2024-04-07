import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const navigationItems = [
    { label: "Top", link: "/" },
    { label: "News", link: "/news" },
    { label: "Introduction", link: "/introduction" },
    { label: "Story", link: "/story" },
    { label: "Onair", link: "/onair" },
    { label: "Character", link: "/character" },
    { label: "Staff & Cast", link: "#" },
    { label: "Blu-Ray", link: "#" },
    { label: "Music", link: "#" },
    { label: "Goods", link: "#" },
    { label: "Books", link: "#" },
    { label: "Special", link: "#" },
    { label: "Twitter", link: "#" },
  ];

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleNavClick = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    if (isNavVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isNavVisible]);

  return (
    <nav className="w-full h-20 pb-5 bg-white flex-col justify-center pt-4 px-0 z-[9999] lg:h-auto relative lg:flex-row  lg:pt-5">
      <div className="h-14 lg:flex justify-between items-center mx-auto lg:w-[95%] lg:gap-x-5">
        <div className="flex justify-between items-center px-5 lg:px-0">
          <img src="src\assets\img\Navbar\header_logo.png" alt="header-logo" className="w-48 h-12 lg:w-64 lg:h-auto min-w-1 min-h-1" />
          <span onClick={toggleNavVisibility} className="cursor-pointer">
            <img src={`${isNavVisible ? "src/assets/img/Navbar/header_menu_close.svg" : "src/assets/img/Navbar/header_menu_open.svg"}`} alt="menu" className="h-12 lg:hidden" />
          </span>
        </div>

        <ul
          className={`${
            isNavVisible ? "-translate-y-1" : "-translate-y-[200%]"
          } flex transition-all mt-2 pb-16 h-screen w-auto px-0 bg-white items-center justify-center flex-col text-center uppercase font-[1000] font-gothic text-2xl gap-y-4 z-[999] relative
        lg:translate-y-0 lg:h-auto lg:z-[9999] lg:pb-0 lg:flex-row lg:gap-x-6 lg:mt-0 lg:text-xl lg:flex-wrap lg:justify-start lg:ml-8`}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} onClick={handleNavClick} className="hover:text-[#c840b6] duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
