import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import { useParams, Link } from "react-router-dom";

import {
  DELIVERY_DISTANCE_IMG,
} from "../helpers/Constant";
import MenuCategory from "./MenuCategory";
// import MenuSearch from "./MenuSearch";
import { useSelector, useDispatch } from "react-redux";
import { earnCoins } from "../Utils/vCoinSlice";
import { addNotification } from "../Utils/notificationsSlice";
import MyContext from "../Utils/MyContext";
import ResetCart from "./ResetCart";
import RestaurantMenuShimmering from "./RestaurantMenuShimmering";

const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [resDetails, resOffers, resMenu] = useRestaurantMenu(id);
  const [activeLink, setActiveLink] = useState(null);
  const resDetailsData = {
    id: resDetails?.id,
    name: resDetails?.name,
    areaName: resDetails?.areaName,
    cloudinaryImageId: resDetails?.cloudinaryImageId,
    slaString: resDetails?.sla?.slaString,
    lastMileTravelString: resDetails?.sla?.lastMileTravelString,
    deliveryFee: resDetails?.feeDetails?.totalFee,
  };

  const locDetails = useSelector((store) => store.location.locationDetails);
  const city = locDetails?.[0]?.district || "";
  const [showElement, setShowElement] = useState(false);
  const [resCartAlert, setResCartAlert] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const contextValue = {
    resCartAlert,
    showResCartAlert: () => {
      setResCartAlert(true);
      setShowElement(false);
    },
    hideResCartAlert: () => {
      setResCartAlert(false);
      setShowElement(true);
    },
    placeOrder: () => {
      if (!orderPlaced) {
        // Earn VCoins for placing order
        const coinsEarned = Math.floor(Math.random() * 10) + 5; // 5-15 coins
        dispatch(earnCoins({
          amount: coinsEarned,
          description: `Earned ${coinsEarned} VCoins for ordering from ${resDetails?.name}`
        }));

        // Add notification
        dispatch(addNotification({
          title: "Order Placed Successfully!",
          message: `Your order from ${resDetails?.name} has been placed. You earned ${coinsEarned} VCoins!`,
          type: "order"
        }));

        setOrderPlaced(true);
        setTimeout(() => setOrderPlaced(false), 3000);
      }
    },
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    const timeoutId = setTimeout(() => {
      setShowElement(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return resOffers.length === 0 ? (
    <>
      <RestaurantMenuShimmering />
    </>
  ) : (
    <MyContext.Provider value={contextValue}>
      <div className="flex justify-center pt-28 w-screen">
        <div className="container w-[50%]">
          <div className="mx-3">
            <br/>
            <h1 className="font-[700] pt-8 text-2xl">{resDetails?.name}</h1>
            <div className="mt-6 bg-gradient-to-b from-white to-[#dcdce3] p-4 rounded-3xl">
              <div className="flex flex-col mx-auto p-4 rounded-3xl bg-white">
                <div className="flex items-center font-semibold">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="bg-green-700 text-xs text-white p-1 rounded-full"
                  />
                  <h2 className="ml-2 text-lg">
                    {resDetails?.avgRatingString} (
                    {resDetails?.totalRatingsString}) • ₹
                    {resDetails?.costForTwo / 100} for two
                  </h2>
                </div>
                <div className="mt-2 text-[#f26618] font-[600]">
                  {resDetails?.cuisines?.join(", ")}
                </div>
                <div className="flex gap-3 items-center mt-2">
                  <div className="flex flex-col justify-center items-center">
                    <div className="h-2 w-2 bg-[#c4c4c4] rounded-full"></div>
                    <div className="h-[1.5rem]  bg-[#c4c4c4] w-[0.1rem]"></div>
                    <div className="h-2 w-2 bg-[#c4c4c4] rounded-full"></div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <p className="font-semibold"> Outlet</p>
                      <p className="text-[#777a7d]">{resDetails?.areaName}</p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        {resDetails?.sla?.minDeliveryTime}-
                        {resDetails?.sla?.maxDeliveryTime} mins
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="border-t-1 border-gray-400 my-3" />
                <div className="flex items-center gap-1.5">
                  <img
                    src={DELIVERY_DISTANCE_IMG}
                    alt="DISTANCE"
                    className="w-5"
                  />
                  <p
                    className="font-[500] text-[#848484]"
                    dangerouslySetInnerHTML={{
                      __html: String(resDetails?.feeDetails?.message),
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>

          <p className="py-4 text-center leading-loose">M E N U</p>

          {/* VCoin Banner */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg mb-4 mx-4">
            <h3 className="font-bold text-lg">Earn VCoins on Every Order! 🎉</h3>
            <p className="text-sm">Get 5-15 VCoins for ordering from campus eateries. Redeem for discounts and donations!</p>
          </div>

          {/* <div>
          <Link to={`/menusearch/${id}`}>
            <div className="flex items-center justify-center bg-[#f0f0f5] text-[#616469] py-2 rounded-xl px-4 relative">
              <h3 className="text-lg font-bold">Search for dishes</h3>
              <FontAwesomeIcon icon={faSearch} className="absolute right-4" />
            </div>
          </Link>
        </div> */}
          <div>
            {resMenu && (
              <>
                <div>
                  {resMenu?.map((category) => (
                    <MenuCategory
                      {...category}
                      key={category.title}
                      resDetailsData={resDetailsData}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        {resCartAlert ? <ResetCart /> : null}
      </div>
    </MyContext.Provider>
  );
};

export default RestaurantMenu;
