// Mock data for CampusCrave platform

import logo from "./assets/logo.jpeg";
import gazebo from "./assets/gazebo.jpg";
import northsq from "./assets/northsq.jpg";
import dominos from "./assets/dominos.jpg";
import gymkhana from "./assets/gymkhana.jpg";
import logoPng from "./assets/logo.png";
import landing from "./assets/campuscravelandingpage.png";

export const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@university.edu",
    role: "Student",
    vCoins: 150,
    profilePic: "https://via.placeholder.com/100",
    joinedDate: "2025-01-15",
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
    joinedDate: "2025-03-10",
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
      costForTwo: "20000",
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
      location: {
        lat: 12.84166255938762,
        lng: 80.15455173160387,
      },
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
      costForTwo: "20000",
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
      location: {
        lat: 12.84166255938762,
        lng: 80.15455173160387,
      },
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
      costForTwo: "20000", 
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
      location: {
        lat: 12.84166255938762,
        lng: 80.15455173160387,
      },
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
      costForTwo: "20000", 
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
      location: {
        lat: 12.84166255938762,
        lng: 80.15455173160387,
      },
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
      costForTwo: "20000",
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
      location: {
        lat: 12.843467535033184,
        lng: 80.15260642635936,
      },
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
      costForTwo: "20000", 
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
      location: {
        lat: 12.844370364232228,
        lng: 80.15455173160387,
      }
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
      costForTwo: "20000", 
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
      location: {
        lat: 12.844370364232228,
        lng: 80.15455173160387,
      },
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
      costForTwo: "20000",
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
      location: {
        lat: 12.844370364232228,
        lng: 80.15455173160387,
      },
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
      costForTwo: "20000",
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
      location: {
        lat: 12.844370364232228,
        lng: 80.15455173160387,
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/northsquare-c4-north-square-north-campus-9",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "10",
      name: "Dominos",
      cloudinaryImageId: dominos,
      locality: "Food Court",
      areaName: "East Campus",
      costForTwo: "20000",
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
      location: {
        lat: 12.84380753967487,
        lng: 80.15270223812651,
      },
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominoes-food-court-east-campus-10",
      type: "WEBLINK",
    },
  },
];

