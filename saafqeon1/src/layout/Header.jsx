import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Use NavLink

const Header = () => {
  const location = useLocation(); // Get current route
  const [active, setActive] = useState("");

  // Update active link on route change
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-lg font-bold text-white">
              YourLogo
            </NavLink>
          </div>

          {/* Navigation links in the center */}
          <div className="hidden md:flex md:items-center md:space-x-6 mx-auto">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Team", link: "/team" },
              { name: "Blog", link: "/blog" },
              { name: "Product", link: "/products" },
              { name: "Contact Us", link: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `group relative text-white hover:text-gray-400 transition-all ${
                    isActive ? "font-semibold" : ""
                  }`
                }
              >
                {item.name}
                <span
                  className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
