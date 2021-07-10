import { Connection } from "../db/Connection";

const handler = async (req, res) => {
  const eventID = req.query.eventID;

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

    const client = await Connection();
    const db = client.db();

    await db.collection("comments").insertOne(newComment);
    res.status(201).json({ message: "New comment created" });
    client.close();
  }

  if (req.method === "GET") {
    try {
      const filePath = CommentsDataPath(eventID);
      let data = null;
      if (fs.existsSync(filePath)) {
        const data = ExtractData(filePath);
        res.status(200).json({ comments: data });
      } else {
        res.status(404).json({ comments: undefined });
      }
    } catch (error) {
      res.status(404).send({ message: "Data not found" });
    }
  }
};

export default handler;
