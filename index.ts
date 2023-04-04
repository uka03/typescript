import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Theater from "./controller/theaterRouter";
import "./config/mongodbConfig";
import cors from "cors";
import Movies from "./controller/moviesRouter";
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(Theater);
app.use(Movies);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
