import { Connection } from "../db/Connection";

const handler = async (req, res) => {
  const eventID = req.query.eventID;
  let client;

  try {
    client = await Connection();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database failed!" });
  }

  const db = client.db();

  if (req.method === "POST") {
    const { email, name, comment } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    const newComment = { email, name, comment, eventID };

    try {
      await db.collection("comments").insertOne(newComment);
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Comment failed to create" });
    }

    res.status(201).json({ message: "New comment created" });
  }

  if (req.method === "GET") {
    try {
      const documents = await db
        .collection("comments")
        .find({ eventID: eventID })
        .sort({ _id: -1 })
        .toArray();
      res.status(200).json({ comments: documents });
      client.close();
    } catch (error) {
      res.status(404).send({ message: "Data not found" });
    }
  }
};

export default handler;
