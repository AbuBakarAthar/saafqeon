import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // If using React Router

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
            <a href="/" className="text-lg font-bold text-white">
              YourLogo
            </a>
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
              <a
                key={item.name}
                href={item.link}
                className={`group relative text-white hover:text-gray-400 transition-all ${
                  active === item.link ? "font-semibold" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transition-transform duration-300 ${
                    active === item.link ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Contact Us button on the right */}
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
