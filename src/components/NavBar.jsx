import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const { cart } = useSelector((state) => state.cart);
  const cartLength=cart.length;
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className="bg-black opacity-75 p-4 lg:p-6">
        <div className="flex justify-between items-center">
          {/* Hamburger Button for small screens */}
          <button onClick={toggleSidebar} className="lg:hidden p-4 text-white">
            {/* Hamburger icon */}
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

          {/* Navbar links for larger screens */}
          <div className="hidden lg:flex justify-center space-x-8 lg:space-x-14 w-full max-w-6xl mx-auto">
            {/* Centered horizontally */}
            <div className="text-white font-medium lg:text-lg text-base">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 hover:text-red-600"
                    : "text-white hover:text-red-600"
                }
              >
                ABOUT RESTAURANT
              </NavLink>
            </div>
            <div className="text-white font-medium lg:text-lg text-base">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 hover:text-red-600"
                    : "text-white hover:text-red-600"
                }
              >
                ORDER
              </NavLink>
            </div>
            <div className="text-white font-medium lg:text-lg text-base">
              TODAY SPECIAL
            </div>
            <div className="text-white font-medium lg:text-lg text-base">
              CONTACT
            </div>
            <div className="text-white font-medium lg:text-lg text-base flex">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 hover:text-red-600"
                    : "text-white hover:text-red-600"
                }
              >
               <FaShoppingCart className="p-1" size={30}/>
              </NavLink>
              <span>
                {
                  cartLength>0&&(<span>{cartLength}</span>)
                }
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar} // Close sidebar if clicked outside
      >
        <div
          className={`bg-white w-64 h-full p-4 space-y-4 transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing sidebar when clicking inside
        >
          <span
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-lg cursor-pointer"
          >
            x
          </span>
          <div className="text-black font-medium text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 hover:text-red-600"
                  : "text-black hover:text-red-600"
              }
            >
              ABOUT RESTAURANT
            </NavLink>
          </div>
          <div className="text-black font-medium text-lg">
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 hover:text-red-600"
                  : "text-black hover:text-red-600"
              }
            >
              ORDER
            </NavLink>
          </div>
          <div className="text-black font-medium text-lg">
            {" "}
            <NavLink
              to="/special"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 hover:text-red-600"
                  : "text-black hover:text-red-600"
              }
            >
              TODAY SPECIAL
            </NavLink>
          </div>
          <div className="text-black font-medium text-lg">CONTACT</div>
          <div className="text-black font-medium text-lg flex">
          <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 hover:text-red-600"
                  : "text-black hover:text-red-600"
              }
            >
             <FaShoppingCart className="p-1" size={30}/>
            </NavLink>
            <span>
                {
                  cartLength>0&&(<span>{cartLength}</span>)
                }
                </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
