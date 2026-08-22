import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config();


import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { UserModel } from "./db.js";

const MONGO_URL  = process.env.MONGO_URL as string;

mongoose.connect(MONGO_URL)



const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  const {username, email, password} = req.body;

  const HashPassword = await bcrypt.hash(password, 6);

  await  UserModel.create({
    username: username,
    email: email,
    password: HashPassword,
  })

  res.json({
    message: "Profile has been created"
  })

});
 

app.post("/api/v1/signin", (req, res) => {
  
});


app.post("/api/v1/content", (req, res) => {
  
});


app.get("/api/v1/content", (req, res) => {
  
});


app.delete("/api/v1/content", (req, res) => {
  
});



app.get("/api/v1/brain/ :shareLink", (req, res) => {
  
});




app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});