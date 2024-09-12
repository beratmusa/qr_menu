"use client";
import { motion } from "framer-motion";

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      className="product-card border rounded-lg p-4 shadow-md"
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="img flex justify-center items-center select-none">
        <img
          src={product.image}
          alt={product.title}
          className="w-auto h-32 object-cover mb-2"
        />
      </div>
      <div className="product-info flex justify-between items-center">
        <h3 className="text-base font-bold select-none">{product.title}</h3>
        <p className="select-none">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
