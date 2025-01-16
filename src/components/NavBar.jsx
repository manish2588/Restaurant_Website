import { useState } from "react";
import { Link } from "react-scroll"; // Importing from react-scroll
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const { cart } = useSelector((state) => state.cart);
  const cartLength = cart.length;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div>
      <div className="bg-black opacity-75 p-2 lg:p-6">
        <div className="flex justify-between items-center">
          <button onClick={toggleSidebar} className="lg:hidden p-4 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden lg:flex justify-center space-x-8 lg:space-x-14 w-full max-w-6xl mx-auto">
            <div className="text-white font-medium lg:text-lg text-base">
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={1000}
                spy={true}
                onSetActive={() => handleSetActive("about")}
                className={
                  activeLink === "about"
                    ? "text-red-600 font-bold"
                    : "cursor-pointer hover:text-red-600"
                }
              >
                ABOUT RESTAURANT
              </Link>
            </div>
            <div className="text-white font-medium lg:text-lg text-base">
              <Link
                to="order"
                smooth={true}
                offset={-60}
                duration={1000}
                spy={true}
                onSetActive={() => handleSetActive("menu")}
                className={
                  activeLink === "menu"
                    ? "text-red-600 font-bold"
                    : "cursor-pointer hover:text-red-600"
                }
              >
                ORDER
              </Link>
            </div>
            <div className="text-white font-medium lg:text-lg text-base">
              <Link
                to="menu"
                smooth={true}
                offset={-60}
                duration={1000}
                spy={true}
                onSetActive={() => handleSetActive("special")}
                className={
                  activeLink === "special"
                    ? "text-red-600 font-bold"
                    : "cursor-pointer hover:text-red-600"
                }
              >
                MENU
              </Link>
            </div>
            <div className="text-white font-medium lg:text-lg text-base flex">
              <Link
                to="cart"
                smooth={true}
                offset={-70}
                duration={1000}
                spy={true}
                onSetActive={() => handleSetActive("cart")}
                className={
                  activeLink === "cart"
                    ? "text-red-600 font-bold"
                    : "cursor-pointer hover:text-red-600"
                }
              >
                <FaShoppingCart className="p-1" size={30} />
              </Link>
              <span>{cartLength > 0 && <span>{cartLength}</span>}</span>
            </div>
            <div className="text-white font-medium lg:text-lg text-base">
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={1000}
                spy={true}
                onSetActive={() => handleSetActive("contact")}
                className={
                  activeLink === "contact"
                    ? "text-red-600 font-bold"
                    : "cursor-pointer hover:text-red-600"
                }
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`bg-white w-64 h-full p-4 space-y-4 transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <span
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-lg cursor-pointer"
          >
            x
          </span>
          <div className="text-black font-medium text-lg">
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onSetActive={() => handleSetActive("about")}
              className={
                activeLink === "about"
                  ? "text-red-600 font-bold"
                  : "cursor-pointer hover:text-red-600"
              }
            >
              ABOUT RESTAURANT
            </Link>
          </div>
          <div className="text-black font-medium text-lg">
            <Link
              to="order"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onSetActive={() => handleSetActive("menu")}
              className={
                activeLink === "menu"
                  ? "text-red-600 font-bold"
                  : "cursor-pointer hover:text-red-600"
              }
            >
              ORDER
            </Link>
          </div>
          <div className="text-black font-medium text-lg">
            <Link
              to="menu"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onSetActive={() => handleSetActive("special")}
              className={
                activeLink === "special"
                  ? "text-red-600 font-bold"
                  : "cursor-pointer hover:text-red-600"
              }
            >
              MENU
            </Link>
          </div>
          <div className="text-black font-medium text-lg">
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onSetActive={() => handleSetActive("contact")}
              className={
                activeLink === "contact"
                  ? "text-red-600 font-bold"
                  : "cursor-pointer hover:text-red-600"
              }
            >
              CONTACT
            </Link>
          </div>
          <div className="text-black font-medium text-lg flex">
            <Link
              to="cart"
              smooth={true}
              offset={-70}
              duration={1000}
              spy={true}
              onSetActive={() => handleSetActive("cart")}
              className={
                activeLink === "cart"
                  ? "text-red-600 font-bold"
                  : "cursor-pointer hover:text-red-600"
              }
            >
              <FaShoppingCart className="p-1" size={30} />
            </Link>
            <span>{cartLength > 0 && <span>{cartLength}</span>}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
