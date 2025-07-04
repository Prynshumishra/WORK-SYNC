import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import { GET_CLIENTS } from '../queries/clientQueries';

import SummaryCards from '../components/SummaryCards';
import RecentProjects from '../components/RecentProjects';
import RecentClients from '../components/RecentClients';

export default function Dashboard() {
  const { data: projectsData } = useQuery(GET_PROJECTS);
  const { data: clientsData } = useQuery(GET_CLIENTS);

  const projects = projectsData?.projects || [];
  const clients = clientsData?.clients || [];

  // Prepare recent data
  const recentProjects = [...projects]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const recentClients = [...clients]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  // Correct active/inactive clients counting using client.status field
  const activeClientsCount = clients.filter(
    (client) => client.status?.toLowerCase() === 'active'
  ).length;
  const inactiveClientsCount = clients.filter(
    (client) => client.status?.toLowerCase() === 'inactive'
  ).length;

  const projectStats = {
    new: projects.filter((p) => p.status === 'Not Started').length,
    progress: projects.filter((p) => p.status === 'In Progress').length,
    completed: projects.filter((p) => p.status === 'Completed').length,
    activeClients: activeClientsCount,
    inactiveClients: inactiveClientsCount,
  };

  return (
<div className="about container py-5">
    <div className="text-center mb-5">

      <h1 className="display-4 fw-bold mb-3">Dashboard</h1>
      <p className="lead mb-4">Get a quick overview of your project activities and key metrics in one place.</p>


      <div className="row align-items-center mt-mb-4 gy-4">
      {/* ✅ Summary Cards at the top */}
      <SummaryCards
        totalProjects={projects.length}
        totalClients={clients.length}
        projectStats={projectStats}
      />

      {/* Recent Projects & Clients */}
      <div className="row mb-4 gy-4">
        <div className="col-12 col-md-6">
          <RecentProjects projects={recentProjects} />
        </div>
        <div className="col-12 col-md-6">
          <RecentClients clients={recentClients} />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
