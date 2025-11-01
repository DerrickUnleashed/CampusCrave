import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { REST_API_MENU_URL } from "../helpers/Constant";
import { mockMenus, mockRestaurants } from "../mockData";

const useRestaurantMenu = (id) => {
  const locDetails = useSelector((store) => store.location.locationDetails);
  const [latitude, setLatitude] = useState(locDetails[0].lat);
  const [longitude, setLongitude] = useState(locDetails[0].lng);
  const [resDetails, setResDetailse] = useState();
  const [resOffers, setResOffers] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  async function getRestaurantMenu() {
    // Use mock data instead of API call
    const restaurantData = mockRestaurants.find(res => res.info.id === id)?.info || null;
    const restaurantOffers = [
      {
        offerLogo: "https://via.placeholder.com/50",
        header: "20% OFF",
        couponCode: "SAVE20",
        description: "Get 20% off on orders above ₹300"
      },
      {
        offerLogo: "https://via.placeholder.com/50",
        header: "Free Delivery",
        couponCode: "FREEDEL",
        description: "Free delivery on orders above ₹200"
      }
    ];
    const restaurantMenu = mockMenus[id]?.menu ? [{
      title: "Recommended",
      itemCards: mockMenus[id].menu.map(item => ({
        card: {
          info: item,
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish"
        }
      }))
    }] : [];

    setResDetailse(restaurantData);
    setResOffers(restaurantOffers);
    setResMenu(restaurantMenu);
  }
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  return [resDetails, resOffers, resMenu];
};

export default useRestaurantMenu;
