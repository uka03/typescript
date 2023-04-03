import exp from "constants";
import express, { Express, Request, Response, Router } from "express";

const Movie: Router = express.Router();

Movie.get("/", (req: Request, res: Response) => {
  res.send("HEllo world");
});

export default Movie;
