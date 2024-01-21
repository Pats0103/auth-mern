import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  if (!(username || password || email)) {
    throw new ApiError(400, "Username and email and password are required");
  }

  const existedUser = await User.findOne({ username });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const { password: hashedPassword, ...restUser } = user._doc;

  return res.status(201).json(new ApiResponse(201, "User created", restUser));
});

const loginUser = asyncHandler(async (req, res,next) => {
  const { email, password } = req.body;

  if (!(email || password)) {
   return res.status(400).json(ApiError(400, "Username and password are required"))
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new  ApiError(404, "Invalid password & email");
  }

  const isMatch = bcryptjs.compareSync(password, user.password);

  if (!isMatch) {
    throw new  ApiError(401, "Invalid password and email");
  }

  const { password: hashedPassword, ...restUser } = user._doc;

  const access_token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  const options = {
    expires: new Date(Date.now() + 3600000), // would expire after 7 days
    httpOnly: true, // Optional, to prevent client-side JavaScript from accessing the cookie
  };

  return res
    .status(200)
    .cookie("access_token", access_token, options)
    .json(new ApiResponse(200, "User logged in", restUser));
});

export { registerUser, loginUser };
