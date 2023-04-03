import mongoose from "mongoose";

mongoose.connect(`${process.env.MONGODB_CONNECT_URL}`).then(() => {
  console.log("connected");
});
