"use client";

import products from "@/data/product.json"; // JSON dosyasını import ettik
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PopUp from "./popUp";
import ProductCard from "./productCard";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Ürünleri kategorilere göre gruplandırıyoruz
    const groupedCategories = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});

    setCategories(groupedCategories);
  }, []);

  return (
    <div className="bg-color_3">
      {/* Kategorilere göre section'lar */}
      {Object.keys(categories).map((category) => (
        <motion.div
          key={category}
          id={category} // Kategoriye göre id ekliyoruz
          className="product-list grid grid-cols-2 gap-4 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="col-span-2 text-2xl font-bold mb-4">{category}</h2>
          {categories[category].map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </motion.div>
      ))}

      {/* Pop-up */}
      {selectedProduct && (
        <PopUp
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
