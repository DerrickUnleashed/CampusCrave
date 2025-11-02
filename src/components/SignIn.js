import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRole } from "../Utils/userRoleSlice";
import campuscravelandingpage from "../assets/campuscravelandingpage.png";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    registrationNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration Number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRoleSelect = (role) => {
    if (validateForm()) {
      setSelectedRole(role);
      dispatch(setRole(role));
      // Navigate based on role
      if (role === "Student") {
        navigate("/home");
      } else if (role === "Runner") {
        navigate("/runner-dashboard");
      } else if (role === "Admin") {
        navigate("/admin-dashboard");
      } else if (role === "Vendor") {
        navigate("/vendor-dashboard");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen mt-40 ">
      <img
        src={campuscravelandingpage}
        alt="CampusCrave"
        className="w-auto mt-2 h-[40vh] mb-3"
      />
      <h1 className="text-[#282c3f] font-extrabold text-2xl tracking-tighter leading-7 mb-4">
        Welcome to CampusCrave!
      </h1>

      <div className="mb-6 w-full max-w-md">
        <form className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          
        </form>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4">Select your role:</h2>
        <div className="flex gap-4">
          {["Student", "Runner", "Vendor", "Admin"].map((role) => (
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
        Don't have an account?{" "}
        <a href="/signup" className="text-[#f3730a] hover:underline">
          Sign up here
        </a>
      </p>
      <p className="text-base pt-3 text-[#60606e] tracking-tighter leading-5 text-center max-w-md">
        Join our campus food community. Order delicious meals, share surplus food, and earn rewards!
      </p>
      <div className="flex items-center justify-center p-4">
        <a
          href="/"
          className="px-5 py-3 bg-[#f3730a] text-white font-medium mb-4 shadow-sm hover:shadow-md rounded"
        >
          Go Back to Landing Page
        </a>
      </div>
    </div>
  );
};

export default SignIn;
