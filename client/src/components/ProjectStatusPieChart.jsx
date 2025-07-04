import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProjectStatusPieChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.name),
    datasets: [
      {
        label: "Projects",
        data: data.map((d) => d.value),
        backgroundColor: ["#007bff", "#ffc107", "#28a745"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="card p-4 shadow">
      <h4 className="mb-3">Project Status Distribution</h4>
      <Pie data={chartData} options={options} />
    </div>
  );
}
