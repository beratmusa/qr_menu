"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const MenuHeader = () => {
  // Seçili kategori state'i. Her zaman "new" olarak başlatıyoruz.
  const [selected, setSelected] = useState("new");

  // Menü başlıklarını tanımlıyoruz
  const menuItems = [
    { id: "new", title: "New" },
    { id: "ice coffee", title: "Ice Coffee" },
    { id: "hot coffee", title: "Hot Coffee" },
    { id: "special drinks", title: "Special Drinks" },
    { id: "tea", title: "Tea" },
    { id: "dessert", title: "Dessert" },
  ];

  // Menü itemine tıklama işlemi
  const handleClick = (id) => {
    // Sayfa içeriğine kaydır
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Menü başlığını yatay olarak kaydır
    setTimeout(() => {
      const item = document.getElementById(`menu-${id}`);
      if (item) {
        item.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }, 500); // Menü kaydırma animasyonunun süresi (500ms) ile eşleşmelidir

    // Seçili kategori state'ini güncelle
    setSelected(id);
  };

  return (
    <div className="menu-header sticky top-0 bg-color_3 z-50 p-2 shadow">
      <div className="menu-items flex overflow-x-auto whitespace-nowrap font-ubuntu text-2xl p-3">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            id={`menu-${item.id}`} // Menü başlığına unique bir id veriyoruz
            className={`menu-item px-6 select-none py-2 mr-6 rounded-lg cursor-pointer ${
              item.id === "new" ? "bg-color_1" : "bg-color_default"
            }`} // "New" her zaman belirli bir renk alır, diğerleri varsayılan renk alır
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
