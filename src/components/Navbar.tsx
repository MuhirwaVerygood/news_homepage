import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    interface LinkSchema {
        name: string;
        href: string;
        visited: boolean;
    }

    const [navbarLinks, setNavbarLinks] = useState<LinkSchema[]>([
        {
            name: "Home",
            href: "/",
            visited: false,
        },
        {
            name: "New",
            href: "/new",
            visited: false,
        },
        {
            name: "Popular",
            href: "/popular",
            visited: false,
        },
        {
            name: "Trending",
            href: "/trending",
            visited: false,
        },
        {
            name: "Categories", // Changed name to make it unique
            href: "/categories",
            visited: false,
        },
    ]);

    const handleLinkClick = (p: LinkSchema) => {
        const updatedLinks = navbarLinks.map((link) =>
            link.name === p.name ? { ...link, visited: true } : {...link, visited:false}
        );
        setNavbarLinks(updatedLinks);
    };

    return (
        <div className="flex md:flex-row md:justify-between">
            <div>
                <img src={Logo} alt="Company logo" />
            </div>

            <div className="flex md:flex-row md:gap-4">
                {navbarLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.href}
                        onClick={() => handleLinkClick(link)}
                        className={` text-[18px] ${
                            link.visited ? "text-orange-500" : "text-gray-400"
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
