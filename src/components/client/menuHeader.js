"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const MenuHeader = () => {
  const [selected, setSelected] = useState(null);

  // Menü başlıklarını doğrudan burada tanımlayın
  const menuItems = [
    { id: "new", title: "New" },
    { id: "ice coffee", title: "İce Coffee" },
    { id: "hot coffee", title: "Hot Coffee" },
    { id: "special drinks", title: "Special Drinks" },
    { id: "tea", title: "Tea" },
    { id: "dessert", title: "Dessert" },
  ];

  const handleClick = (id) => {
    setSelected(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu-header sticky top-0 bg-color_3 z-50 p-2">
      <div className="menu-items flex overflow-x-auto whitespace-nowrap font-salsa text-2xl p-3">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className={`menu-item px-6 select-none py-2 mr-6 rounded-lg cursor-pointer ${
              selected === item.id ? "bg-color_1" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuHeader;
