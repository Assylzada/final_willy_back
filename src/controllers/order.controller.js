import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// текущая директория этого файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// импорт модели относительно текущей директории
import Order from join(__dirname, '../models/order.model.js');

export const createOrder = async (req, res, next) => {
  try {
    const { name, email, product, quantity, address } = req.body;

    if (!name || !email || !product || !quantity || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const order = await Order.create({
      name,
      email,
      product,
      quantity,
      address,
    });

    res.status(201).json({
      message: "Order saved successfully",
      order,
    });
  } catch (err) {
    next(err);
  }
};
