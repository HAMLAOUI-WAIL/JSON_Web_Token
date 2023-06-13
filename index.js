import express from "express";

// if Route does not exist
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";

import mainRouter from "./routes/main.js"

import dotenv from "dotenv"
dotenv.config()


const app = express() 

// middleware
app.use(express.static('./public')); 
app.use(express.json())

app.use("/api",mainRouter)

app.use(errorHandlerMiddleware);
app.use(notFound);


const port = process.env.PORT || 3000;

// const start:()=> Promise<void>
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();