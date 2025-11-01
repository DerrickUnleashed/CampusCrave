// Mock data for CampusCrave platform

import logo from "./assets/logo.jpeg";
import gazebo from "./assets/gazebo.jpg";
import northsq from "./assets/northsq.jpg";
import dominos from "./assets/dominos.jpg";
import gymkhana from "./assets/gymkhana.jpg";
import logoPng from "./assets/logo.png";
import landing from "./assets/chef2doorlandingpage.png";

export const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@university.edu",
    role: "Student",
    vCoins: 150,
    profilePic: "https://via.placeholder.com/100",
    joinedDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@university.edu",
    role: "Vendor",
    vCoins: 500,
    profilePic: "https://via.placeholder.com/100",
    joinedDate: "2022-08-20",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@university.edu",
    role: "Runner",
    vCoins: 200,
    profilePic: "https://via.placeholder.com/100",
    joinedDate: "2023-03-10",
  },
  {
    id: 4,
    name: "Diana Admin",
    email: "diana@university.edu",
    role: "Admin",
    vCoins: 1000,
    profilePic: "https://via.placeholder.com/100",
    joinedDate: "2021-09-01",
  },
];

export const mockRestaurants = [
  {
    info: {
      id: "1",
      name: "Gazebo C1",
      cloudinaryImageId: gazebo,
      locality: "Main Campus",
      areaName: "University Center",
      costForTwo: "₹200 for two",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.2,
      parentId: "1",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 10, // Earn 10 VCoins per order
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gazebo-c1-main-campus-university-center-1",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "2",
      name: "Gazebo C2",
      cloudinaryImageId: gazebo,
      locality: "Student Residences",
      areaName: "North Campus",
      costForTwo: "₹150 for two",
      cuisines: ["Indian", "Chinese", "Continental"],
      avgRating: 4.5,
      parentId: "2",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 10,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "10 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 8,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gazebo-c2-student-residences-north-campus-2",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3",
      name: "Gazebo C3",
      cloudinaryImageId: gazebo,
      locality: "Central Library",
      areaName: "Academic Block",
      costForTwo: "₹100 for two",
      cuisines: ["Snacks", "Beverages", "Healthy"],
      avgRating: 4.0,
      parentId: "3",
      avgRatingString: "4.0",
      totalRatingsString: "300+",
      sla: {
        deliveryTime: 5,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "5 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 20:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹30",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 5,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gazebo-c3-central-library-academic-block-3",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "4",
      name: "Gazebo C4",
      cloudinaryImageId: gazebo,
      locality: "Sports Complex",
      areaName: "South Campus",
      costForTwo: "₹180 for two",
      cuisines: ["Italian", "Pizza", "Pasta"],
      avgRating: 4.3,
      parentId: "4",
      avgRatingString: "4.3",
      totalRatingsString: "800+",
      sla: {
        deliveryTime: 12,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "12 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 21:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹60",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 12,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gazebo-c4-sports-complex-south-campus-4",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "5",
      name: "Gymkhana",
      cloudinaryImageId: gymkhana,
      locality: "Student Union",
      areaName: "Central Campus",
      costForTwo: "₹250 for two",
      cuisines: ["Multi-cuisine", "Fine Dining", "Desserts"],
      avgRating: 4.7,
      parentId: "5",
      avgRatingString: "4.7",
      totalRatingsString: "2K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.0,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 15,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/gymkhana-student-union-central-campus-5",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "6",
      name: "NorthSquare C1",
      cloudinaryImageId: northsq,
      locality: "North Square",
      areaName: "North Campus",
      costForTwo: "₹160 for two",
      cuisines: ["North Indian", "Thalis", "Street Food"],
      avgRating: 4.1,
      parentId: "6",
      avgRatingString: "4.1",
      totalRatingsString: "600+",
      sla: {
        deliveryTime: 8,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "8 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 8,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/northsquare-c1-north-square-north-campus-6",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "7",
      name: "NorthSquare C2",
      cloudinaryImageId: northsq,
      locality: "North Square",
      areaName: "North Campus",
      costForTwo: "₹140 for two",
      cuisines: ["South Indian", "Dosas", "Idlis"],
      avgRating: 4.4,
      parentId: "7",
      avgRatingString: "4.4",
      totalRatingsString: "400+",
      sla: {
        deliveryTime: 6,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "6 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹35",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 7,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/northsquare-c2-north-square-north-campus-7",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8",
      name: "NorthSquare C3",
      cloudinaryImageId: northsq,
      locality: "North Square",
      areaName: "North Campus",
      costForTwo: "₹120 for two",
      cuisines: ["Chinese", "Noodles", "Momos"],
      avgRating: 4.2,
      parentId: "8",
      avgRatingString: "4.2",
      totalRatingsString: "350+",
      sla: {
        deliveryTime: 7,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "7 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 6,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/northsquare-c3-north-square-north-campus-8",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "9",
      name: "NorthSquare C4",
      cloudinaryImageId: northsq,
      locality: "North Square",
      areaName: "North Campus",
      costForTwo: "₹130 for two",
      cuisines: ["Fast Food", "Burgers", "Fries"],
      avgRating: 4.0,
      parentId: "9",
      avgRatingString: "4.0",
      totalRatingsString: "250+",
      sla: {
        deliveryTime: 9,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "9 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 7,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/northsquare-c4-north-square-north-campus-9",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10",
      name: "Dominoes",
      cloudinaryImageId: dominos,
      locality: "Food Court",
      areaName: "East Campus",
      costForTwo: "₹300 for two",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.1,
      parentId: "10",
      avgRatingString: "4.1",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      vCoinReward: 20,
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominoes-food-court-east-campus-10",
      type: "WEBLINK",
    },
  },
];

export const mockMenus = {
  "1": {
    // Campus Cafe menu
    menu: [
      {
        id: "101",
        name: "Burger Combo",
        price: 150,
        description: "Juicy burger with fries and drink",
        imageId: "mock-burger",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "100+",
          },
        },
        customizations: [
          { name: "Extra Cheese", price: 20 },
          { name: "No Onions", price: 0 },
        ],
        vCoinValue: 15,
      },
      {
        id: "102",
        name: "Veggie Pizza",
        price: 200,
        description: "Fresh veggies on thin crust",
        imageId: "mock-pizza",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "80+",
          },
        },
        customizations: [
          { name: "Extra Toppings", price: 30 },
          { name: "Thin Crust", price: 0 },
        ],
        vCoinValue: 20,
      },
    ],
  },
  "2": {
    // Dormitory Dining menu
    menu: [
      {
        id: "201",
        name: "Chicken Biryani",
        price: 120,
        description: "Aromatic rice with tender chicken",
        imageId: "mock-biryani",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "150+",
          },
        },
        customizations: [
          { name: "Extra Spice", price: 10 },
          { name: "Boiled Egg", price: 15 },
        ],
        vCoinValue: 12,
      },
    ],
  },
};

