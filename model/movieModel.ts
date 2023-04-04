import { model, Schema } from "mongoose";
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

const moviesSchema = new Schema<movieType>({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: Object,
  lastupdated: String,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
});

const movieModel = model<movieType>("movie", moviesSchema);

export default movieModel;
