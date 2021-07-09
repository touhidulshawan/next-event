import fs from "fs";
import { CommentsDataPath, ExtractData } from "../../../utils/Utils";

const handler = (req, res) => {
  const eventID = req.query.eventID;
  if (req.method === "POST") {
    try {
      const filePath = CommentsDataPath(eventID);
      let data = [];

      if (fs.existsSync(filePath)) {
        data = ExtractData(filePath);
      }

      const newComment = {
        id: new Date().toISOString(),
        email: req.body.email,
        name: req.body.name,
        comment: req.body.comment,
      };
      data.push(newComment);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).send({ message: "New comment created" });
    } catch (error) {
      res.status(406).send({ message: "Data not valid" });
    }
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
