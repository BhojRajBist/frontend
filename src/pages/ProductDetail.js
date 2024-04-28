import React, { useState, useEffect } from 'react';

const ProductDetail = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            {product.lat && product.lng && (
              <p>
                Location: Lat {product.lat}, Lng {product.lng}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;

