import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Theater from "./controller/theaterRouter";
import "./config/mongodbConfig";
dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(Theater);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
