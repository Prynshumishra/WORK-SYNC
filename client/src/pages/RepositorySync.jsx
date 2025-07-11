import React, { useState, useEffect } from "react";
import axios from "axios";

const RepositorySync = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastSync, setLastSync] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleSync = async () => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/sync/repositories');
      fetchRepos();
    } catch (error) {
      console.error("❌ Sync failed:", error);
    }
    setLoading(false);
  };

  const fetchRepos = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/repositories`);
      setRepos(res.data);
      const latestSync = res.data.reduce((latest, repo) => {
        const time = new Date(repo.lastSyncedAt);
        return time > latest ? time : latest;
      }, new Date(0));
      setLastSync(latestSync.toLocaleString());
    } catch (error) {
      console.error("❌ Failed to fetch repositories:", error);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    filter === "all" ? true : repo.platform === filter
  );

  return (
    <div className="container py-5">
      <h2 className="mb-4">Repository Synchronization</h2>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-success me-2" onClick={handleSync} disabled={loading}>
            {loading ? "Syncing..." : "Sync Repositories"}
          </button>
          <select className="form-select d-inline w-auto" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="GitHub">GitHub</option>
            <option value="GitLab">GitLab</option>
          </select>
        </div>
        {lastSync && <span className="text-muted">Last Sync: {lastSync}</span>}
      </div>

      <div className="row">
        {filteredRepos.map((repo, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description || "No description"}</p>
                <p className="card-text">
                  ⭐ {repo.stars} | <strong>{repo.platform}</strong>
                </p>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  View Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositorySync;
