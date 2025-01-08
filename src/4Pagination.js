import React, { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // Sample data

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(data.length / perPage); //Math.ceil-rounded up
  const currentItems = data.slice((currentPage - 1) * perPage,currentPage * perPage);
  const handlePageChange = (num) => setCurrentPage(num);

  return (
    <div className="accordion">
      <h3 className="accordion-heading">Pagination Example</h3>

      <div className="accordion-heading">
        {currentItems.map((item, index) => (
          <p key={index} style={{ padding: "8px 0" }}>
            💈 {item}
          </p>
        ))}
      </div>

      <div className="dflex">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === index + 1 ? "bold" : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <pre>
        <code>
          {`
const [currentPage, setCurrentPage] = useState(1);
const perPage = 5;

// Calculate total pages
const totalPages = Math.ceil(data.length / perPage);
const currentItems = data.slice((currentPage - 1) * perPage, currentPage * perPage);

// Handle page change
const handlePageChange = (num) => setCurrentPage(num);
            `}
        </code>
      </pre>
    </div>
  );
}

export default Pagination;
