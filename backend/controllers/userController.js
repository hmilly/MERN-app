import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// desc:   Register a user / set token
// route:  POST   /api/users
// access: Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// desc:   Authenticate a user and get a token
// route:  POST   /api/users/auth
// access: Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

// desc:   Logout a user and clear cookie
// route:  POST   /api/users/logout
// access: Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

// desc:   Get user profile
// route:  GET   /api/users/profile
// access: Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// desc:   update user profile
// route:  PUT   /api/users/profile
// access: Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
