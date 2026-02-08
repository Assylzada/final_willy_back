import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// текущая директория этого файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import Ticket from join(__dirname, '../models/ticket.model.js');
export const createTicket = async (req, res) => {
  await Ticket.create(req.body);
  res.status(201).json({ message: "Golden Ticket registered" });
};
