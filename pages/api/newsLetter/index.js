import { Connection } from "../db/Connection";
import dotenv from "dotenv";
dotenv.config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@next-event.grndf.mongodb.net/newsLetters?retryWrites=true&w=majority`;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    const client = await Connection(url);
    const db = client.db();

    await db.collection("emails").insertOne({ email });

    res.status(201).send({ message: "email created" });
  }
};

export default handler;
