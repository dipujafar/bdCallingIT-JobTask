import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { GoPeople } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });

  const handleLogout = () => {
    logOut().then(() => toast("Successfully Logout"));
  };

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
      <li
        onClick={() => toast("This Feature is Loading please wait few days.")}
      >
        <a
          className={({ isActive, isPending }) =>
            isPending ? "text-black" : isActive ? "text-black font-medium" : ""
          }
        >
          Contacts
        </a>
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
            <Link to={"/"} className="btn btn-ghost text-2xl">
              GREENMIND
            </Link>
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
              {user ? (
                <div className="relative">
                  <img
                    ref={imgRef}
                    onClick={() => setOpen(!open)}
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {open && (
                    <div
                      ref={menuRef}
                      className="absolute top-14 right-0 z-10 bg-gradient-to-r from-sky-800 to-sky-600 rounded  text-gray-200 w-72 p-4 space-y-2"
                    >
                      <img
                        src={user?.photoURL}
                        alt="ProfileImg"
                        className="w-24 h-24 mx-auto rounded-full"
                      />
                      <p className="text-center text-xl">{user?.displayName}</p>
                      <hr />
                      <Link to="/">
                        <p className=" mt-1 flex items-center gap-1 hover:text-sky-300">
                          <FaHome /> Home
                        </p>
                      </Link>

                      <hr />
                      <button
                        onClick={handleLogout}
                        className="mt-1 flex items-center gap-1 hover:text-sky-300"
                      >
                        <CgLogOut /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={"/login"}>
                  <GoPeople className="text-xl" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
