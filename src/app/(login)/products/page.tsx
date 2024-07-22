"use client";
import { useState, useEffect } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/products/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Gelen verileri state'e kaydediyoruz
          setLoading(false); 
        } else {
          console.error('Failed to fetch products');
          setLoading(false); 
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
