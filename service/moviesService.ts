import movieModel from "../model/movieModel";

type AwardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type ImdbType = {
  rating: number;
  votes: number;
  id: number;
};
type ViewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type TomatoesType = { viewer: ViewerType; lastUpdated: Date };

interface MovieType {
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated?: string;
  awards: AwardsType;
  lastupdated: string;
  year: number;
  imdb: ImdbType;
  countries: string[];
  type: string;
  tomatoes: TomatoesType;
}

export async function getMovies(limit: number): Promise<MovieType[] | null> {
  let result: MovieType[] | null = await movieModel
    .find({
      poster: { $exists: true },
      year: { $exists: true },
    })
    .skip(limit - 8)
    .limit(24)
    .select({ _id: 1, poster: 1, title: 1 });

  return result;
}

export async function getIdMovies(id: string): Promise<MovieType | null> {
  let result: MovieType | null = await movieModel.findOne({ _id: id });
  return result;
}
