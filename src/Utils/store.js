import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./locationSlice";
import cartSlice from "./cartSlice";
import restaurantListSlice from "./restaurantListSlice";
import locationSearchVisibility from "./locationSearchVisibilitySlice";
import userRoleSlice from "./userRoleSlice";
import vCoinSlice from "./vCoinSlice";
import notificationsSlice from "./notificationsSlice";
import mealShareSlice from "./mealShareSlice";
import deliverySlice from "./deliverySlice";

const store = configureStore({
  reducer: {
    location: locationSlice,
    cart: cartSlice,
    restaurantList: restaurantListSlice,
    locSearch: locationSearchVisibility,
    userRole: userRoleSlice,
    vCoins: vCoinSlice,
    notifications: notificationsSlice,
    mealShare: mealShareSlice,
    delivery: deliverySlice,
  },
});

export default store;
