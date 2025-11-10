export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="mt-2 font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.price} Robux</p>
      <button 
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Buy
      </button>
    </div>
  );
}
