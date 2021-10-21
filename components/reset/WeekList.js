import React from "react"
import { useSelector } from "react-redux"

import WeekPagination from "./WeekPagination"
import WeekRow from "./WeekRow"

const WeekList = ({ currentWeek }) => {
  const weeks = useSelector((state) => state.weeks)

  const newFormLinks = []
  for (let i = 0; i < currentWeek; i++) {
    newFormLinks.push(<WeekRow idx={i} currentWeek={currentWeek} results={weeks} />)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white shadow overflow-hidden sm:rounded-md mt-20">
        {/* <ul className="divide-y divide-gray-200">{newFormLinks}</ul> */}
        <WeekPagination 
          data={weeks}
          RenderComponent={WeekRow}
          currentWeek={currentWeek}
          pageLimit={5}
          dataLimit={5}
        />
      </div>
    </div>
  )
}

export default WeekList
