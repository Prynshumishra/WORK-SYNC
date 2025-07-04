import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function ProjectsOverTimeLineChart({ data }) {
  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: "Projects Created",
        data: data.map(d => d.count),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "bottom" } },
  };

  return (
    <div className="card p-4 shadow">
      <h4 className="mb-3">Projects Over Time</h4>
      <Line data={chartData} options={options} />
    </div>
  );
}
