import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// текущая директория этого файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// импорт модели относительно текущей директории
import Contact from join(__dirname, '../models/contact.model.js');

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message saved successfully", contact });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
