import express, { Request, Response, Router } from "express";
import { getIdMovies, getMovies, getMoviesId } from "../service/moviesService";
// movieslastest;
const Movies: Router = express.Router();

Movies.get("/movies", async (req: Request, res: Response): Promise<void> => {
  const id: string | any = req.query.id;
  const limit: number | any = req.query.limit;
  if (id != undefined) {
    let result: any = await getIdMovies(id);
    res.send(result);
  }
  if (limit) {
    let result: any = await getMovies(limit);
    res.send(result);
  }
});

Movies.get(
  "/movies_ids",
  async (req: Request, res: Response): Promise<void> => {
    const result = await getMoviesId();
    res.send(result);
  }
);

export default Movies;
