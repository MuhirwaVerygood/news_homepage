import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import MenuOpen from "../assets/images/icon-menu.svg";
import MenuClosed from "../assets/images/icon-menu-close.svg";


export  interface LinkSchema {
    name: string;
    href: string;
    visited: boolean;
}
const Navbar = () => {

    const [navbarLinks, setNavbarLinks] = useState<LinkSchema[]>([
        { name: "Home", href: "/", visited: false },
        { name: "New", href: "/new", visited: false },
        { name: "Popular", href: "/popular", visited: false },
        { name: "Trending", href: "/trending", visited: false },
        { name: "Categories", href: "/categories", visited: false },
    ]);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleLinkClick = (p: LinkSchema) => {
        const updatedLinks = navbarLinks.map((link) =>
            link.name === p.name ? { ...link, visited: true } : { ...link, visited: false }
        );
        setNavbarLinks(updatedLinks);
        setIsOpen(false); // Close the menu after clicking a link
    };

    const toggleMenu = () => {
        console.log(isOpen);
        
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex w-[95%] items-center mx-auto justify-between p-4 relative  bg-white  text-white">
            <div>
                <img src={Logo} alt="Company logo" />
            </div>

            {/* Hamburger icon for small screens */}
            <div className="md:hidden " onClick={toggleMenu}>
                <img src={isOpen ? MenuClosed : MenuOpen} alt="Menu toggle" className="w-6 h-6 cursor-pointer" />
            </div>

            {/* Menu items */}
            <div
                className={`${
                    isOpen ? "flex" : "hidden"
                } flex-col md:flex w-full  md:flex-row md:gap-4 md:static  ss:absolute top-16     bg-gray-800 md:bg-transparent md:w-auto`}
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
        </nav>
    );
};

export default Navbar;
