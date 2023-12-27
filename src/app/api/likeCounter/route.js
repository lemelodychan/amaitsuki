// src/app/api/likeCounter/route.js

import fs from 'fs/promises';
import path from 'path';
import nc from 'next-connect';

const handler = nc();

const DATA_FILE = path.resolve(__dirname, '../../data.json');

handler.get(async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const jsonData = JSON.parse(data);
    const likeCount = jsonData.likeCount || 0;
    res.status(200).json({ success: true, likeCount });
  } catch (error) {
    console.error('Error handling GET request:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

handler.post(async (req, res) => {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    const jsonData = JSON.parse(data);
    jsonData.likeCount = (jsonData.likeCount || 0) + 1;

    await fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), 'utf8');

    res.status(200).json({ success: true, updatedCount: jsonData.likeCount });
  } catch (error) {
    console.error('Error handling POST request:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

export default handler;
