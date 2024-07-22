"use client";

import CustomButton from "@/component/button";
import HomePageContainer from "@/component/homePageContainer";
import MyProductCard from "@/component/MyProductCard";
import ProductCard from "@/component/productCard";
import { useEffect, useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "product1",
    describe: "product1",
    price: 1,
    img: "/images.jpg",
  },
  {
    id: 2,
    name: "product2",
    describe: "product2",
    price: 2,
    img: "/images.jpg",
  },
  {
    id: 3,
    name: "product3",
    describe: "product3",
    price: 3,
    img: "/images.jpg",
  },
  {
    id: 4,
    name: "product4",
    describe: "product4",
    price: 4,
    img: "/test.jpg",
  },
  {
    id: 5,
    name: "product5",
    describe: "product5",
    price: 5,
    img: "/test.jpg",
  },
  {
    id: 6,
    name: "product6",
    describe: "product6",
    price: 6,
    img: "/test.jpg",
  },
];


const ProductList = ({ products }: any) => {
  return (<>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product: any) => (
        <MyProductCard
          key={product.id}
          id={product.id}
          title={product.product_name}
          desc={product.description}
          price={product.price}


        />
      ))}
    </div>

  </>

  );
};


export default function Home() {
  // const [test, setTest] = useState(0);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:3000/products/");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Failed to fetch products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);










  return (
    <main>
      {/* <button
        onClick={() => setTest((prev) => prev + 1)}
        style={{
          margin: "10px",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
        }}
      >
        {test}
      </button> */}
      <HomePageContainer />
      {/* <CustomButton /> */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            desc={product.describe}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>


      <ProductList products={products} />;
    </main>
  );
};