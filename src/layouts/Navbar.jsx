import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 px-2 sm:px-5">
      <div className="navbar-start flex w-full justify-between lg:justify-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="px-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="px-2">
              <details>
                <summary>Products</summary>
                <ul>
                  <li className="px-2">
                    <NavLink
                      to="/products/one"
                      className={({ isActive }) =>
                        isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                      }
                    >
                      Product One
                    </NavLink>
                  </li>
                  <li className="px-2">
                    <NavLink
                      to="/products/two"
                      className={({ isActive }) =>
                        isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                      }
                    >
                      Product Two
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li className="px-2">
              <NavLink
                to="/partners"
                className={({ isActive }) =>
                  isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                }
              >
                Our Partners
              </NavLink>
            </li>
            <li className="px-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to="/" className="text-xl">
            <img src="/logo.png" width={90} alt="logo" />
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="px-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="px-2">
            <details>
              <summary>Products</summary>
              <ul className="p-2 bg-base-100 rounded-box">
                <li className="px-2">
                  <NavLink
                    to="/products/one"
                    className={({ isActive }) =>
                      isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                    }
                  >
                    Product One
                  </NavLink>
                </li>
                <li className="px-2">
                  <NavLink
                    to="/products/two"
                    className={({ isActive }) =>
                      isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
                    }
                  >
                    Product Two
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li className="px-2">
            <NavLink
              to="/partners"
              className={({ isActive }) =>
                isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
              }
            >
              Our Partners
            </NavLink>
          </li>
          <li className="px-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-purple-color text-white" : "hover:bg-purple-color hover:text-white"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}