 # CampusCrave Project Submission

## 1. Architectural Prototype

### Project Architecture Diagram

CampusCrave is a frontend-only React application designed for campus food ordering. The architecture follows a component-based structure with state management using Redux Toolkit. Below is a textual representation of the architecture:

```
[User Interface Layer]
    ├── Landing Page (Entry Point)
    ├── Authentication (SignIn/SignUp)
    ├── Main App Layout (Header + Outlet)
    │   ├── Home (Restaurant Listings)
    │   ├── Search (Cuisine/Restaurant Search)
    │   ├── Restaurant Menu (Item Selection)
    │   ├── Cart (Order Management)
    │   ├── Order Tracking (Real-time Updates)
    │   ├── Dashboards (Role-based: Student, Vendor, Runner, Admin)
    │   ├── VCoin Wallet (Rewards System)
    │   ├── Meal Share (Community Feature)
    │   ├── Notifications (Alerts)
    │   ├── Order History (Past Orders)
    │   └── Other Features (Contact, Help, etc.)
    └── Footer (Common Component)

[State Management Layer (Redux)]
    ├── Store (Centralized State)
    │   ├── Cart Slice (Order Items)
    │   ├── User Role Slice (Authentication/Role)
    │   ├── Location Slice (User Location)
    │   ├── Restaurant List Slice (Available Restaurants)
    │   ├── VCoin Slice (Rewards)
    │   ├── Notifications Slice (Alerts)
    │   ├── Delivery Slice (Order Status)
    │   └── Meal Share Slice (Shared Meals)

[Routing Layer (React Router)]
    ├── Browser Router (App-level Routing)
    └── Nested Routes (Protected/Private Routes)

[Styling Layer (Tailwind CSS)]
    ├── Utility Classes (Responsive Design)
    └── Custom Components (Shimmer Effects, etc.)

[Data Layer (Mock Data / Future API)]
    ├── Mock Data (src/mockData.js)
    └── Custom Hooks (useRestaurantData, useRestaurantMenu, etc.)

[Assets Layer]
    ├── Images (Logos, Food Items, etc.)
    └── Fonts (Custom Fonts)
```

### Components and Interactions
- **Frontend Components**: Modular React components for each feature, interacting via props and Redux state.
- **State Management**: Redux slices handle global state, with actions dispatched from components.
- **Routing**: React Router manages navigation between pages, with lazy loading for performance.
- **Styling**: Tailwind CSS provides responsive, utility-first styling.
- **Data Fetching**: Currently uses mock data; future integration with backend APIs (Node.js/Express/MongoDB).
- **Interactions**: Components communicate via Redux for state changes, and routing for page transitions. No backend yet, so all data is static.

This architecture supports scalability for adding backend services, real-time features (e.g., WebSockets for order tracking), and multi-role access.

## 2. User Interface Prototype (Screen Shots)

The UI prototype was developed directly in code using React and Tailwind CSS, without external wireframing tools. Key screens represent the system flow from landing to ordering.

Tools Used: React (for component structure), Tailwind CSS (for styling), and browser-based development (Chrome DevTools for responsive testing).

### Key Screens (Descriptions and Placeholders for Screenshots)
1. **Landing Page**: Welcome screen with hero image, features overview, and call-to-action button. Includes a 3D Spline animation for engagement.
   - [Placeholder: Screenshot of Landing Page - Shows CampusCrave logo, tagline, features grid, and CTA button.]

2. **Home Page**: Main dashboard for students, displaying restaurant listings, search bar, and popular cuisines.
   - [Placeholder: Screenshot of Home Page - Grid of restaurant cards with images, ratings, and quick order options.]

3. **Restaurant Menu Page**: Detailed menu for a selected restaurant, with item categories, add-to-cart functionality, and cart summary.
   - [Placeholder: Screenshot of Restaurant Menu - List of food items with prices, veg/non-veg icons, and cart button.]

