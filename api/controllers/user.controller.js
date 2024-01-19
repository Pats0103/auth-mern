import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  if (!(username || password)) {
    throw new ApiError(400, "Username and password are required");
  }

  const existedUser = await User.findOne({ username });

  console.log(existedUser); 

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const user = await User.create({
    username,
    password,
  });

  return res.status(201).json(new ApiResponse(201, "User created",user)); 
});

export { registerUser };
