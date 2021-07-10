import { Connection } from "../db/Connection";

const handler = async (req, res) => {
  const client = await Connection();
  const db = client.db();

  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    await db.collection("newsLetters").insertOne({ email });
    client.close();

    res.status(201).send({ message: "email created" });
  }
};

export default handler;
