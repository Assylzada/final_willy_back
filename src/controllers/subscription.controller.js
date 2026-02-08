import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// текущая директория этого файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import Subscription from join(__dirname, '../models/subscription.model.js');
export const subscribe = async (req, res) => {
  await Subscription.create({ email: req.body.email });
  res.json({ message: "Subscribed successfully ✨" });
};
