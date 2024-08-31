import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import MenuOpen from "../assets/images/icon-menu.svg";
import MenuClosed from "../assets/images/icon-menu-close.svg";
import { useState } from "react";

interface LinkSchema {
  name: string;
  href: string ;
  visited : boolean 
}


const GivenHumburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [navbarLinks, setNavbarLinks] = useState<LinkSchema[]>([
    { name: "Home", href: "/", visited: false },
    { name: "New", href: "/new", visited: false },
    { name: "Popular", href: "/popular", visited: false },
    { name: "Trending", href: "/trending", visited: false },
    { name: "Categories", href: "/categories", visited: false },
  ]);

  const handleLinkClick = (p: LinkSchema) => {
    const updatedLinks = navbarLinks.map((link) =>
      link.name === p.name
        ? { ...link, visited: true }
        : { ...link, visited: false }
    );
    setNavbarLinks(updatedLinks);
    setIsOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    console.log(isOpen);

    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex md:w-full     justify-between   md:py-4   bg-white  text-white ">
      <div className="ss:h-[50px]    sm:w-[30%]    ">
        <img src={Logo} alt="Company logo" />
      </div>

      <div className=" flex md:flex-row sm:w-full md:ml-auto    sm:flex-col ss:w-[70%] self-center  ">
      <div className="md:hidden flex sm:self-end justify-end ss:ml-auto" onClick={toggleMenu}>
                <img src={isOpen ? MenuClosed : MenuOpen} alt="Menu toggle" className="w-6 h-6 cursor-pointer" />
      </div>

       <div
                className={`${
                    isOpen ? "flex" : "hidden"
                } flex-col md:flex  ss:bg-white  ss:w-full  ss:h-screen md:h-[50px] md:static  md:flex-row md:gap-2 md:ml-auto   ss:absolute top-[5vh]   ss:text-black md:text-white     md:bg-transparent `}
            >
                {navbarLinks.map((link, index) => ( 
                    <Link
                        key={index}
                        to={link.href}
                        onClick={() => handleLinkClick(link)}
                        className={`block px-4 py-2 md:inline-block text-[18px] ${
                            link.visited ? "text-orange-500" : "text-gray-400"
                        } hover:text-orange-500`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>  
      </div>
    </nav>
  );
};

export default GivenHumburger;
