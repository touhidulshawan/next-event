import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@next-event.grndf.mongodb.net/newsLetters?retryWrites=true&w=majority`;

export const Connection = async () => {
  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return client;
};
