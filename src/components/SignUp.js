import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRole } from "../Utils/userRoleSlice";
import campuscravelandingpage from "../assets/campuscravelandingpage.png";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    registrationNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Registration Number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRoleSelect = (role) => {
    if (validateForm()) {
      setSelectedRole(role);
      dispatch(setRole(role));
      // After registration, redirect to login
      navigate("/login");
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
        Register for CampusCrave!
      </h1>

      <div className="mb-6 w-full max-w-md">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
        Already have an account?{" "}
        <a href="/login" className="text-[#f3730a] hover:underline">
          Login here
        </a>
      </p>
    </div>
  );
};

export default SignUp;
