import React from 'react'
import Panel from '../../shared/components/Panel'

const ResetPanel = ({ currentWeek, currentYear }) => {
  return (
    <Panel>
      <div className="flex-1 min-w-0">
        <h1 className="text-4xl mb-4">Week {currentWeek}, {currentYear}</h1>
        <h4 className="text-xl text-gray-600">Select your current week to get started</h4>
      </div>
    </Panel>
  )
}

export default ResetPanel
