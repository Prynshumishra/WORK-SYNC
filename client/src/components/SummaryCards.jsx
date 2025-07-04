import React from "react";
import {
  FaTasks,
  FaUsers,
  FaCheck,
  FaSpinner,
  FaHourglassStart,
} from "react-icons/fa";

export default function SummaryCards({ totalProjects, totalClients, projectStats }) {
  return (
    <div className="row justify-content-center gy-4 mb-4">
      {/* Total Projects Card */}
      <div className="col-md-4">
        <div className="card p-4 shadow d-flex flex-column align-items-start">
          <div className="d-flex align-items-center mb-2">
            <FaTasks size={24} className="text-primary me-2" />
            <h5 className="mb-0">Total Projects</h5>
          </div>
          <h2 className="text-primary">{totalProjects}</h2>
          <div className="mt-2">
            <span className="badge bg-primary me-1">
              <FaHourglassStart className="me-1" />
              {projectStats.new} New
            </span>
            <span className="badge bg-warning text-dark me-1">
              <FaSpinner className="me-1" />
              {projectStats.progress} In Progress
            </span>
            <span className="badge bg-success">
              <FaCheck className="me-1" />
              {projectStats.completed} Completed
            </span>
          </div>
        </div>
      </div>

      {/* Total Clients Card */}
      <div className="col-md-4">
        <div className="card p-4 shadow d-flex flex-column align-items-start">
          <div className="d-flex align-items-center mb-2">
            <FaUsers size={24} className="text-success me-2" />
            <h5 className="mb-0">Total Clients</h5>
          </div>
          <h2 className="text-success">{totalClients}</h2>
          <div className="mt-2">
            <span className="badge bg-success me-1">
              <FaCheck className="me-1" />
              {projectStats.activeClients ?? 0} Active
            </span>
            <span className="badge bg-secondary">
              <FaHourglassStart className="me-1" />
              {projectStats.inactiveClients ?? 0} Inactive
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
