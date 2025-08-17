import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({ platform: String, url: String });

const userLinks = new mongoose.Schema({
  user: String,
  urls: [linkSchema],
});

const Links = mongoose.models.Links || mongoose.model("Links", userLinks);

export default Links;
