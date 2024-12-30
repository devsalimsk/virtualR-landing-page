import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto max-w-screen-lg relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span
              onClick={() => (window.location.href = "/")}
              className="cursor-pointer text-xl tracking-tight"
            >
              VirtualR
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-orange-500 active:text-orange-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              aria-label="Toggle navigation menu"
              className="p-2"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed right-0 top-0 z-20 bg-neutral-900 w-full h-screen p-12 flex flex-col justify-center items-center lg:hidden transition-transform ${
            mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a
                  href={item.href}
                  className="text-white hover:text-orange-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 mt-8">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
