import React, { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graphic = () => {
  const [chartData] = React.useState([
    { id: 1, label: "Jan", profit: 200000 },
    { id: 2, label: "Feb", profit: 300000 },
    { id: 3, label: "Mar", profit: 250000 }, // Fixed duplicate ID
  ]);

  const chartRef = useRef(null); // Reference to the chart instance

  // Cleanup chart instance on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Destroy the chart instance when component unmounts
      }
    };
  }, []);

  const data = {
    labels: chartData.map((el) => el.label),
    datasets: [
      {
        label: "Profit",
        data: chartData.map((el) => el.profit),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, // Smooth the line
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Profit",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Profit (in USD)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px] bg-white drop-shadow-xl rounded-2xl p-4">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Graphic;
