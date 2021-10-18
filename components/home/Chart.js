import React from "react"
import { Line } from "react-chartjs-2"

const chartData = {
  labels: ["Week 1", "Week 2", "Week 3"],
  data: [1000, 2000, 1000],
}

const Chart = () => {
  const lineChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Inventory Reduction ($)",
        data: chartData.data,
        fill: false,
        tension: 0.4,
        backgroundColor: "lightblue",
        borderColor: "lightblue",
      },
    ],
  }

  const options = {
    responsive: true,
    fill: false,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 1000,
      },
    },
  }

  return (
    <section className="lg:max-w-6xl lg:mx-auto mt-10 hidden sm:block">
      <div className="bg-white rounded-lg">
        <div className="px-20 py-5">
          <Line data={lineChartData} options={options} />
        </div>
      </div>
    </section>
  )
}

export default Chart
