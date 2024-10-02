import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";
import "./navstyles.css";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/update_profile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/user_profile">User Profile</NavLink>
      </li>
    </>
  );

  const { userData, signOutUser } = useContext(userContext);

  console.log("User data from nav:", userData);
  // if (userData) {
  //   console.log("User data from nav:", userData.displayName);
  // }

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // tooltip functionality
  const [showTooltip, setShowToolTip] = useState(false);

  return (
    <>
      <div className="navbar bg-sky-500 text-white rounded-t-lg">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-sky-500 text-white rounded-box z-[2] mt-3 w-52 p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          <div className="border-2 border-base-500 rounded-lg p-1 md:p-2 md:h-10 w-auto flex items-center justify-center">
            <Link to="/" className="text-xl ">
              <p className="text-base md:text-xl font-normal">RE Real Estate</p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>

        <div className="navbar-end gap-2">
          {userData ? (
            <div className="flex items-center gap-2">
              <div className="flex">
                {userData.photoURL ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowToolTip(true)}
                    onMouseLeave={() => setShowToolTip(false)}
                  >
                    <img
                      className="w-9 h-9 md:w-12 md:h-12 border-2 border-white rounded-full"
                      src={userData.photoURL}
                      alt="profile picture"
                    />
                    {showTooltip && (
                      <div className="absolute top-6 bg-sky-500 right-11 w-auto text-nowrap z-[2] drop-shadow-lg text-white text-sm md:text-base px-1 md:px-4 py-1 md:py-4 rounded">
                        {userData.displayName || "No Name Provided"}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center px-2 ">
                    {userData.displayName}
                  </div>
                )}
              </div>
              <button
                onClick={handleSignOut}
                className="btn btn-outline hover:bg-white hover:text-sky-500 hover:border-sky-500 bg-sky-500 text-white border-2 border-white"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="btn btn-outline hover:bg-white hover:text-sky-500 hover:border-sky-500 bg-sky-500 text-white border-2 border-white"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
