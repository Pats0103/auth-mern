import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("/api/v1/users/register", {
      username,
      email,
      password,
    }).then((res) => {
      console.log(res);
      
      
    }
    ).catch((err) => {
      setError(err);
      console.log(err);
    }
    );
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center   ">
      <form onSubmit={onSubmit}>
        <div className="flex gap-3 flex-col">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="block  rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
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
            <button disabled={loading} className="border rounded-lg w-full  px-2 py-1 ring-2 ring-blue-300 hover:ring-blue-600 my-1">
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
          <div>
            <Link className="text-violet-500" to="/login">alreay register..?</Link>
          </div>
          <div>
            {error && <p className="text-red-500">something went wrong...</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
