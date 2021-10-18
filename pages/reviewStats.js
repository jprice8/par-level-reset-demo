import React from 'react'
import AltNavBar from '../shared/components/AltNavBar'
import DashboardPanel from '../components/home/DashboardPanel'
import StatsList from '../components/home/StatsList'

const ReviewStats = () => {
  return (
    <AltNavBar>
      <DashboardPanel />

      <StatsList  />
    </AltNavBar>
  )
}

export default ReviewStats
