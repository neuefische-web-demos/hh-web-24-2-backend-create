import mongoose from "mongoose";

const { Schema } = mongoose;

const jokeSchema = new Schema({
  joke: { type: String, required: true, minLength: 5 },
});

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema, 'jokes');

export default Joke;
