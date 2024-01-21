import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../features/user/userSlice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await axios.post("/api/v1/users/login", {
        email,
        password,
      });
      console.log(res);
      dispatch(signInSuccess(res.data));
        navigate("/");
    } catch (err) {
      dispatch(signInFailure(err));

        console.log(err.message);
    }
  };

  // ... rest of your component
  return (
    <div className="flex justify-center items-center   ">
      <form onSubmit={onSubmit}>
        <div className="flex gap-3 flex-col">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              disabled={loading}
              className="border rounded-lg w-full  px-2 py-1 ring-2 ring-blue-300 hover:ring-blue-600 my-1"
            >
              {loading ? "loading..." : "Login"}
            </button>
          </div>
          <div>
            <Link to="/register" className="text-violet-500">
              alreay register..?
            </Link>
          </div>
          <div>{error && <p className="text-red-500">went wrong</p>}</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
