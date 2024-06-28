import express from "express";

/**
 * 
 * Route spliting - MVC
 * router.get
 * router.post
 * 
 */
import userRouter from "./routes/user.js"

import {config} from "dotenv"

export const app = express();

config({
    path: "./data/config.env",
});

// this will be used to catch json file from req.body.
app.use(express.json());
app.use("/users",userRouter);

app.get("/", (req, res) => {
    res.send("Good morning. <br> Lets Get Started...");
});


