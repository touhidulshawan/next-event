import { MongoClient } from "mongodb";

export const Connection = async (url) => {
  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return client;
};
