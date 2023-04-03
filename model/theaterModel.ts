import { model, Schema } from "mongoose";

type geoType = {
  type: string;
  coordinates: number[];
};
type addressType = {
  street1: string;
  city: string;
  state: string;
  zipcode: string;
};

type locationType = {
  address: addressType;
  geo: geoType;
};

interface Theater {
  theaterId: number;
  location: locationType;
}

const theaterSchema = new Schema<Theater>({
  theaterId: Number,
  location: {
    address: {
      street1: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: { type: String, coordinates: [Number] },
  },
});

const theaterModel = model<Theater>("Theater", theaterSchema);

export default theaterModel;
