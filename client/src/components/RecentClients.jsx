import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import SearchBar from "./SearchBar";

export default function RecentClients({ clients }) {
  const [search, setSearch] = useState('');

  // Filter clients by search term (case-insensitive)
  const filteredClients = clients?.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card p-4 shadow mb-4">
      <div className="d-flex align-items-center mb-3">
        <FaUserFriends size={20} className="text-success me-2" />
        <h4 className="mb-0">Recent Clients</h4>
      </div>

      <SearchBar
        placeholder="Search clients..."
        searchTerm={search}
        onSearch={setSearch}
      />

      {(!filteredClients || filteredClients.length === 0) ? (
        <p className="text-muted">No recent clients found.</p>
      ) : (
        <>
          <ul className="list-group list-group-flush">
            {filteredClients.map((c) => (
              <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                <Link
                  to={`/clients/${c.id}`}
                  className="text-decoration-none fw-semibold text-dark"
                >
                  {c.name}
                </Link>
                {c.createdAt && (
                  <small className="text-muted">{new Date(c.createdAt).toLocaleDateString()}</small>
                )}
              </li>
            ))}
          </ul>

          <div className="text-end mt-2">
            <Link to="/clients" className="btn btn-sm btn-outline-primary w-100">
              View All Clients
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
