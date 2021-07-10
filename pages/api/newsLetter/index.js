import { Connection } from "../db/Connection";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    const client = await Connection();
    const db = client.db();

    await db.collection("emails").insertOne({ email });
    client.close();

    res.status(201).send({ message: "email created" });
  }
};

export default handler;