export const mockVCoins = {
  transactions: [
    {
      id: 1,
      userId: 1,
      type: "earn",
      amount: 15,
      description: "Earned from Burger Combo order",
      date: "2024-01-15T10:30:00Z",
    },
    {
      id: 2,
      userId: 1,
      type: "redeem",
      amount: -50,
      description: "Redeemed for discount on Pizza",
      date: "2024-01-16T14:20:00Z",
    },
  ],
  rewards: [
    { orderValue: 100, vCoins: 10 },
    { orderValue: 200, vCoins: 25 },
    { orderValue: 300, vCoins: 40 },
  ],
};

export const mockDeliveries = [
  {
    id: 1,
    orderId: "ORD001",
    runnerId: 3,
    status: "in_transit",
    pickupLocation: "Campus Cafe",
    deliveryLocation: "Room 101, Dorm A",
    estimatedTime: "2024-01-15T11:00:00Z",
    items: ["Burger Combo"],
  },
  {
    id: 2,
    orderId: "ORD002",
    runnerId: 3,
    status: "delivered",
    pickupLocation: "Dormitory Dining",
    deliveryLocation: "Library Study Area",
    estimatedTime: "2024-01-15T09:30:00Z",
    items: ["Chicken Biryani"],
  },
];

export const mockMealShares = [
  {
    id: 1,
    userId: 1,
    title: "Leftover Pasta",
    description: "Creamy Alfredo pasta, enough for 2 people",
    quantity: 2,
    expiryTime: "2024-01-15T18:00:00Z",
    location: "Dorm A, Room 101",
    image: "https://via.placeholder.com/200",
    claimed: false,
  },
  {
    id: 2,
    userId: 2,
    title: "Extra Sandwiches",
    description: "Turkey sandwiches made fresh today",
    quantity: 3,
    expiryTime: "2024-01-15T16:00:00Z",
    location: "Campus Cafe Kitchen",
    image: "https://via.placeholder.com/200",
    claimed: true,
  },
];

export const mockWOYM = [
  {
    id: "woym1",
    imageId: logo,
    action: {
      text: "Burger",
      clickUrl: "/search?query=burger",
    },
  },
  {
    id: "woym2",
    imageId: logoPng,
    action: {
      text: "Pizza",
      clickUrl: "/search?query=pizza",
    },
  },
  {
    id: "woym3",
    imageId: landing,
    action: {
      text: "Biryani",
      clickUrl: "/search?query=biryani",
    },
  },
];

export const mockSortConfigs = [
  {
    key: "relevance",
    title: "Relevance",
    selected: true,
  },
  {
    key: "rating",
    title: "Rating",
  },
  {
    key: "costForTwo",
    title: "Cost: Low to High",
  },
  {
    key: "deliveryTime",
    title: "Delivery Time",
  },
];

export const mockAppInstallLinks = [
  {
    androidAppImage: "mock-android-link",
    androidAppLink: "https://play.google.com/store/apps/details?id=com.campuscrave",
    iosAppImage: "mock-ios-link",
    iosAppLink: "https://apps.apple.com/app/campuscrave/id123456789",
  },
];

export const mockFooterCities = [
  { name: "Delhi", link: "/city/delhi" },
  { name: "Mumbai", link: "/city/mumbai" },
  { name: "Bangalore", link: "/city/bangalore" },
  { name: "Chennai", link: "/city/chennai" },
];

export const mockBestPlaces = [
  { text: "Connaught Place", link: "/best-places/connaught-place" },
  { text: "Karol Bagh", link: "/best-places/karol-bagh" },
];

export const mockBestCuisines = [
  { text: "North Indian", link: "/cuisine/north-indian" },
  { text: "Chinese", link: "/cuisine/chinese" },
  { text: "Italian", link: "/cuisine/italian" },
];

export const mockExploreRestaurants = [
  { text: "Pure Veg", link: "/explore/pure-veg" },
  { text: "Non Veg", link: "/explore/non-veg" },
  { text: "Snacks", link: "/explore/snacks" },
];

export const mockNotServicable = [];