export const mockMenus = {
  "1": {
    // Gazebo C1 menu
    menu: [
      {
        id: "101",
        name: "Burger Combo",
        price: 15000,
        description: "Juicy burger with fries and drink",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/400px-RedDot_Burger.jpg",
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
          { name: "Extra Cheese", price: 2000 },
          { name: "No Onions", price: 0 },
        ],
        vCoinValue: 15,
      },
      {
        id: "102",
        name: "Veggie Pizza",
        price: 20000,
        description: "Fresh veggies on thin crust",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/400px-Pizza-3007395.jpg",
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
          { name: "Extra Toppings", price: 3000 },
          { name: "Thin Crust", price: 0 },
        ],
        vCoinValue: 20,
      },
      {
        id: "103",
        name: "Chicken Nuggets",
        price: 12000,
        description: "Crispy chicken nuggets with dip",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chicken_Nuggets.jpg/640px-Chicken_Nuggets.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "60+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "104",
        name: "Caesar Salad",
        price: 18000,
        description: "Fresh salad with caesar dressing",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg",
        category: "Salads",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "50+",
          },
        },
        customizations: [
          { name: "Add Chicken", price: 5000 },
        ],
        vCoinValue: 18,
      },
      {
        id: "105",
        name: "French Fries",
        price: 8000,
        description: "Golden crispy fries",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Truffle_oil_french_fries_%2833024792848%29.jpg/640px-Truffle_oil_french_fries_%2833024792848%29.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "90+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "106",
        name: "Chocolate Shake",
        price: 10000,
        description: "Rich chocolate milkshake",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chocolate_shake_from_St_Francis_Fountain.jpg/500px-Chocolate_shake_from_St_Francis_Fountain.jpg?20120603210018",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "70+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "107",
        name: "Grilled Chicken",
        price: 22000,
        description: "Tender grilled chicken",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Grilled_chicken_2.jpg/640px-Grilled_chicken_2.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "40+",
          },
        },
        customizations: [
          { name: "Spicy", price: 1000 },
        ],
        vCoinValue: 22,
      },
      {
        id: "108",
        name: "Pasta Alfredo",
        price: 19000,
        description: "Creamy pasta with alfredo sauce",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chicken_fettuccine_alfredo.JPG/640px-Chicken_fettuccine_alfredo.JPG",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "55+",
          },
        },
        customizations: [
          { name: "Add Mushrooms", price: 2000 },
        ],
        vCoinValue: 19,
      },
      {
        id: "109",
        name: "Onion Rings",
        price: 9000,
        description: "Crispy onion rings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Onion_Rings_-_Gourmet_Burger_Kitchen_2023-10-03.jpg/640px-Onion_Rings_-_Gourmet_Burger_Kitchen_2023-10-03.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "65+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "110",
        name: "Ice Cream Sundae",
        price: 13000,
        description: "Delicious ice cream sundae",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg/400px-Strawberry_ice_cream_cone_%285076899310%29.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "75+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
    ],
  },
  "2": {
    // Gazebo C2 menu
    menu: [
      {
        id: "201",
        name: "Chicken Biryani",
        price: 12000,
        description: "Aromatic rice with tender chicken",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicken_Biryani.jpg/400px-Chicken_Biryani.jpg",
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
          { name: "Extra Spice", price: 1000 },
          { name: "Boiled Egg", price: 1500 },
        ],
        vCoinValue: 12,
      },
      {
        id: "202",
        name: "Paneer Tikka",
        price: 16000,
        description: "Grilled paneer cubes",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Paneer_Tikka.jpg/400px-Paneer_Tikka.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "120+",
          },
        },
        customizations: [],
        vCoinValue: 16,
      },
      {
        id: "203",
        name: "Butter Chicken",
        price: 25000,
        description: "Rich butter chicken curry",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Butter_chicken.jpg/400px-Butter_chicken.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "200+",
          },
        },
        customizations: [
          { name: "Extra Butter", price: 2000 },
        ],
        vCoinValue: 25,
      },
      {
        id: "204",
        name: "Dal Makhani",
        price: 14000,
        description: "Creamy lentil curry",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Dal_makhani.jpg/400px-Dal_makhani.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "100+",
          },
        },
        customizations: [],
        vCoinValue: 14,
      },
      {
        id: "205",
        name: "Naan",
        price: 4000,
        description: "Soft Indian bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Naan.jpg/400px-Naan.jpg",
        category: "Breads",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "80+",
          },
        },
        customizations: [],
        vCoinValue: 4,
      },
      {
        id: "206",
        name: "Lassi",
        price: 6000,
        description: "Sweet yogurt drink",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lassi.jpg/400px-Lassi.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "90+",
          },
        },
        customizations: [],
        vCoinValue: 6,
      },
      {
        id: "207",
        name: "Chili Chicken",
        price: 18000,
        description: "Spicy chili chicken",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Chili_chicken.jpg/400px-Chili_chicken.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "110+",
          },
        },
        customizations: [
          { name: "Extra Spicy", price: 1000 },
        ],
        vCoinValue: 18,
      },
      {
        id: "208",
        name: "Rajma",
        price: 13000,
        description: "Kidney bean curry",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rajma.jpg/400px-Rajma.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "70+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
      {
        id: "209",
        name: "Samosa",
        price: 5000,
        description: "Crispy potato filled pastry",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosa_Dip.jpg/400px-Samosa_Dip.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "130+",
          },
        },
        customizations: [],
        vCoinValue: 5,
      },
      {
        id: "210",
        name: "Ras Malai",
        price: 8000,
        description: "Sweet cheese dumplings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ras_malai.jpg/400px-Ras_malai.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "95+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
    ],
  },
  "3": {
    // Gazebo C3 menu
    menu: [
      {
        id: "301",
        name: "Veggie Wrap",
        price: 10000,
        description: "Healthy veggie wrap",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Veggie_wrap.jpg/400px-Veggie_wrap.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "60+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "302",
        name: "Fruit Salad",
        price: 9000,
        description: "Fresh fruit mix",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fruit_salad.jpg/400px-Fruit_salad.jpg",
        category: "Salads",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "50+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "303",
        name: "Smoothie Bowl",
        price: 15000,
        description: "Nutritious smoothie bowl",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Smoothie_bowl.jpg/400px-Smoothie_bowl.jpg",
        category: "Healthy",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "40+",
          },
        },
        customizations: [],
        vCoinValue: 15,
      },
      {
        id: "304",
        name: "Quinoa Salad",
        price: 14000,
        description: "Quinoa with veggies",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Quinoa_salad.jpg/400px-Quinoa_salad.jpg",
        category: "Salads",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "35+",
          },
        },
        customizations: [],
        vCoinValue: 14,
      },
      {
        id: "305",
        name: "Green Tea",
        price: 5000,
        description: "Refreshing green tea",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Green_tea.jpg/400px-Green_tea.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "45+",
          },
        },
        customizations: [],
        vCoinValue: 5,
      },
      {
        id: "306",
        name: "Avocado Toast",
        price: 12000,
        description: "Toast with avocado",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Avocado_toast.jpg/400px-Avocado_toast.jpg",
        category: "Breakfast",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "55+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "307",
        name: "Protein Shake",
        price: 11000,
        description: "High protein shake",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Protein_shake.jpg/400px-Protein_shake.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "50+",
          },
        },
        customizations: [],
        vCoinValue: 11,
      },
      {
        id: "308",
        name: "Veggie Burger",
        price: 13000,
        description: "Plant-based burger",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Veggie_burger.jpg/400px-Veggie_burger.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "65+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
      {
        id: "309",
        name: "Chia Pudding",
        price: 10000,
        description: "Healthy chia pudding",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chia_pudding.jpg/400px-Chia_pudding.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "40+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "310",
        name: "Herbal Juice",
        price: 8000,
        description: "Natural herbal juice",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Herbal_juice.jpg/400px-Herbal_juice.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "30+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
    ],
  },
  "4": {
    // Gazebo C4 menu
    menu: [
      {
        id: "401",
        name: "Margherita Pizza",
        price: 18000,
        description: "Classic margherita pizza",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/400px-Pizza-3007395.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "120+",
          },
        },
        customizations: [
          { name: "Extra Cheese", price: 2000 },
        ],
        vCoinValue: 18,
      },
      {
        id: "402",
        name: "Pepperoni Pizza",
        price: 22000,
        description: "Pizza with pepperoni",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pepperoni_pizza.jpg/400px-Pepperoni_pizza.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "100+",
          },
        },
        customizations: [],
        vCoinValue: 22,
      },
      {
        id: "403",
        name: "Garlic Bread",
        price: 8000,
        description: "Toasted garlic bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Garlic_bread.jpg/400px-Garlic_bread.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "80+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "404",
        name: "Pasta Carbonara",
        price: 20000,
        description: "Creamy carbonara pasta",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fettuccine_Alfredo.jpg/400px-Fettuccine_Alfredo.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "90+",
          },
        },
        customizations: [],
        vCoinValue: 20,
      },
      {
        id: "405",
        name: "Tiramisu",
        price: 12000,
        description: "Classic Italian dessert",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Tiramisu.jpg/400px-Tiramisu.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "70+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "406",
        name: "Caprese Salad",
        price: 15000,
        description: "Tomato and mozzarella salad",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Caesar_salad_%281%29.jpg/400px-Caesar_salad_%281%29.jpg",
        category: "Salads",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "60+",
          },
        },
        customizations: [],
        vCoinValue: 15,
      },
      {
        id: "407",
        name: "Lasagna",
        price: 25000,
        description: "Layered pasta dish",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lasagna.jpg/400px-Lasagna.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "85+",
          },
        },
        customizations: [],
        vCoinValue: 25,
      },
      {
        id: "408",
        name: "Bruschetta",
        price: 10000,
        description: "Toasted bread with toppings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bruschetta.jpg/400px-Bruschetta.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "75+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "409",
        name: "Gelato",
        price: 9000,
        description: "Italian ice cream",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Gelato.jpg/400px-Gelato.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "95+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "410",
        name: "Espresso",
        price: 6000,
        description: "Strong coffee",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Espresso.jpg/400px-Espresso.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "50+",
          },
        },
        customizations: [],
        vCoinValue: 6,
      },
    ],
  },
  "5": {
    // Gymkhana menu
    menu: [
      {
        id: "501",
        name: "Steak",
        price: 35000,
        description: "Grilled beef steak",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Steak.jpg/400px-Steak.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "150+",
          },
        },
        customizations: [
          { name: "Rare", price: 0 },
          { name: "Well Done", price: 0 },
        ],
        vCoinValue: 35,
      },
      {
        id: "502",
        name: "Lobster Tail",
        price: 45000,
        description: "Grilled lobster tail",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Lobster_tail.jpg/400px-Lobster_tail.jpg",
        category: "Seafood",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.9",
            ratingCount: "80+",
          },
        },
        customizations: [],
        vCoinValue: 45,
      },
      {
        id: "503",
        name: "Truffle Risotto",
        price: 30000,
        description: "Risotto with truffle",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Risotto.jpg/400px-Risotto.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "100+",
          },
        },
        customizations: [],
        vCoinValue: 30,
      },
      {
        id: "504",
        name: "Foie Gras",
        price: 40000,
        description: "Duck liver pate",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Foie_gras.jpg/400px-Foie_gras.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "60+",
          },
        },
        customizations: [],
        vCoinValue: 40,
      },
      {
        id: "505",
        name: "Caviar",
        price: 50000,
        description: "Premium caviar",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Caviar.jpg/400px-Caviar.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "5.0",
            ratingCount: "40+",
          },
        },
        customizations: [],
        vCoinValue: 50,
      },
      {
        id: "506",
        name: "Champagne",
        price: 20000,
        description: "Fine champagne",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Champagne.jpg/400px-Champagne.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.8",
            ratingCount: "70+",
          },
        },
        customizations: [],
        vCoinValue: 20,
      },
      {
        id: "507",
        name: "Wagyu Beef",
        price: 55000,
        description: "Premium wagyu beef",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Wagyu.jpg/400px-Wagyu.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.9",
            ratingCount: "50+",
          },
        },
        customizations: [],
        vCoinValue: 55,
      },
      {
        id: "508",
        name: "Saffron Ice Cream",
        price: 15000,
        description: "Luxurious saffron ice cream",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ice_cream.jpg/400px-Ice_cream.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "65+",
          },
        },
        customizations: [],
        vCoinValue: 15,
      },
      {
        id: "509",
        name: "Oysters",
        price: 25000,
        description: "Fresh oysters",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Oysters.jpg/400px-Oysters.jpg",
        category: "Seafood",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "55+",
          },
        },
        customizations: [],
        vCoinValue: 25,
      },
      {
        id: "510",
        name: "Gold Leaf Chocolate",
        price: 18000,
        description: "Chocolate with gold leaf",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chocolate.jpg/400px-Chocolate.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "45+",
          },
        },
        customizations: [],
        vCoinValue: 18,
      },
    ],
  },
  "6": {
    // NorthSquare C1 menu
    menu: [
      {
        id: "601",
        name: "Chole Bhature",
        price: 12000,
        description: "Chickpea curry with fried bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chole_bhature.jpg/400px-Chole_bhature.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "200+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "602",
        name: "Pani Puri",
        price: 6000,
        description: "Street food favorite",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pani_puri.jpg/400px-Pani_puri.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "300+",
          },
        },
        customizations: [],
        vCoinValue: 6,
      },
      {
        id: "603",
        name: "Aloo Tikki",
        price: 8000,
        description: "Potato patties",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Aloo_tikki.jpg/400px-Aloo_tikki.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "150+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "604",
        name: "Raj Kachori",
        price: 10000,
        description: "Stuffed kachori",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Raj_kachori.jpg/400px-Raj_kachori.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "180+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "605",
        name: "Dahi Bhalla",
        price: 9000,
        description: "Yogurt dumplings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Dahi_bhalla.jpg/400px-Dahi_bhalla.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "120+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "606",
        name: "Bhelpuri",
        price: 7000,
        description: "Mixed puffed rice snack",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bhelpuri.jpg/400px-Bhelpuri.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "250+",
          },
        },
        customizations: [],
        vCoinValue: 7,
      },
      {
        id: "607",
        name: "Sev Puri",
        price: 8000,
        description: "Crispy sev on puri",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sev_puri.jpg/400px-Sev_puri.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "160+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "608",
        name: "Pav Bhaji",
        price: 11000,
        description: "Spicy vegetable mash with bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pav_bhaji.jpg/400px-Pav_bhaji.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "220+",
          },
        },
        customizations: [],
        vCoinValue: 11,
      },
      {
        id: "609",
        name: "Vada Pav",
        price: 5000,
        description: "Spicy potato fritter in bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vada_pav.jpg/400px-Vada_pav.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "280+",
          },
        },
        customizations: [],
        vCoinValue: 5,
      },
      {
        id: "610",
        name: "Misal Pav",
        price: 13000,
        description: "Sprouted lentils curry with bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Misal_pav.jpg/400px-Misal_pav.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "140+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
    ],
  },
  "7": {
    // NorthSquare C2 menu
    menu: [
      {
        id: "701",
        name: "Masala Dosa",
        price: 10000,
        description: "Crispy dosa with potato filling",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Masala_dosa.jpg/400px-Masala_dosa.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "300+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "702",
        name: "Idli Sambar",
        price: 8000,
        description: "Steamed rice cakes with lentil soup",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Idli.jpg/400px-Idli.jpg",
        category: "Breakfast",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "250+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "703",
        name: "Vada",
        price: 6000,
        description: "Lentil fritters",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Vada.jpg/400px-Vada.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "200+",
          },
        },
        customizations: [],
        vCoinValue: 6,
      },
      {
        id: "704",
        name: "Uttapam",
        price: 12000,
        description: "Thick pancake with toppings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Uttapam.jpg/400px-Uttapam.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "180+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "705",
        name: "Pongal",
        price: 9000,
        description: "Rice and lentil dish",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pongal.jpg/400px-Pongal.jpg",
        category: "Breakfast",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "150+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "706",
        name: "Rasam",
        price: 7000,
        description: "Spicy tamarind soup",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rasam.jpg/400px-Rasam.jpg",
        category: "Soups",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "120+",
          },
        },
        customizations: [],
        vCoinValue: 7,
      },
      {
        id: "707",
        name: "Appam",
        price: 11000,
        description: "Fermented rice pancakes",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Appam.jpg/400px-Appam.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "160+",
          },
        },
        customizations: [],
        vCoinValue: 11,
      },
      {
        id: "708",
        name: "Kerala Parotta",
        price: 13000,
        description: "Flaky layered bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Parotta.jpg/400px-Parotta.jpg",
        category: "Breads",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "140+",
          },
        },
        customizations: [],
        vCoinValue: 11,
      }
    ]
  },
  "8": {
    // NorthSquare C3 menu
    menu: [
      {
        id: "801",
        name: "Chow Mein",
        price: 12000,
        description: "Stir-fried noodles with vegetables",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chow_mein.jpg/400px-Chow_mein.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "150+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "802",
        name: "Fried Rice",
        price: 11000,
        description: "Rice stir-fried with veggies",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fried_rice.jpg/400px-Fried_rice.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "180+",
          },
        },
        customizations: [],
        vCoinValue: 11,
      },
      {
        id: "803",
        name: "Vegetable Momos",
        price: 10000,
        description: "Steamed dumplings with veggies",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Momos.jpg/400px-Momos.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "200+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "804",
        name: "Chicken Momos",
        price: 13000,
        description: "Steamed dumplings with chicken",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Momos.jpg/400px-Momos.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "160+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
      {
        id: "805",
        name: "Spring Rolls",
        price: 9000,
        description: "Crispy vegetable spring rolls",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Spring_rolls.jpg/400px-Spring_rolls.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "120+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "806",
        name: "Manchurian",
        price: 14000,
        description: "Vegetable balls in spicy sauce",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Manchurian.jpg/400px-Manchurian.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "140+",
          },
        },
        customizations: [],
        vCoinValue: 14,
      },
      {
        id: "807",
        name: "Hakka Noodles",
        price: 11500,
        description: "Stir-fried noodles",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hakka_noodles.jpg/400px-Hakka_noodles.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "130+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "808",
        name: "Dumplings",
        price: 12500,
        description: "Pan-fried dumplings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dumplings.jpg/400px-Dumplings.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "110+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
      {
        id: "809",
        name: "Hot and Sour Soup",
        price: 8000,
        description: "Spicy and tangy soup",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hot_and_sour_soup.jpg/400px-Hot_and_sour_soup.jpg",
        category: "Soups",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "100+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "810",
        name: "Egg Fried Rice",
        price: 12000,
        description: "Fried rice with egg",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Egg_fried_rice.jpg/400px-Egg_fried_rice.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "170+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
    ],
  },
  "9": {
    // NorthSquare C4 menu
    menu: [
      {
        id: "901",
        name: "Cheeseburger",
        price: 15000,
        description: "Burger with cheese and toppings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/400px-RedDot_Burger.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "200+",
          },
        },
        customizations: [
          { name: "Extra Cheese", price: 2000 },
        ],
        vCoinValue: 15,
      },
      {
        id: "902",
        name: "French Fries",
        price: 8000,
        description: "Golden crispy fries",
        imageId: "mock-fries",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "250+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "903",
        name: "Chicken Nuggets",
        price: 12000,
        description: "Crispy chicken nuggets",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chicken_nuggets.jpg/400px-Chicken_nuggets.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "180+",
          },
        },
        customizations: [],
        vCoinValue: 12,
      },
      {
        id: "904",
        name: "Onion Rings",
        price: 9000,
        description: "Crispy onion rings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Onion_rings.jpg/400px-Onion_rings.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "150+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
      {
        id: "905",
        name: "Milkshake",
        price: 10000,
        description: "Thick chocolate milkshake",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Strawberry_Milkshake.jpg/400px-Strawberry_Milkshake.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "160+",
          },
        },
        customizations: [],
        vCoinValue: 10,
      },
      {
        id: "906",
        name: "Hot Dog",
        price: 11000,
        description: "Classic hot dog with toppings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hot_dog.jpg/400px-Hot_dog.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "140+",
          },
        },
        customizations: [],
        vCoinValue: 11,
      },
      {
        id: "907",
        name: "Chicken Wings",
        price: 16000,
        description: "Spicy chicken wings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chicken_wings.jpg/400px-Chicken_wings.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "190+",
          },
        },
        customizations: [],
        vCoinValue: 16,
      },
      {
        id: "908",
        name: "Mozzarella Sticks",
        price: 13000,
        description: "Cheesy fried sticks",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mozzarella_sticks.jpg/400px-Mozzarella_sticks.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "130+",
          },
        },
        customizations: [],
        vCoinValue: 13,
      },
      {
        id: "909",
        name: "Hash Browns",
        price: 7000,
        description: "Crispy potato hash",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hash_browns.jpg/400px-Hash_browns.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "120+",
          },
        },
        customizations: [],
        vCoinValue: 7,
      },
      {
        id: "910",
        name: "Soft Drink",
        price: 6000,
        description: "Refreshing soda",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Soda.jpg/400px-Soda.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "100+",
          },
        },
        customizations: [],
        vCoinValue: 6,
      },
    ],
  },
  "10": {
    // Dominos menu
    menu: [
      {
        id: "1001",
        name: "Margherita Pizza",
        price: 18000,
        description: "Classic cheese pizza",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/400px-Pizza-3007395.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "300+",
          },
        },
        customizations: [
          { name: "Extra Cheese", price: 2000 },
        ],
        vCoinValue: 18,
      },
      {
        id: "1002",
        name: "Pepperoni Pizza",
        price: 22000,
        description: "Pizza with pepperoni",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Pepperoni_pizza.jpg/400px-Pepperoni_pizza.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.7",
            ratingCount: "250+",
          },
        },
        customizations: [],
        vCoinValue: 22,
      },
      {
        id: "1003",
        name: "Veggie Pizza",
        price: 20000,
        description: "Loaded with vegetables",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/400px-Pizza-3007395.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "220+",
          },
        },
        customizations: [],
        vCoinValue: 20,
      },
      {
        id: "1004",
        name: "BBQ Chicken Pizza",
        price: 24000,
        description: "Chicken with BBQ sauce",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/BBQ_chicken_pizza.jpg/400px-BBQ_chicken_pizza.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.6",
            ratingCount: "200+",
          },
        },
        customizations: [],
        vCoinValue: 24,
      },
      {
        id: "1005",
        name: "Garlic Bread",
        price: 8000,
        description: "Toasted garlic bread",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Garlic_bread.jpg/400px-Garlic_bread.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "180+",
          },
        },
        customizations: [],
        vCoinValue: 8,
      },
      {
        id: "1006",
        name: "Chicken Wings",
        price: 16000,
        description: "Spicy chicken wings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chicken_wings.jpg/400px-Chicken_wings.jpg",
        category: "Starters",
        itemAttribute: {
          vegClassifier: "NONVEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "170+",
          },
        },
        customizations: [],
        vCoinValue: 16,
      },
      {
        id: "1007",
        name: "Pasta Alfredo",
        price: 19000,
        description: "Creamy pasta",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fettuccine_Alfredo.jpg/400px-Fettuccine_Alfredo.jpg",
        category: "Main Course",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "150+",
          },
        },
        customizations: [],
        vCoinValue: 19,
      },
      {
        id: "1008",
        name: "Dessert Pizza",
        price: 15000,
        description: "Sweet pizza with toppings",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dessert_pizza.jpg/400px-Dessert_pizza.jpg",
        category: "Desserts",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "120+",
          },
        },
        customizations: [],
        vCoinValue: 15,
      },
      {
        id: "1009",
        name: "Coke",
        price: 6000,
        description: "Refreshing cola",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Coke.jpg/400px-Coke.jpg",
        category: "Beverages",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "100+",
          },
        },
        customizations: [],
        vCoinValue: 6,
      },
      {
        id: "1010",
        name: "Fries",
        price: 9000,
        description: "Crispy potato fries",
        imageId: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/French_fries.jpg/400px-French_fries.jpg",
        category: "Snacks",
        itemAttribute: {
          vegClassifier: "VEG",
        },
        ratings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "140+",
          },
        },
        customizations: [],
        vCoinValue: 9,
      },
    ],
  }
}



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
    pickupCoords: { lat: 12.84166255938762, lng: 80.15455173160387 }, // Gazebo location
    deliveryCoords: { lat: 12.843687187497949, lng: 80.15451785651514 },
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
    pickupCoords: { lat: 12.843467535033184, lng: 80.15260642635936 }, // Gymkhana location
    deliveryCoords: { lat: 12.843687187497949, lng: 80.15451785651514 },
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

export const deliveryAddresses = [
  { name: "AB3", lat: 12.843674116906302, lng: 80.15454066345887 }, , 
  { name: "AB2", lat: 12.842896494563089, lng: 80.15651073042048 },
  { name: "AB1", lat: 12.843560464682763, lng: 80.15304404214189 },
  { name: "AB4", lat: 12.84337843815955, lng: 80.15551926905485 },
  { name: "Library", lat: 12.841275182162306, lng: 80.15383422026325 },
  { name: "Admin Block", lat: 12.840666850781357, lng: 80.15401823385486 },
];

