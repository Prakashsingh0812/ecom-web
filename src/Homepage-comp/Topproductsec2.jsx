import React, { useState, useEffect } from 'react';

// Example ProductCard component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-60 md:w-72 lg:w-80 xl:w-96 mx-auto mb-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex items-center mb-4">
        <span className="text-yellow-500 mr-1">{product.rating} ★</span>
        <span className="text-gray-500">({product.reviews} reviews)</span>
      </div>
      <button
        onClick={() => alert(`Buying ${product.name}`)}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

// Main TopProducts component
const TopProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
    fetch('/api/products') // Replace with your actual backend endpoint
      .then((response) => response.json())
      .then((data) => {
        // Limiting the number of products to 6-7
        setProducts(data.slice(0, 7));
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default TopProducts;
