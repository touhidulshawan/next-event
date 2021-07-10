import { Connection } from "../db/Connection";

const handler = async (req, res) => {
  let client;
  try {
    client = await Connection();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed!" });
    return;
  }
  const db = client.db();

  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    try {
      await db.collection("newsLetters").insertOne({ email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "NewLetters subscription failed!" });
      return;
    }

    res.status(201).json({ message: "Thanks for subscribe our NewsLetter" });
  }
};

export default handler;
