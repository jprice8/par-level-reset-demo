import React from "react"

import DashboardPanel from "../components/home/DashboardPanel"
import Stats from "../components/home/Stats"
import Chart from "../components/home/Chart"
import AltNavBar from "../shared/components/AltNavBar"

const Dashboard = () => {
  return (
    <AltNavBar>
      <DashboardPanel />

      <Stats />

      <Chart />
    </AltNavBar>
  )
}

export default Dashboard
