import { useState } from 'react';
import { useQuery } from '@apollo/client';
import ProjectCard from './ProjectCard';
import Spinner from './Spinner';
import { GET_PROJECTS } from '../queries/projectQueries';
import SearchBar from './SearchBar';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('az');

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  // Filter projects by search term
  const filteredProjects = data.projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort filtered projects based on selected sort order
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOrder === 'az') return a.name.localeCompare(b.name);
    if (sortOrder === 'za') return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <>
      <div className="d-flex mb-4 align-items-center gap-2">
        <SearchBar
          placeholder="Search projects..."
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

      {sortedProjects.length > 0 ? (
        <div className="row mt-4">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects found.</p>
      )}
    </>
  );
}
