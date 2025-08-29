import React, { useEffect, useState } from "react";
import Home from "./Home";

const SecondHeader = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("Drinks");
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    fetch("https://deepnetsoft-7bn8.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((err) => console.error("Error fetching menus:", err));
  }, []);

  return (
    <>
      <div className="second-header">
        <div>
          {menus.map((menu, index) => (
            <button
              key={menu._id}
              className={activeIndex === index ? "second" : ""} 
              onClick={() => {
                setSelectedMenu(menu.name);
                setActiveIndex(index);
              }}
            >
              {menu.name}
            </button>
          ))}
        </div>
      </div>

      <Home selectedMenu={selectedMenu} />
    </>
  );
};

export default SecondHeader;
