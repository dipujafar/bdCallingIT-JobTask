import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { GoPeople } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { toast } from "react-toastify";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "text-black " : isActive ? "text-black font-medium" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "text-black" : isActive ? "text-black font-medium" : ""
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? "text-black" : isActive ? "text-black font-medium" : ""
          }
        >
          Contacts
        </NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <div>
        <div className="navbar bg-base-100">
          <div className="mr-20 navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl">GREENMIND</a>
          </div>
          <div className="navbar-start hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-10">
              <button
                onClick={() =>
                  toast("This Feature is Loading please wait few days.")
                }
              >
                <BsCart className="text-xl" />
              </button>
              <Link to={"/login"}>
                <GoPeople className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
