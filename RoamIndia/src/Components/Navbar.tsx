import React, { useContext } from "react";
import Logo from "./../assets/RoamIndiaLogo.png";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "../Context/ParentContext";
import { deleteCookie } from "./../ManageCookies";
import ThemeComponent from "./ThemeComponent";
import ProfilePicture from './../assets/BlankProfilePicture.png'
import BlueLogo from './../assets/RoamIndiaLogoBlue.png'
import WriteReview from "./WriteReview";

const Navbar: React.FC = () => {
  const { user, loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const appContext = useContext(AppContext);
  const { loginSuccessful, loginDone } = appContext || {
    loginSuccessful: false,
    loginDone: true,
  };
  const { theme } = appContext || { theme: 'light' };

  return (
    <div>
      <div className="navbar w-full">
        <div className=" navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 dark: text-white"
            >
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
              <li>
                <a>Restaurants</a>
              </li>
              <li>
                <a>Hotels</a>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            {theme === 'light' ? <img src={Logo} alt="Logo" className="w-20 brightness-150" /> : <img src={BlueLogo} alt="Logo" className="w-20 brightness-150" />
            }
          </Link>
        </div>
        <div className="navbar-center hidden text-center lg:flex">
          <ul className="menu menu-horizontal px-1 lg: flex lg:gap-9 text-lg jacques-francois-regular">
            <li>
              About Us
            </li>
            <li>
              Contact Us
            </li>
            <Link to={"/restaurants"}>
              <li>Restaurants
              </li>
            </Link>
            <Link to={"/hotels"}>
              <li>
                Hotels
              </li>
            </Link>
            <li>

            </li>
          </ul>
        </div>
        <div>
          {loginDone ? (
            <div className="">
              {!loginSuccessful ? (
                <button
                  onClick={() => loginWithRedirect()}
                  className="inline-flex text-white h-24 lg:py-5 py-2.5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[8rem] text-xs  lg:w-[8rem] lg:text-[14px]"
                >
                  Sign up
                </button>
              ) : (
                <div className="dropdown dropdown-end dropdown-hover">
                  <button
                    id="dropdownUserAvatarButton"
                    tabIndex={0}
                    className="flex text-sm bg-[#24758f] rounded-full md:me-0"
                    type="button"
                  >
                    <span className="sr-only">Open user menu</span>
                    {user?.picture ? <img className="w-10 rounded-full" src={user?.picture} alt="user photo" />
                      : <img className="w-10 rounded-full" src={ProfilePicture} alt="user photo" />
                    }
                  </button>

                  <div
                    id="dropdownAvatar"
                    tabIndex={0}
                    className="dropdown-content group-hover:block absolute mt-2 z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white capitalize">
                      <div>{user?.nickname}</div>
                      <div className="font-medium lowercase truncate">{user?.email}</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Complete Your Profile</a>
                      </li>
                      <li>
                        <Link to={"/writereview"}>
                          <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Write a Review</a>
                        </Link>
                      </li>
                      <ThemeComponent />
                    </ul>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={() => {
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          });
                          deleteCookie("username");
                        }}>Sign out</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span className="loading loading-spinner loading-md bg-slate-700"></span>

          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
