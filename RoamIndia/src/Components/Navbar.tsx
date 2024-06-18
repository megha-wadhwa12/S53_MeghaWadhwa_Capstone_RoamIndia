import React, { useContext } from "react";
import Logo from "./../assets/RoamIndiaLogo.png";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AppContext } from "../Context/ParentContext";
import { deleteCookie } from "./../ManageCookies";

const Navbar: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const appContext = useContext(AppContext);
  const { loginSuccessful, loginDone } = appContext || {
    loginSuccessful: false,
    loginDone: true,
  };
  // const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start w-full">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
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
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <Link to={"/"}>
            <img src={Logo} alt="Logo" className="w-20" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg: flex lg:gap-8 text-black text-lg jacques-francois-regular">
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
        {/* <label className="cursor-pointer grid place-items-center">
          <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label> */}
        {loginDone ? (
          <div className="lg:w-[10rem]">
            {!loginSuccessful ? (
              <button
                onClick={() => loginWithRedirect()}
                className="inline-flex text-white h-24 lg:py-5 py-2.5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[8rem] text-xs  lg:w-[16rem] lg:text-[14px]"
              >
                Sign up
              </button>
            ) : (
              <button
                onClick={() => {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                  deleteCookie("username");
                }}
                className="inline-flex text-white h-24 lg:py-5 py-2.5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[8rem] text-xs  lg:w-[16rem] lg:text-[14px]"
              >
                Log Out
              </button>
            )}
          </div>
        ) : (
          <button className="inline-flex text-white h-24 lg:py-5 py-2.5 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[8rem] text-xs  lg:w-[16rem] lg:text-[14px]">
            Logging in
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
