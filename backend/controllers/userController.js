import asyncHandler from "express-async-handler";

// desc:   Auth user / set token
// route:  POST   /api/users   Register a user
// access: public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export { authUser };