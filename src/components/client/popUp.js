"use client";
import { AnimatePresence, motion } from "framer-motion";

const PopUp = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="popup-content select-none"
          onClick={(e) => e.stopPropagation()} // İçeriğe tıklanıldığında kapanmasın
        >
          <div className="flex justify-center items-center shadow-md w-full">
            <img
              className=" h-60 mb-2"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="p-5">
            <p className="p-3 text-center ">{product.description}</p>
            <p className="bg-color_1 rounded-lg p-2 px-3 inline-block font-semibold mt-3">
              {product.category_popUp}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUp;
