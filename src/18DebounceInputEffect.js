import React, { useState, useEffect } from 'react';

const DebounceSerachuseEffect = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [data, setData] = useState([]);

  const tableData = [
    { id: 1, name: 'John Doe', age: 28, job: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', age: 34, job: 'Product Manager' },
    { id: 3, name: 'Alice Johnson', age: 25, job: 'Graphic Designer' },
    { id: 4, name: 'Bob Brown', age: 40, job: 'CEO' },
    { id: 5, name: 'Charlie Green', age: 32, job: 'Data Scientist' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setData(debouncedQuery 
        ?  tableData.filter(item => item.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
        :  tableData);
  }, [debouncedQuery]);

  return (
    <main>
      <h3 className="accordion-heading">Debounceing using useEffect</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by Name..."
      />
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse',margin:"10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {data.length ? data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.job}</td>
            </tr>
          )) : (
            <tr><td colSpan="4">No results found</td></tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default DebounceSerachuseEffect;
