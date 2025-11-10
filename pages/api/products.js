export default function handler(req, res) {
  const products = [
    { id: 1, name: "Robux 1000", price: "1000", image: "/images/robux.png" },
    { id: 2, name: "Robux 5000", price: "5000", image: "/images/robux.png" },
  ];
  res.status(200).json(products);
}
