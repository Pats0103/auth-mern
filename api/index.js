import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors(

  {
    origin: "http://localhost:5173",
    credentials: true,
  }

));

const connectDB = async function () {
  await mongoose.connect("mongodb+srv://pats:qweiop@blog.jybvuvc.mongodb.net/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB Connected!"));
};

connectDB();

app.post("/api/auth/login", (req, res) => {
  res.json({email:req.body, pass:req.body});
});

app.listen(4000, () => {
  console.log(`http://localhost:3000`);
});
