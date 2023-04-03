import theaterModel from "../model/theaterModel";

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
type theaterType = {
  theaterId: number;
  location: locationType;
};

export async function getTheater(id: string): Promise<theaterType | null> {
  let result: theaterType | null = await theaterModel.findById({ _id: id });
  return result;
}
