import React, { useState } from "react";

const FilterMethodUseCase = () => {
  const [items] = useState([
    { id: 1, name: "FiterMethodUseCasele", type: "Fruit" },
    { id: 2, name: "Carrot", type: "Vegetable" },
    { id: 3, name: "Banana", type: "Fruit" },
    { id: 4, name: "Spinach", type: "Vegetable" },
  ]);

  const [filterType, setFilterType] = useState("Fruit");

  const filteredItems = items.filter(item => item.type === filterType);

  return (
    <main>
      <h3>Filtered Items</h3>
      <button onClick={() => setFilterType("Fruit")}>Show Fruits</button>
      <button onClick={() => setFilterType("Vegetable")}>Show Vegetables</button>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default FilterMethodUseCase;
