import fs from "fs";
import { NewLetterDataPath, ExtractData } from "../../../utils/Utils";

const handler = (req, res) => {
  if (req.method === "POST") {
    const filePath = NewLetterDataPath();
    const data = ExtractData(filePath);

    const newNewsLetterData = {
      id: new Date().toISOString(),
      email: req.body.email,
    };
    data.push(newNewsLetterData);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).send({ message: "email created" });
  }
};

export default handler;