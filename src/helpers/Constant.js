export const shimmer_display_count = 8;
export const GET_LOCATION_API_URL =
  "https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/";
export const apiKey = "3e4e471433mshb90d2fd16ca0a7ep12ca07jsnf69a5e6732d7";
export const swiggyAPI = (lat, lng) => {
  return `https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
};
export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";
export const ITEM_API =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
// export const LOGO_URL =
//   'https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png';
export const WOYM_CARD_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
export const RES_CARD_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const RES_CARD_IMG_CDN_URL_GREY =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/";
export const APP_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
export const swiggySearchAPI = (lat, lng) => {
  return `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${lat}&lng=${lng}`;
};
export const REST_API_MENU_URL = (lat, lng) => {
  return `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`;
};
export const DELIVERY_DISTANCE_IMG =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu";
export const MENU_OFFERS_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/";
export const MENU_ITEM_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
export const footer_content = [
  {
    id: "101",
    title: "Contact Us",
    data: ["Help & Support", "Partner with us", "Ride with us"],
  },
  {
    id: "102",
    title: "Legal",
    data: [
      "Terms & Conditions",
      "Cookie Policy",
      "Privacy Policy",
      "Investor Relations",
    ],
  },
];
export const support_data = [
  {
    type: "general",
    title: "General issues",
    description:
      "This issue deals with General Issues that the different stake holders in the eco-system faces.",
    data: [
      {
        id: 11500,
        title: "What is CampusCrave Customer Care Number?",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 206,
        title: "I have a query related to placing an order",
        description: 
        "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: false,
        isBackupNode: false,
        isResolutionNode: false,
        options: [
          {
            type: "chat",
            phoneNumber: null,
            provider: "chatengine",
            waitTime: "Wait time under 2 min(s)",
            emailId: null,
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 212,
        title: "I am unable to log in on CampusCrave",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: false,
        isBackupNode: false,
        isResolutionNode: false,
        options: [
          {
            type: "chat",
            phoneNumber: null,
            provider: "chatengine",
            waitTime: "Wait time under 2 min(s)",
            emailId: null,
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 215,
        title: "I have a payment or refund related query",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: false,
        isBackupNode: false,
        isResolutionNode: false,
        options: [
          {
            type: "chat",
            phoneNumber: null,
            provider: "chatengine",
            waitTime: "Wait time under 2 min(s)",
            emailId: null,
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 223,
        title: "I have a coupon related query",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: false,
        isBackupNode: false,
        isResolutionNode: false,
        options: [
          {
            type: "chat",
            phoneNumber: null,
            provider: "chatengine",
            waitTime: "Wait time under 2 min(s)",
            emailId: null,
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 1050,
        title: "I am unable to place a cash on delivery order",
        description: "tel:08067466730",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [
          {
            type: "call",
            phoneNumber: "08067466730",
            provider: "",
            waitTime: "Wait time under 2 min(s)",
            emailId: null,
          },
          {
            type: "chat",
            phoneNumber: null,
            provider: "chatengine",
            waitTime: "Wait time under 2 min(s)",
            emailId: null,
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 228,
        title: "I want to unsubscribe from CampusCrave communications",
        description:
          "Please drop us an email mentioning the channels you would like to be unsubscribed from. We will take an action and confirm within 24-48 hours",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [
          {
            type: "email",
            phoneNumber: null,
            provider: null,
            waitTime: "We will revert within 24-48 hrs",
            emailId: "support@CampusCrave.in",
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
    ],
  },
  {
    type: "partner-onboarding",
    title: "Partner Onboarding",
    description:
      "This issue type deals with anything specific to partner onboarding related to all the stake holders in the eco-system. It includes all types of partner onboarding related issues",
    data: [
      {
        id: 492,
        title: "I want to partner my restaurant with CampusCrave",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: false,
        isBackupNode: false,
        isResolutionNode: true,
        options: [
          {
            type: "email",
            phoneNumber: null,
            provider: null,
            waitTime: "We will revert within 24-48 hrs",
            emailId: "partnersupport@CampusCrave.in",
          },
        ],
        hyperLinkText: "Partner with us",
        hyperLink: "https://www.CampusCrave.com/partner-with-us",
      },
      {
        id: 100175,
        title:
          "What are the mandatory documents needed to list my restaurant on CampusCrave?",
        description:
          "- Copies of the below documents are mandatory\n- FSSAI Licence OR FSSAI Acknowledgement\n- Pan Card\n- GSTIN Certificate\n- Cancelled Cheque OR bank Passbook\n- Menu",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100176,
        title:
          "After I submit all documents, how long will it take for my restaurant to go live on CampusCrave?",
        description:
          "After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100177,
        title:
          "What is this one time Onboarding fees? Do I have to pay for it while registering?",
        description:
          "This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from CampusCrave.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100178,
        title:
          "Who should I contact if I need help & support in getting onboarded?",
        description:
          "You can connect with Partner Support on 080-67466777/68179777 or write to onboarding@CampusCrave.in",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100179,
        title: "How much commission will I be charged by CampusCrave?",
        description:
          "The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100180,
        title:
          "I don't have an FSSAI licence for my restaurant. Can it still be onboarded?",
        description:
          "FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
    ],
  },
  {
    type: "legal",
    title: "Legal, Terms & Conditions",
    description:
      "This issue type deals with Legal, Terms & Conditions and policy related issues for all the stakeholders in the eco-system.",
    data: [
      {
        id: 100043,
        title: "Terms of Use",
        description:
          'These terms of use (the "Terms of Use") govern your use of our website www.CampusCrave.in (the "Website") and our "CampusCrave" application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Services"). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: "Read More",
        hyperLink: "https://www.CampusCrave.com/terms-and-conditions",
      },
      {
        id: 100044,
        title: "Privacy Policy",
        description:
          'We ( Bundl Technologies Private Limited, alias "CampusCrave" ) are fully committed to respecting your privacy and shall ensure that your personal information is safe with us. This privacy policy sets out the information practices of www.CampusCrave.com ("Website") including the type of information is collected, how the information is collected, how the information is used and with whom it is shared. Reference to "you" in this Privacy Policy refers to the users of this Website whether or not you access the services available on the Website or consummate a transaction on the Website. By using or accessing this Website, you agree to the terms and conditions of this Privacy Policy. You also expressly consent to our use and disclosure of your Personal Information (as defined below) in any manner as described in this Privacy Policy and further signify your agreement to this Privacy Policy and the Terms of Use (being incorporated by reference herein). If you do not agree with the terms and conditions of this Privacy Policy, please do not proceed further or use or access this Website. ',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: "Read More",
        hyperLink: "https://www.CampusCrave.com/privacy-policy",
      },
      {
        id: 100045,
        title: "Cancellations and Refunds",
        description:
          "a)As a general rule you shall not be entitled to cancel your order once placed. You may choose to cancel your order only within one-minute of the order being placed by you. However, subject to your previous cancellation history, CampusCrave reserves the right to deny any refund to you pursuant to a cancellation initiated by you even if the same is within one-minute. b)If you cancel your order after one minute of placing it, CampusCrave shall have a right to charge you 100% of the order amount as the cancellation fee , with a right to either not to refund the order value in case your order is prepaid or recover from your subsequent order in case your order is postpaid, to compensate our restaurant/merchants and delivery partners. c)CampusCrave reserves the right to charge you cancellation fee for the orders constrained to be cancelled by CampusCrave for reasons not attributable to CampusCrave, including but not limited to: i)in the event if the address provided by you is either wrong or falls outside the delivery zone; ii) failure to contact you by phone or email at the time of delivering the order booking; iii) failure to deliver your order due to lack of information, direction or authorization from you at the time of delivery; or iv) unavailability of all the items ordered by you at the time of booking the order. However, in the unlikely event of an item on your order being unavailable, CampusCrave will contact you on the phone number provided to us at the time of placing the order and inform you of such unavailability. In such an event you will be entitled to cancel the entire order and shall be entitled to a refund to an amount upto 100% of the order value. d)In case of cancellations for the reasons attributable to CampusCrave or the restaurant partner or delivery partners, CampusCrave shall not charge you any cancellation fee.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: "Read More",
        hyperLink: "https://www.CampusCrave.com/refund-policy",
      },
      {
        id: 100046,
        title: "Terms of Use for CampusCrave ON-TIME / Assured",
        description:
          'These terms of use (the "Terms of Use") that govern your use of our service CampusCrave ON-TIME / Assured  ("ON-TIME" / "Assured") on our website www.CampusCrave.in (the "Website") and our CampusCrave application for mobile and handheld devices (the "App"). The services on ON-TIME / Assured  available on our Website and the App are jointly referred to as the "On-Time Delivery". Please read these Terms of Use carefully before you use the Services. If you do not agree to these Terms of Use, you may not use the Services. By using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (incorporated by reference herein) and creates a legally binding arrangement to abide by the same. ',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: "Read More",
        hyperLink: "https://www.CampusCrave.com/terms-and-conditions",
      },
      {
        id: 100323,
        title: "T&C for TBC Matchday offer",
        description:
          "By participating to avail this offer, all participant User(s)(defined below) agree to be bound by these terms and conditions (“T&Cs”), the Terms of Use, Privacy Policy and other relevant CampusCrave policies and documentations that are available on www.CampusCrave.com and on its mobile application (“Platform”) including any modifications, alterations or updates that We make (collectively referred to as “FoodVilla T&C’s”).",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: "Read More",
        hyperLink:
          "https://promos.CampusCrave.com/tnc-tbc-matchday/v3/index.html",
      },
      {
        id: 100344,
        title: "Terms and Conditions for Gourmet Mother's Day Campaign",
        description:
          'By participating to avail this Offer, all User(s) agree to be bound by the Terms of Use (https://www.CampusCrave.com/terms-and-conditions), Privacy Policy (https://www.CampusCrave.com/privacy-policy) and other relevant CampusCrave policies and documentations that are available on the Platform  including any modifications, alterations or updates that CampusCrave (hereinafter referred to as “We” “Us”, or “FoodVilla”)  make (collectively referred to as "CampusCrave T&Cs")',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: "READ MORE",
        hyperLink:
          "https://webviews.CampusCrave.com/portal-static-page/gourmet_mothers_day_campaign/",
      },
      {
        id: 100489,
        title: "Terms and Conditions for Guiltfree Monday",
        description:
          'By participating to avail this Offer, all User(s) agree to be bound by the Terms of Use (https://www.CampusCrave.com/terms-and-conditions), Privacy Policy (https://www.CampusCrave.com/privacy-policy) and other relevant CampusCrave policies and documentations that are available on the Platform including any modifications, alterations or updates that CampusCrave (hereinafter referred to as “We” “Us”, or “FoodVilla”) make (collectively referred to as "CampusCrave T&Cs")',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: "READ MORE",
        hyperLink:
          "https://webviews.CampusCrave.com/portal-static-page/guiltfree_monday_campaign/",
      },
      {
        id: 100394,
        title: "T&C for Mega Savings Festival Order & Win Daily",
        description:
          " By participating in this activity, all participant User(s)(defined below) agree to be bound by these terms and conditions (“T&Cs”), the Terms of Use, Privacy Policy and other relevant CampusCrave policies and documentations that are available on www.CampusCrave.com and on its mobile application (“Platform”) including any modifications, alterations or updates that We make (together “FoodVilla T&C’s”).",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: "READ MORE",
        hyperLink: "https://promos.CampusCrave.com/tnc-raffle/v1/index.html",
      },
      {
        id: 100485,
        title: "T&C for Instamart Weekend Supermarket Dineout Vouchers",
        description:
          'Details of the Offer:  \n\nThis offer (“Offer”) commences at 12:01 A.M on 15th of April 2025 and will remain live until 11:59 PM on 16th of April, 2025 (“Offer Period”) on the Platform . Eligibility of this Offer is only of Instamart users (hereinafter referred to as “You”, “Your” or “User”) subject to and in accordance with the T&Cs mentioned below -\n\nEligibility criteria:\n\nThe minimum order value (of one order) on Instamart shall be of INR 599/- (Rupees Five Hundred and Ninety Nine only) and the order must be successfully delivered (“Order”).\n\nEvery three hundredth User (300th, 600th, 900th……75000th) upto 250 such Users each day i.e. on 15th and 16th April, 2025, who successfully places the Order during the Offer Period, will be eligible to get a Dineout discount voucher* (of 20% upto INR 400 off) (“Voucher”) which they can avail exclusively on the restaurants listed on the Dineout application subject to the terms and conditions of the said Voucher (each a "Voucher Recipient”) . \nWe reserve the right to suspend the Offer for/on a particular day during the Offer Period, or if and when the Voucher Recipients for the day have been selected basis the terms herein.     \n\nRelevant terms and conditions:\n\nThe minimum order value of the Order shall be INR 599/- (Rupees Five Hundred and Ninety Nineonly) which shall be a sum of on the selling price of the products offered on Instamart without discounts, handling fee, delivery fee, any coupon application etc.\nThis Offer is valid in the following cities only: Ahmedabad, Bangalore, Goa, Chandigarh, Dehradun, Delhi, Hyderabad, Indore, Jaipur, Kochi, Kolkata, Lucknow, Ludhiana, Mumbai, Pune, Surat, Vadodara, Gurgaon and Noida.\n\nThe Voucher Recipients will be contacted via Our customer care team on their registered mobile numbers on Whatsapp or on their registered email id’s.  Notwithstanding anything contained herein, it shall be the sole responsibility of the Voucher Recipients to check their messages (including spam). \nNo responsibility is accepted for entries that are late, lost, misdirected or not received by Us during the Offer Period. Any operating or ancillary costs, if any, associated with the Vouchers is the sole responsibility of the Voucher Recipients.\n\nThe Users understand that We do not make any assurances as to the probability of winning in this Offer. \n\nThe User understands and agrees that a User can be a Voucher Recipient only once during this Offer.\nWe do not collect any participation fees for the Offer. \nParticipation in the Offer is entirely voluntary and participation will be construed as an acceptance of the CampusCrave T&C’s.',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
    ],
  },
  {
    type: "faq",
    title: "FAQs",
    description:
      "This issue type deals with all the FAQs related to very stakeholder in the eco-system.",
    data: [
      {
        id: 11501,
        title: "What is CampusCrave Customer Care Number?",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100074,
        title:
          "I entered the wrong CVV, why did my transaction still go through?",
        description:
          "The logic of validations of CVV resides with either payment gateways or banks. It is absolutely the choice of banks to have CVV as a mandatory input field or not. As per RBI guidelines, 2-Factor-Authentication is not mandatory for less than Rs 2000 rupees transaction. It is not in control of CampusCrave. As an organization, we don't store any card information.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 494,
        title: "I want to explore career opportunities with CampusCrave",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: false,
        isBackupNode: false,
        isResolutionNode: true,
        options: [
          {
            type: "email",
            phoneNumber: null,
            provider: null,
            waitTime: "We will revert within 24 hrs",
            emailId: "email-support@CampusCrave.in",
          },
        ],
        hyperLinkText: "Join our team",
        hyperLink: "https://www.CampusCrave.com/careers?hide_header=ios_android",
      },
      {
        id: 495,
        title: "I want to provide feedback",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [
          {
            type: "email",
            phoneNumber: null,
            provider: null,
            waitTime: "We will revert within 24 hrs",
            emailId: "support@CampusCrave.in",
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100047,
        title: "Can I edit my order?",
        description:
          'In order to edit your order, please click on "Help" and then "I wantto modify items in my order". We will connect you to a support agent who will assist you with the same. Please note that your order can be edited only if the restaurant is yet to confirm your order. Post that, we may not be able to modify your order if food preparation has started.',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100048,
        title: "I want to cancel my order",
        description:
          'In order to cancel your order, please click on "Help" and then "I want to cancel my order". Please note that we may charge you a cancellation fee as it helps us to minimise food wastage and also compensate our restaurant partners for cancelled orders.',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 491,
        title: "I want an invoice for my order",
        description:
          "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. ",
        
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: true,
        options: [
          {
            type: "email",
            phoneNumber: null,
            provider: null,
            waitTime: "We will revert within 24 hrs",
            emailId: "support@CampusCrave.in",
          },
        ],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100049,
        title: "Will CampusCrave be accountable for quality/quantity? ",
        description:
          "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100050,
        title: "Is there a minimum order value?",
        description:
          "We have no minimum order value and you can order for any amount. ",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100051,
        title: "Do you charge for delivery?",
        description:
          "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100052,
        title: "How long do you take to deliver?",
        description:
          "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100053,
        title: "What are your delivery hours?",
        description:
          "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100054,
        title: "Can I order from any location?",
        description:
          "We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100055,
        title: "Is single order from many restaurants possible?",
        description:
          "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100056,
        title: "Do you support bulk orders?",
        description:
          "In order to provide all customers with a great selection and to ensure on time delivery of your meal, we reserve the right to limit the quantities depending on supply.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100057,
        title: "Can I order in advance?",
        description:
          'Yes, you can order up to 2 days in advance on our platform. Click onthe "NOW" button on the top left corner of the app to select your desired delivery time slot and place an order. This feature is currently available only on Android phones and in select cities.',
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100058,
        title: "Can I change the address / number?",
        description:
          "Any major change in delivery address is not possible after you have placed an order with us. However, slight modifications like changing the flat number, street name, landmark etc. are allowed. If you have received delivery executive details, you can directly call him, else you could contact our customer service team.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100059,
        title: "Unable to view the details in my profile",
        description:
          "Please check if your app is due for an update. If not, please share the details via support@CampusCrave.in",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100060,
        title: "Did not receive referral coupon?",
        description:
          "Referral coupon is given upon the first successful transaction of the referred person. If you still have not received it, kindly send us your details at support@CampusCrave.in. We will contact you within 48 hours.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100061,
        title: "Deactivate my account",
        description:
          "Please write to us at support@CampusCrave.in in the event that you want to deactivate your account.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100062,
        title: "Unable to view the details in my profile",
        description:
          "Please check if your app is due for an update. If not, please share the details via support@CampusCrave.in",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100063,
        title: "Do you accept Sodexo, Ticket Restaurant etc.?",
        description:
          "We do not accept Sodexo vouchers but we do accept Sodexo card. You can select the Sodexo card option while selecting payment options at the time of order",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100263,
        title: "Unable to make payment using Sodexo card on Instamart?",
        description:
          "Sodexo card can be used to pay for purchase of food and non-alcoholic beverages (for example, fruits, vegetables, biscuits, milk and other grocery items). Sodexo card cannot be used to buy non-food items (for example Stationary items, shampoo, batteries etc)",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
      {
        id: 100095,
        title: "My CampusCrave Money wallet has been mis-used by someone else",
        description:
          "Please block your wallet by reaching out to our customer care executives. We will work with ICICI to address your issue, if any.",
        conversationId: null,
        layerConversationId: null,
        ackText: null,
        isLeaf: true,
        isBackupNode: false,
        isResolutionNode: false,
        options: [],
        hyperLinkText: null,
        hyperLink: null,
      },
    ],
  },
];
