import { cart } from "../../utils/db";

export default function handler(req, res) {
  if(req.method === "POST") {
    const product = req.body;
    cart.push(product);
    return res.status(200).json({ message: "Added to cart", cart });
  }

  if(req.method === "GET") {
    return res.status(200).json(cart);
  }
}
