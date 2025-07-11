import React, { useState, useEffect } from "react";
import axios from "axios";

const RepositorySync = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastSync, setLastSync] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const API_BASE =  "https://work-sync-1.onrender.com";

  const handleSync = async () => {
    setLoading(true);
    try {
      await axios.post(`https://work-sync-1.onrender.com/api/sync/repositories`);
      fetchRepos();
    } catch (error) {
      console.error("❌ Sync failed:", error?.response?.data || error.message || error);
    }
    setLoading(false);
  };

  const fetchRepos = async () => {
    try {
      const res = await axios.get(`https://work-sync-1.onrender.com/api/repositories`);
      setRepos(res.data);
      const latestSync = res.data.reduce((latest, repo) => {
        const time = new Date(repo.lastSyncedAt);
        return time > latest ? time : latest;
      }, new Date(0));
      setLastSync(latestSync.toLocaleString());
    } catch (error) {
      console.error("❌ Failed to fetch repositories:", error?.response?.data || error.message || error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
  const fetchRepos = async () => {
    try {
      const res = await axios.get(`https://work-sync-1.onrender.com/api/repositories`);
      setRepos(res.data);
      const latestSync = res.data.reduce((latest, repo) => {
        const time = new Date(repo.lastSyncedAt);
        return time > latest ? time : latest;
      }, new Date(0));
      setLastSync(latestSync.toLocaleString());
    } catch (error) {
      console.error("❌ Failed to fetch repositories:", error?.response?.data || error.message || error);
    }
  };

  fetchRepos();
}, [API_BASE]);


  const filteredRepos = repos.filter((repo) =>
    (filter === "all" || repo.platform === filter) &&
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">Repository Synchronization</h2>

      <div className="mb-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-success" onClick={handleSync} disabled={loading}>
            {loading ? "Syncing..." : "Sync Repositories"}
          </button>

          <select
            className="form-select w-auto"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="GitHub">GitHub</option>
            <option value="GitLab">GitLab</option>
          </select>

          <input
            type="text"
            className="form-control w-auto"
            placeholder="Search repo name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {lastSync && <span className="text-muted">Last Sync: {lastSync}</span>}
      </div>

      {filteredRepos.length === 0 ? (
        <div className="alert alert-warning text-center">
          No repositories found for this filter or search.
        </div>
      ) : (
        <div className="row">
          {filteredRepos.map((repo, idx) => (
            <div key={repo._id || idx} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{repo.name}</h5>
                  <p className="card-text">{repo.description || "No description"}</p>
                  <p className="card-text">
                    ⭐ {repo.stars} | <strong>{repo.platform}</strong>
                  </p>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepositorySync;
