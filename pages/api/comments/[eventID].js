import { Connection } from "../db/Connection";

const handler = async (req, res) => {
  const eventID = req.query.eventID;
  const client = await Connection();
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

    await db.collection("comments").insertOne(newComment);
    res.status(201).json({ message: "New comment created" });
    client.close();
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
