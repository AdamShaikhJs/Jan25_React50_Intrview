import React, { useState } from 'react';
// import './style.css';

const users = [
  { id: 1, name: 'Alice Johnson', email: 'alice@gmail.com', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@gmail.com', status: 'inactive' },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@gmail.com',
    status: 'active',
  },
  { id: 4, name: 'Diana Prince', email: 'diana@gmail.com', status: 'inactive' },
];

export default function InterviewTask() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('');
  const [filteredData, setFilteredData] = useState(users);

  const handleFilter = (statusFilter) => {
    let result = users;

    if (statusFilter) {
      result = result.filter((user) => user.status === statusFilter);
    }

    if (query) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
      );
    }
    setFilteredData(result);
  };

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    handleFilter(status);
  };

  const handleStatusChange = (statusFilter) => {
    setStatus(statusFilter);
    handleFilter(statusFilter);
  };

  return (
    <main>
      <h3 className="accordion-heading">Search input using handleSearch (onChange)</h3>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
