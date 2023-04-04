import movieModel from "../model/movieModel";

type awardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type imdbType = {
  rating: number;
  votes: number;
  id: number;
};
type viewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type tomatoesType = { viewer: viewerType; lastUpdated: Date };

interface movieType {
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
  awards: awardsType;
  lastupdated: string;
  year: number;
  imdb: imdbType;
  countries: string[];
  type: string;
  tomatoes: tomatoesType;
}

export async function getMovies(limit: number): Promise<movieType[] | null> {
  let result: movieType[] | null = await movieModel
    .find({
      poster: { $exists: true },
      year: { $exists: true },
    })
    .sort({ year: -1 })
    .limit(limit);

  return result;
}
