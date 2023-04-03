import exp from "constants";
import express, { Express, Request, Response, Router } from "express";
import { getTheater } from "../service/theaterService";

const Theater: Router = express.Router();

Theater.get("/theater", async (req: Request, res: Response) => {
  let id: string = req.query.id as string;
  let result: any = await getTheater(id);
  res.send(result);
});

export default Theater;
