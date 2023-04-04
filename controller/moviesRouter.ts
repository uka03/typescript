import express, { Request, Response, Router } from "express";
import { getMovies } from "../service/moviesService";
// movieslastest;
const Movies: Router = express.Router();

Movies.get(
  "/movieslastest",
  async (req: Request, res: Response): Promise<void> => {
    let result: any = await getMovies(10);
    res.send(result);
  }
);

export default Movies;
