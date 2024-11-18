import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { date } = req.query;
  const directoryPath = path.join(process.cwd(), 'images', date);
  
  try {
    const files = fs.readdirSync(directoryPath);
    const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Unable to read directory' });
  }
}