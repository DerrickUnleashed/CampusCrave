import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import LocationSearch from "./LocationSearch";
import { useDispatch, useSelector } from "react-redux";
import { locSearch } from "../Utils/locationSearchVisibilitySlice";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setRole } from "../Utils/userRoleSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locDetails = useSelector((store) => store.location.locationDetails);
  const cartItemCount = useSelector((store) => store.cart.cartItems);
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [activeLink, setActiveLink] = useState(null);
  const [locationsearchIsVisible, setLocationSearchIsVisible] = useState(false);

  const handleLocationClick = () => {
    if (!locationsearchIsVisible) {
      setLocationSearchIsVisible(true);
      dispatch(locSearch(true));
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const handleNavClick = (path) => {
    setActiveLink(path);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = () => {
    dispatch(setRole("")); // Clear the role on logout
    navigate("/");
  };

  const isLoggedIn = useSelector((store) => store.userRole.currentRole) !== "";

  const isActive = (path) => {
    return path === activeLink;
  };

  useEffect(() => {
    if (locDetails[0]) {
      setArea(locDetails[0].area);
      setCity(locDetails[0].district);
      setState(locDetails[0].state);
    }
  }, [locDetails]);

  return (
    <>
      <div>
        {locationsearchIsVisible && (
          <LocationSearch
            childState={locationsearchIsVisible}
            setChildState={setLocationSearchIsVisible}
          />
        )}
      </div>
      <div
        className={`header flex items-center justify-around z-20 fixed w-screen top-0 left-0 right-0 shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)] bg-[#edf7f9] ${
          locationsearchIsVisible ? "opacity-50 bg-transparent" : ""
        }`}
        onClick={() => {
          if (locationsearchIsVisible) {
            setLocationSearchIsVisible(false);
            document.body.style.overflow = "unset";
            dispatch(locSearch(false));
          }
        }}
      >
        <div className="max-w-[25%] flex items-center gap-2">
          <Link to="/">
            <img
              onClick={() => handleNavClick("/")}
              className="w-36 h-auto pl-4"
              src={logo}
              alt="CampusCrave logo"
            />
          </Link>
          <div
            className="cursor-pointer flex justify-center items-center gap-2 truncate self-center text-[#3d4152]"
            onClick={() => handleLocationClick()}
          >
  
          </div>
        </div>
        <>
          <ul className="list-none flex justify-center items-center text-xl text-[#3d4152]">
            <li
              className="transition duration-250 ease-in-out m-3 flex items-center justify-center text-[#303031] hover:text-[#f75500]"
            >
              <button
                onClick={isLoggedIn ? handleLogout : () => navigate("/login")}
                className="flex items-center justify-center truncate"
              >                
                &nbsp; <h2>{isLoggedIn ? "Logout" : "Login"}</h2>
              </button>
            </li>
            <li
              className="transition duration-250 ease-in-out m-3 pl-8 flex items-center justify-center text-[#303031] hover:text-[#f75500]"
              onMouseOver={(e) => {
                e.currentTarget.querySelector("svg").style.fill = "#f3730a";
              }}
              onMouseOut={(e) => {
                e.currentTarget.querySelector("svg").style.fill = "";
              }}
            >
              <NavLink
                onClick={() => handleNavClick("/help")}
                className={`${
                  isActive("/help") ? "text-[#f75500]" : "text-inherit"
                }`}
                to="/help"
              >
                <span className="flex items-center justify-center truncate">
                  &nbsp; <h2>Help</h2>
                </span>
              </NavLink>
            </li>
            <li
              className="transition duration-250 ease-in-out m-3 pl-8 flex items-center justify-center text-[#303031] hover:text-[#f75500]"
              onMouseOver={(e) => {
                e.currentTarget.querySelector("svg").style.fill = "#f3730a";
              }}
              onMouseOut={(e) => {
                e.currentTarget.querySelector("svg").style.fill = "";
              }}
            >
              <NavLink
                onClick={() => handleNavClick("/cart")}
                className={`${
                  isActive("/cart") ? "text-[#f75500]" : "text-inherit"
                }`}
                to="/cart"
              >
                <span className="flex items-center justify-center truncate">
                  {cartItemCount.length === 0 ? (
                    <>
                      <span className="relative top-1/2 group">
                        <svg
                          className="stroke-2 fill-transparent stroke-current overflow-hidden group-hover:text-white"
                          viewBox="-1 0 37 32"
                          height="20"
                          width="20"
                          fill="#686b78"
                        >
                          <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                        </svg>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#f3730a] text-sm font-semibold group-hover:text-white">
                          {cartItemCount.length}
                        </span>
                      </span>
                    </>
                  ) : (
                    <span className="relative top-1/2">
                      <svg
                        className={`stroke-2 overflow-hidden ${
                          isActive("/cart")
                            ? "fill-[#f3730a] stroke-[#f3730a]"
                            : "fill-[#f3730a] stroke-[#f3730a]"
                        }`}
                        viewBox="-1 0 37 32"
                        height="20"
                        width="20"
                        fill="#686b78"
                      >
                        <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                      </svg>
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-white">
                        {cartItemCount.length}
                      </span>
                    </span>
                  )}
                  &nbsp; <h2>Cart</h2>
                </span>
              </NavLink>
            </li>
          </ul>
        </>
      </div>
    </>
  );
};

export default Header;
