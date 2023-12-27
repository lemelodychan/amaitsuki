import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.resolve('../data.json');

// Enable CORS for all routes
res.setHeader('Access-Control-Allow-Credentials', true);
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
res.setHeader(
  'Access-Control-Allow-Headers',
  'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
);

if (req.method === 'OPTIONS') {
  res.status(200).end();
  return;
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { uid, likeCount } = req.body;

        let jsonData = {};
        try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        jsonData = JSON.parse(data);
        } catch (error) {
        console.error('Error reading data file:', error);
        }

        jsonData[uid] = likeCount;

        try {
        await fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), 'utf-8');
        } catch (error) {
        console.error('Error writing data file:', error);
        }

        res.json({ success: true });
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}