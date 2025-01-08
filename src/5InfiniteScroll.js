import React, { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const initialData = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  // Simulate loading more data
  const loadMoreData = () => {
    if (loading) return; // Prevent multiple requests while loading
    setLoading(true);
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, i) => `Item ${data.length + i + 1}`);
      setData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000); // Simulate an API request with a delay
  };

  // Handle scroll events
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    // Check if the user has scrolled to the bottom of the container
    if (scrollHeight - scrollTop === clientHeight && !loading) {
      loadMoreData();
    }
  };

  return (
    <div
      onScroll={handleScroll}
      style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #ddd",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScroll;
