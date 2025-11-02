import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./Utils/store";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import MenuSearch from "./components/MenuSearch";
import Dashboard from "./components/Dashboard";
import RunnerDashboard from "./components/RunnerDashboard";
import VendorDashboard from "./components/VendorDashboard";
import AdminDashboard from "./components/AdminDashboard";
import VCoinWallet from "./components/VCoinWallet";
import MealShare from "./components/MealShare";
import CraveRunners from "./components/CraveRunners";
import Notifications from "./components/Notifications";
import OrderHistory from "./components/OrderHistory";
import CommunityUpdates from "./components/CommunityUpdates";
const Help = lazy(() => import("./components/Help"));
const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact", // Use relative path for nested routes
        element: <Contact />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "help",
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
      },

      {
        path: "profile",
        element: <SignIn />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "menusearch/:id",
        element: <MenuSearch />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "runner-dashboard",
        element: <RunnerDashboard />,
      },
      {
        path: "vendor-dashboard",
        element: <VendorDashboard />,
      },
      {
        path: "admin-dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "vcoin-wallet",
        element: <VCoinWallet />,
      },
      {
        path: "meal-share",
        element: <MealShare />,
      },
      {
        path: "runners",
        element: <CraveRunners />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "order-history",
        element: <OrderHistory />,
      },
      {
        path: "community-updates",
        element: <CommunityUpdates />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
