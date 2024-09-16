"use client";
import { motion } from "framer-motion";

const ProductCard = ({ product, onClick }) => {
  // "New" kategorisine ait ürünlerin arka plan rengini belirleyin
  const isNewCategory = product.category === "new";

  return (
    <motion.div
      className={`product-card ${
        isNewCategory ? "bg-color_1" : ""
      } p-4 rounded-lg shadow-lg cursor-pointer flex flex-col relative`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ minHeight: "210px" }}
    >
      <div className="img flex justify-center items-center select-none">
        <img
          src={product.image}
          alt={product.title}
          className={`w-auto h-32 object-cover mb-2 ${
            isNewCategory ? "scale-150 absolute mb-0 mt-20" : ""
          }`}
        />
      </div>
      <div className="product-info flex justify-between items-center absolute inset-x-0 p-4 bottom-0">
        <h3 className="text-base font-bold select-none">{product.title}</h3>
        <p className="select-none">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
