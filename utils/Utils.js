import fs from "fs";
import path from "path";

export const NewLetterDataPath = () => {
  return path.join(process.cwd(), "data", "NewsLetterEmail.json");
};

export const ExtractData = (filePath) => {
  const dataFile = fs.readFileSync(filePath);
  const data = JSON.parse(dataFile);
  return data;
};