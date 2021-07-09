import fs from "fs";
import { CommentsDataPath, ExtractData } from "../../../utils/Utils";

export const getCommentData = () => {
  const filePath = CommentsDataPath();
  const data = ExtractData(filePath);
  return data;
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const filePath = CommentsDataPath();
    const data = ExtractData(filePath);

    const newComment = {
      id: new Date().toISOString(),
      email: req.body.email,
      name: req.body.name,
      comment: req.body.comment,
    };
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).send({ message: "New comment created" });
  } else {
    res.status(500).send({ message: "something gone wrong" });
  }
};

export default handler;
