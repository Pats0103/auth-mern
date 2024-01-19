import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
   
//import routes

import userRouter from "./routes/user.route.js";

//use routes

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
