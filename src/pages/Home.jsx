import React, { use } from "react";
import { useEffect, useState } from "react";

const Home = ({ selectedMenu }) => {
  const [Items, setItems] = React.useState([]);
  useEffect(() => {
    if (selectedMenu) {
      fetch(`https://deepnetsoft-7bn8.onrender.com/api/menu/${selectedMenu}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched items for", selectedMenu, ":", data);
          setItems(data);
        })
        .catch((err) => console.error("Error fetching items:", err));
    }
  }, [selectedMenu]);

  // console.log(menuItems[0].name);

  return (
    <div className="home">
      <div className="inner-home">
        <img src="../Images/food3.png" alt="" className="first" />
        <img src="../Images/food2.png" alt="" className="second" />
        <img src="../Images/food1.png" alt="" className="third" />
        <h1>{Items[0]?.name}</h1>

        <div className="food-items">
          {Items[0]?.menuItems?.map((item) => (
            <div className="food-item" key={item.itemId}>
              <img src={item.url} alt={item.itemName} className="food-img" />

             <div>
               <h2>{item.itemName}</h2>
               <p>{item.desc}</p>
             </div>

              <h3>₹ {item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
