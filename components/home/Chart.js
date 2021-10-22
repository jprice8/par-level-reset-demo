import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import { useSelector } from "react-redux"

import { getWeekLabels, getWeeklyReductionData } from '../../shared/utils/dashboardChartHelper'

const Chart = () => {
  const pars = useSelector((state) => state.pars)
  const weeks = useSelector((state) => state.weeks)

  const [labels, setLabels] = useState(getWeekLabels(weeks))
  const [data, setData] = useState(getWeeklyReductionData(weeks, pars))

  useEffect(() => {
    console.log('Use effect called')
    setData(getWeeklyReductionData(weeks, pars))
    console.log(data)
  }, [])

  const lineChartData = {
    labels: labels,
    datasets: [
      {
        label: "Inventory Reduction ($)",
        data: data,
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
