// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Sever is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB Connection Failed, ERROR: ${err}`);
  });

/*
import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

// IIFE Function- Immediately invoking  function expression
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", () => {
        console.log("ERR: ", error);
        throw error;
        
    })

    app.listen(process.env.PORT, () => {
        console.log(`Listening at port ${process.env.PORT}`);
        
    })


  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();

*/
