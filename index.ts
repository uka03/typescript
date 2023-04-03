import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Movie from "./controller/movieRouter";
import "./config/mongodbConfig";
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
console.log(process.env.MONGODB_CONNECT_URL);
app.use(Movie);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
