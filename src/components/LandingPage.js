import React from "react";
import Header from "./Header";
import campuscravelandingpage from "../assets/campuscravelandingpage.png";
import Spline from '@splinetool/react-spline';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-8 text-center">
        <img
          src={campuscravelandingpage}
          alt="CampusCrave"
          className="w-auto h-[40vh] mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to CampusCrave
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Your ultimate campus food companion. Order delicious meals, earn rewards, and connect with your community!
        </p>
        <div className="flex justify-center">
          <Spline
            scene="https://prod.spline.design/Hrbf0AN7sZrwfZNf/scene.splinecode"
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose CampusCrave?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">Easy Ordering</h3>
              <p className="text-gray-600">
                Browse and order from a variety of campus eateries with just a few taps. Fast, convenient, and delicious!
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Runner Service</h3>
              <p className="text-gray-600">
                Become a runner and deliver orders across campus. Earn money and stay active while helping your community!
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">Vendor Portal</h3>
              <p className="text-gray-600">
                Manage your eatery, update menus, and track orders effortlessly. Grow your business on campus!
              </p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Rewards & VCoins</h3>
              <p className="text-gray-600">
                Earn VCoins through orders. Redeem them for discounts and exclusive perks!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-orange-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join the CampusCrave Community Today!</h2>
        <p className="text-xl mb-8">
          Sign up now and start your journey towards better campus dining experiences.
        </p>
        <button
          onClick={() => window.location.href = "/login"}
          className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-800 text-white text-center">
        <p>&copy; 2023 CampusCrave. All rights reserved.</p>
      </footer>
      </div>
    </>
  );
};

export default LandingPage;
