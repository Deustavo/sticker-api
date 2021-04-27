import { Schema, model } from "mongoose";

const AdvertismentSchema = new Schema({
  name: { type: String },
  description: { type: String },
  ad_creator: { type: String },
  image: { type: String },
});

const AdvertismentModel = model("Advertisment", AdvertismentSchema);

export default AdvertismentModel;
