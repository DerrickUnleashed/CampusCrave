import { useState, useEffect } from "react";
import useRestaurantData from "../Hooks/useRestaurantData";
import { useSelector } from "react-redux";
import { APP_IMG_CDN_URL } from "../helpers/Constant";
import RestaurantCard from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
import orderBy from "lodash/orderBy";
import Footer from "./Footer";
import Unserviceable from "./Unserviceable";
import HomeShimmer from "./HomeShimmer";

const Home = () => {
  const [
    // topicalBanner,
    WOYM,
    topResList,
    sort,
    resList,
    filteredResList,
    setfilteredResList,
    appInstallLinks,
    footerCities,
    bestPlaces,
    bestCuiNearMe,
    expResNearMe,
    notServicable,
  ] = useRestaurantData();

  const locDetails = useSelector((store) => store.location.locationDetails);
  const locationSearchVisibility = useSelector(
    (store) => store.locSearch.visible
  );
  console.log(resList);
  const [city, setCity] = useState(locDetails[0]?.district);
  const [sortActive, setSortActive] = useState(undefined);
  const [bestPlacesOpen, setBestPlacesOpen] = useState(false);
  const [bestCuiOpen, setBestCuiOpen] = useState(false);

  // useEffect to update city and sorting buttons when locDetails change
  useEffect(() => {
    if (locDetails && locDetails[0]) {
      setCity(locDetails[0].district);
      setSortActive(undefined);
    }
  }, [locDetails]);

  const handleSortClick = (text) => {
    if (text === sortActive && sortActive !== undefined) {
      setSortActive(undefined);
      setfilteredResList(resList);
    } else {
      setSortActive(text);
      if (text === "Relevance (Default)") {
        setfilteredResList(filteredResList);
      } else if (text === "DeliveryTime") {
        const sortedList = orderBy(
          filteredResList,
          ["info.sla.deliveryTime"],
          ["asc"]
        );
        setfilteredResList(sortedList);
      } else if (text === "Rating") {
        const sortedList = orderBy(
          filteredResList,
          ["info.avgRating"],
          ["desc"]
        );
        setfilteredResList(sortedList);
      } else if (text === "Cost:LowtoHigh") {
        const sortedList = orderBy(
          filteredResList,
          [(res) => parseInt(res.info.costForTwo.split(" ")[0].slice(1))],
          ["asc"]
        );
        setfilteredResList(sortedList);
      } else if (text === "Cost:HightoLow") {
        const sortedList = orderBy(
          filteredResList,
          [(res) => parseInt(res.info.costForTwo.split(" ")[0].slice(1))],
          ["desc"]
        );
        setfilteredResList(sortedList);
      }
    }
  };

  const handleMorePlaces = () => {
    setBestPlacesOpen(true);
  };

  const handleLessPlaces = () => {
    setBestPlacesOpen(false);
  };
  const handleMoreCui = () => {
    setBestCuiOpen(true);
  };

  const handleLessCui = () => {
    setBestCuiOpen(false);
  };

  return resList?.length === 0 ? (
    <h1>
      <HomeShimmer />
    </h1>
  ) : (
    <>
      {notServicable?.length > 0 ? (
        <div>
          <Unserviceable />
        </div>
      ) : (
        <div className="body xl:max-w-[80%] mx-auto min-h-screen pt-40 ">
          


          {filteredResList && (
            <>
              <div className="mx-8">
                <div className="my-8 mb-4">
                  <h1 className="font-bold text-[1.7rem] my-12 mx-8 leading-3 tracking-tight">
                    Campus Eateries Near Me
                  </h1>
                </div>
                <div className="container-snap flex items-center mx-16 mb-4 w-full overflow-auto">
                  <div
                    className={`px-3 py-2 mr-3 min-w-fit rounded-full transition-all duration-100 ease-in delay-0 ${
                      sortActive !== undefined
                        ? "bg-[#02060c26] border-[orange] border-[1px]"
                        : "border-[1px] border-solid border-[#02060c1f]"
                    }`}
                  >
                    <h1
                      className={`text-center flex-1 text-base tracking-tight font-medium whitespace-nowrap ${
                        sortActive !== undefined
                          ? "text-orange-500"
                          : "text-[#050e1bbf]"
                      }`}
                    >
                      Filter &nbsp; <FontAwesomeIcon icon={faFilter} />
                    </h1>
                  </div>
                  {sort.map((x, index) => {
                    const formatTitle = (title) => {
                      // Insert a space before each uppercase letter that follows a lowercase letter or a digit
                      let formattedTitle = title.replace(
                        /([a-z0-9])([A-Z])/g,
                        "$1 $2"
                      );

                      // Ensure space around the colon
                      formattedTitle = formattedTitle.replace(/:\s*/g, " : ");

                      // Handle specific known cases if necessary
                      if (formattedTitle.includes("Lowto High")) {
                        formattedTitle = formattedTitle.replace(
                          "Lowto High",
                          "Low to High"
                        );
                      }
                      if (formattedTitle.includes("Highto Low")) {
                        formattedTitle = formattedTitle.replace(
                          "Highto Low",
                          "High to Low"
                        );
                      }

                      return formattedTitle;
                    };

                    return (
                      <div
                        key={x.title}
                        onClick={() => handleSortClick(x.title)}
                        className={`container-snap flex justify-between items-center min-w-fit truncate px-3 cursor-pointer rounded-full mr-2 mb-2 ${
                          sortActive === x.title
                            ? "bg-orange-200 border-[orange] border-[1px]"
                            : "border-[1px] border-solid border-[#02060c1f]"
                        } `}
                      >
                        <h1 className="text-center text-base text-[#050e1bbf] tracking-tight font-medium">
                          {formatTitle(x.title)}
                        </h1>
                        {sortActive === x.title ? (
                          <div>
                            <FontAwesomeIcon
                              icon={faXmark}
                              className="text-[#050e1bbf] text-center text-sm"
                            />
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
                <div className="grid place-items-center gap-8 mx-auto px-8 my-8 xl:grid-cols-4 lg:grid-cols-3">
                  {filteredResList.map((res) => {
                    return (
                      <RestaurantCard
                        {...res.info}
                        locationSearchVisibility={locationSearchVisibility}
                        key={res.info.id}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}

        </div>
      )}

      <div className="">
        {appInstallLinks && (
          <>
            <div className="flex justify-center items-center bg-[#f0f0f5] h-32 w-[100%] mx-auto">
              <h2 className="text-[#3d4047] text-3xl font-bold w-[28rem] text-wrap">
                For better experience, download the app now
              </h2>

              <div className="flex gap-8">
                <img
                  className="w-[12.5rem]"
                  src={APP_IMG_CDN_URL + appInstallLinks.androidAppImage}
                />
                <img
                  className="w-[12.5rem]"
                  src={APP_IMG_CDN_URL + appInstallLinks.iosAppImage}
                />
              </div>
            </div>
          </>
        )}
        <Footer footerCities={footerCities} />
      </div>
    </>
  );
};

export default Home;
