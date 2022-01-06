import React from "react"
import { useSelector } from "react-redux"

import WeekRow from "./WeekRow"

const WeekList = () => {
  const weeks = useSelector((state) => state.weeks)
  const orderedWeeks = [...weeks].reverse()

  console.log(orderedWeeks)

  const newFormLinks = []
  for (let i = 0; i < 5; i++) {
    newFormLinks.push(
      <WeekRow
        key={i}
        idx={i}
        currentWeek="5"
        weekNumber={orderedWeeks[i].weekNumber}
        submissionStatus={orderedWeeks[i].submissionStatus}
      />
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h4 className="text-2xl mt-10 text-gray-900 text-center font-semibold bg-white p-4 rounded-lg shadow-md">
        Five Week View
      </h4>
      <div className="bg-white overflow-hidden sm:rounded-md mt-10 shadow-md">
        <ul className="divide-y divide-gray-200">{newFormLinks}</ul>
      </div>
    </div>
  )
}

export default WeekList