These screens demonstrate the user flow: Discover > Select > Order. The design is mobile-first, responsive, and uses orange/white color scheme for branding.

## 3. Screenshots of Developed Functionalities

The following are descriptions of key developed functionalities with placeholders for screenshots. (Note: Actual screenshots would be captured from the running app at http://localhost:3000.)

1. **User Authentication**: Sign-in and sign-up forms with role selection (Student/Vendor/Runner/Admin).
   - Functionality: Form validation, role-based redirection.
   - [Placeholder: Screenshot of Sign-In Page - Email/password fields, role dropdown, and login button.]

2. **Restaurant Browsing and Ordering**: Browse restaurants, view menus, add items to cart, and place orders.
   - Functionality: Search/filter, cart management, order placement.
   - [Placeholder: Screenshot of Cart Page - List of selected items, quantities, total price, and checkout button.]

3. **Order Tracking**: Real-time order status updates (e.g., Preparing, Out for Delivery, Delivered).
   - Functionality: Displays order details, estimated delivery time, and runner info.
   - [Placeholder: Screenshot of Order Tracking Page - Map integration (using Leaflet), status timeline, and contact runner option.]

4. **VCoin Wallet**: View balance, transaction history, and redeem options.
   - Functionality: Earn/redeem VCoins, view rewards.
   - [Placeholder: Screenshot of VCoin Wallet - Balance display, transaction list, and redeem button.]

5. **Dashboards**: Role-specific dashboards (e.g., Vendor for menu management, Runner for deliveries).
   - Functionality: Manage orders, update status, view analytics.
   - [Placeholder: Screenshot of Vendor Dashboard - Menu items list, add/edit options, and order queue.]

6. **Meal Share**: Community feature to share or buy pre-listed meals.
   - Functionality: Post meals, browse shared items, place orders.
   - [Placeholder: Screenshot of Meal Share Page - List of shared meals with details and buy buttons.]

## 4. Tools / Technologies Used

### Programming Languages
- JavaScript (ES6+)

### Frameworks and Libraries
- **React**: 18.3.1 (Frontend framework for building UI components)
- **Redux Toolkit**: 2.2.5 (State management)
- **React Router DOM**: 6.23.1 (Client-side routing)
- **Tailwind CSS**: 3.4.3 (Utility-first CSS framework for styling)
- **React Leaflet**: 4.2.1 (Map integration for location features)
- **Recharts**: 3.3.0 (Data visualization for dashboards)
- **Spline**: @splinetool/react-spline 4.1.0 (3D animations on landing page)
- **FontAwesome**: React FontAwesome for icons

### Development Tools
- **Create React App**: For project setup and build scripts
- **npm**: Package management
- **ESLint**: Code linting
- **Parcel/Babel**: Bundling and transpiling (via CRA)

### Other Technologies
- **Leaflet**: 1.9.4 (Open-source map library)
- **Lodash**: 4.17.21 (Utility functions)
- **Node Fetch**: 3.3.2 (For future API calls)
- **Testing**: Jest and React Testing Library (built-in with CRA)

### Future Backend (Not Implemented Yet)
- Node.js, Express.js, MongoDB, JWT for authentication and data persistence.

## 5. Video Presentation (Optional)

A short video presentation (5-8 minutes) can be recorded demonstrating:
- Introduction to CampusCrave and its purpose.
- Walkthrough of architecture (using diagrams from Section 1).
- UI demonstration: Navigating from landing to placing an order.
- Key functionalities: Ordering, tracking, wallet, dashboards.
- Tools used and development process.

To create the video, use screen recording software (e.g., OBS Studio on macOS) while running the app and explaining features.

---

This document provides a comprehensive overview of the CampusCrave project. To generate the PDF, copy this content into a word processor (e.g., Google Docs, Microsoft Word) and export as PDF. For actual screenshots, run the app (`npm start`) and capture images of the pages mentioned.
