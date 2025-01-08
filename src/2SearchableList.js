import React, { useState } from "react";

const SearchableList = () => {
  const data = Array.from({ length: 100 }, (_, i) => `${i*3125} ade`);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    const updatedData = data.filter((item) =>
      item.toLowerCase().includes(searchQuery)
    );
    setFilteredData(updatedData);
  };

  return (
    <>
      <h3>Searchable List</h3>
      <input
        onChange={handleSearchChange}
        value={query}
        placeholder="Search..."
      />
       <div style={{height:"200px",width:"400px",overflowY: "scroll"}}>
      {filteredData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
    </>
  );
};

export default SearchableList;
