import { useState } from 'react';
import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';
import SearchBar from './SearchBar';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('az');

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  // Filter clients by search term
  const filteredClients = data.clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort filtered clients based on selected sort order
  const sortedClients = [...filteredClients].sort((a, b) => {
    if (sortOrder === 'az') return a.name.localeCompare(b.name);
    if (sortOrder === 'za') return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <>
      <div className="d-flex mb-3 align-items-center gap-2">
        <SearchBar
          placeholder="Search clients..."
          searchTerm={search}
          onSearch={setSearch}
        />
        <select
          className="form-select w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="az">Sort A-Z</option>
          <option value="za">Sort Z-A</option>
        </select>
      </div>

      {sortedClients.length > 0 ? (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th> {/* NEW COLUMN */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedClients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No clients found.</p>
      )}
    </>
  );
}
