import React from "react"
import WeekPagination from "./WeekPagination"

import WeekRow from "./WeekRow"

const WeekList = ({ weeks }) => {
  const results = []
  for (let i = 0; i < weeks; i++) {
    if (i === weeks - 1) {
      results.push({
        weekNumber: i + 1,
        submissionStatus: "New",
      })
    } else {
      results.push({
        weekNumber: i + 1,
        submissionStatus: "Missed",
      })
    }
  }

  const newFormLinks = []
  for (let i = 0; i < weeks; i++) {
    newFormLinks.push(<WeekRow idx={i} currentWeek={weeks} results={results} />)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white shadow overflow-hidden sm:rounded-md mt-20">
        {/* <ul className="divide-y divide-gray-200">{newFormLinks}</ul> */}
        <WeekPagination 
          data={results}
          RenderComponent={WeekRow}
          currentWeek={weeks}
          pageLimit={5}
          dataLimit={5}
        />
      </div>
    </div>
  )
}

export default WeekList
