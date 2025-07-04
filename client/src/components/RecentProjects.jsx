import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import SearchBar from "./SearchBar";

export default function RecentProjects({ projects }) {
  const [search, setSearch] = useState('');

  // Filter projects by search term (case-insensitive)
  const filteredProjects = projects?.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card p-4 shadow mb-4">
      <div className="d-flex align-items-center mb-3">
        <FaFolderOpen size={20} className="text-primary me-2" />
        <h4 className="mb-0">Recent Projects</h4>
      </div>

      <SearchBar
        placeholder="Search projects..."
        searchTerm={search}
        onSearch={setSearch}
      />

      {(!filteredProjects || filteredProjects.length === 0) ? (
        <p className="text-muted">No recent projects found.</p>
      ) : (
        <>
          <ul className="list-group list-group-flush">
            {filteredProjects.map((p) => (
              <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                <Link
                  to={`/projects/${p.id}`}
                  className="text-decoration-none fw-semibold text-dark"
                >
                  {p.name}
                </Link>
                {p.createdAt && (
                  <small className="text-muted">{new Date(p.createdAt).toLocaleDateString()}</small>
                )}
              </li>
            ))}
          </ul>

          <div className="text-end mt-2">
            <Link to="/projects" className="btn btn-sm btn-outline-primary w-100">
              View All Projects
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
