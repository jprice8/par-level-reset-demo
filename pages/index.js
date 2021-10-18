import React from "react"

import DashboardPanel from "../components/home/DashboardPanel"
import Stats from '../components/home/Stats'
import Chart from '../components/home/Chart'
import AltNavBar from "../shared/components/AltNavBar"

export default function Home() {
  return (
    <AltNavBar>
        <DashboardPanel />

        <Stats />

        <Chart />
    </AltNavBar>
  )
}
