import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import dotenv from "dotenv";
dotenv.config();


import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { ValidateReq } from "./ValidateReq.js";
import jwt from "jsonwebtoken";
import { UserMiddleware } from "./middleware.js";
import { MONGO_URL, JWT_PASSWORD } from "./config.js";
import { random } from "./utils.js";




mongoose.connect(MONGO_URL)



const app = express();

app.use(express.json());

app.post("/api/v1/signup", ValidateReq, async (req, res) => {
  const { username, email, password } = req.body;



  try {
    const HashPassword = await bcrypt.hash(password, 6);
    await UserModel.create({
      username: username,
      email: email,
      password: HashPassword,
    })
    return res.status(201).json({
      message: "user has been sign up"
    })
  } catch (error: any) {
    if (error.code === 11000) {

      return res.status(400).json({
        message: 'User already exists with this email or username'
      })
    }

    return res.status(500).json({
      message: "Error signing up",
      error: error.message
    })
  }

});


app.post("/api/v1/signin", async (req, res) => {
  const { identifier, password } = req.body;


  try {
    const IsEmail = identifier.includes("@");
    const dbQuery = IsEmail ? { email: identifier } : { username: identifier };
    const user = await UserModel.findOne(dbQuery)

    if (!user) {
      return res.status(403).json({
        message: "creds don't match"
      })

    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        message: "Incorrect credentials"
      })
    }

    const token = jwt.sign({
      id: user._id
    }, JWT_PASSWORD)

    return res.status(200).json({
      token,
      message: "Signed in successfully!"
    });

  } catch (err: any) {
    return res.status(500).json({
      message: "Server error during signin",
      error: err.message
    })
  }


});


app.post("/api/v1/content", UserMiddleware, async (req, res) => {
  const { title, link } = req.body;

  await ContentModel.create({
    title: title,
    link: link,
    userId: (req as any).userId,
    tags: []
  })
  return res.json({
    message: "Content has been created"
  })
});


app.get("/api/v1/content", UserMiddleware, async (req, res) => {
  const userId = (req as any).userId;
  const Content = await ContentModel.find({
    userId: userId
  }).populate("userId", "username")

  res.json({
    Content: Content
  })
});


app.delete("/api/v1/content", UserMiddleware, async (req, res) => {
  const contentId = req.body.contentId;

  await ContentModel.deleteMany({
    _id: contentId,
    userId: (req as any).userId
  })

  res.json({
    message: "Content has been deleted"
  })
});


app.post("/api/v1/brain/share", UserMiddleware, async (req, res) => {
  const share = req.body.share;
  

  try {
    if (share) {

      const existingLink = await LinkModel.findOne({ 
        userId: (req as any).userId
       })

      if (existingLink) {
        return res.json({
          hash: existingLink.hash,
          message: "Existing share link retrieved"
        })
      }

      const hash = random(10)
      await LinkModel.create({
        userId: (req as any).userId,
        hash: hash
      })
      res.json({
        hash: hash,
        message: "New share link generated"
      })
    }
    else {
      await LinkModel.deleteOne({
        userId: (req as any).userId
      })
      res.json({
        message: "Remove sharable link "
      })
    }

  } catch (error: any) {
    return res.status(500).json({
      message: "Server error updating share link",
      error: error.message
    });
  }




});


app.get("/api/v1/brain/:shareLink" , async (req, res) => {
  const hash = req.params.shareLink as string;

  const link = await LinkModel.findOne({
    hash: hash
  })

  if (!link) {
    res.status(411).json({
      message: "Sorry Invalid Input"
    })
    return
  }

  const content = await ContentModel.findOne({
    userId: (link as any).userId
  })

  const User = await UserModel.findOne({
    _id: link.userId
  })

  if (!User) {
    res.status(404).json({
      message: "Invalid link"
    })
    return
  }

  res.json({
    User: User.username,
    content: content
  })


});




app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

