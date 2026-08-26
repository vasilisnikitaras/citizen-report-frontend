import { Bar, Pie } from "react-chartjs-2";
import ReportList from "./ReportList";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

export default function AdminDashboard({ reports }) {

  const typeCounts = reports.reduce((acc, r) => {
    acc[r.type] = (acc[r.type] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(typeCounts);
  const values = Object.values(typeCounts);

  const barData = {
    labels,
    datasets: [
      {
        label: "Reports per Type",
        data: values,
        backgroundColor: "#CC7722"
      }
    ]
  };

  const pieData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#CC7722", "#888", "#444", "#222", "#999"]
      }
    ]
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#CC7722" }}>📊 Admin Dashboard</h2>

      <ReportList reports={reports} />

      <div style={{ marginTop: "30px" }}>
        <h3>Reports per Type</h3>
        <Bar data={barData} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Distribution</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}
