import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  mockWOYM,
  mockSortConfigs,
  mockRestaurants,
  mockAppInstallLinks,
  mockFooterCities,
  mockBestPlaces,
  mockBestCuisines,
  mockExploreRestaurants,
  mockNotServicable,
} from "../mockData";

const useRestaurantData = () => {
  const locDetails = useSelector((store) => store.location.locationDetails);
  const [latitude, setLatitude] = useState(locDetails[0]?.lat || 28.6139);
  const [longitude, setLongitude] = useState(locDetails[0]?.lng || 77.2090);
  const [city, setCity] = useState(locDetails[0]?.district || "Delhi");
  const [notServicable, setNotServicable] = useState(mockNotServicable);
  const [WOYM, setWOYM] = useState(mockWOYM);
  const [sort, setSort] = useState(mockSortConfigs);
  const [resList, setResList] = useState(mockRestaurants);
  const [topResList, setTopResList] = useState(mockRestaurants.slice(0, 2)); // Top 2 restaurants
  const [filteredResList, setFilteredResList] = useState(mockRestaurants);
  const [appInstallLinks, setAppInstallLinks] = useState(mockAppInstallLinks);
  const [footerCities, setFooterCities] = useState(mockFooterCities);
  const [bestPlaces, setBestPlaces] = useState(mockBestPlaces);
  const [bestCuiNearMe, setBestCuiNearMe] = useState(mockBestCuisines);
  const [expResNearMe, setExpResNearMe] = useState(mockExploreRestaurants);

  useEffect(() => {
    if (locDetails && locDetails[0]) {
      const newLatitude = locDetails[0].lat;
      const newCity = locDetails[0].district;
      const newLongitude = locDetails[0].lng;
      setLatitude(newLatitude);
      setCity(newCity);
      setLongitude(newLongitude);
      // Mock data doesn't change with location, but we can simulate filtering if needed
    }
  }, [locDetails]);

  return [
    WOYM,
    topResList,
    sort,
    resList,
    filteredResList,
    setFilteredResList,
    appInstallLinks,
    footerCities,
    bestPlaces,
    bestCuiNearMe,
    expResNearMe,
    notServicable,
  ];
};

export default useRestaurantData;
