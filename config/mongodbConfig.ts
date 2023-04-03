import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(`${process.env.MONGODB_CONNECT_URL}`).then(() => {
  console.log("connected");
});

export default mongoose.connection;
