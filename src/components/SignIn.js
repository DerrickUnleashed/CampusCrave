import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRole } from "../Utils/userRoleSlice";
import chef2doorlandingpage from "../assets/chef2doorlandingpage.png";

const SignIn = () => {
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    dispatch(setRole(role));
    // In a real app, this would handle authentication
    alert(`Logged in as ${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-40 ">
      <img
        src={chef2doorlandingpage}
        alt="CampusCrave"
        className="w-auto mt-2 h-[40vh] mb-3"
      />
      <h1 className="text-[#282c3f] font-extrabold text-2xl tracking-tighter leading-7 mb-4">
        Welcome to CampusCrave!
      </h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Select your role:</h2>
        <div className="flex gap-4">
          {["Student", "Vendor", "Runner", "Admin"].map((role) => (
            <button
              key={role}
              onClick={() => handleRoleSelect(role)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedRole === role
                  ? "bg-[#f3730a] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <p className="text-base pt-3 text-[#60606e] tracking-tighter leading-5 text-center max-w-md">
        Join our campus food community. Order delicious meals, share surplus food, and earn rewards!
      </p>
      <div className="flex items-center justify-center p-4">
        <a
          href="/"
          className="px-5 py-3 bg-[#f3730a] text-white font-medium mb-4 shadow-sm hover:shadow-md rounded"
        >
          Go Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default SignIn;
