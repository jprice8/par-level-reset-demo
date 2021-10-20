import React, { useState } from "react"
import Link from "next/link"

const WeekPagination = ({
  data,
  RenderComponent,
  currentWeek,
  pageLimit,
  dataLimit,
}) => {
  const [pages] = useState(Math.round(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1)
  }
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1)
  }
  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent)
    setCurrentPage(pageNumber)
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      {/* Show the posts, 5 at a time */}
      <ul className="divide-y divide-gray-200">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent
            key={idx}
            idx={idx}
            currentWeek={currentWeek}
            weekNumber={d.weekNumber}
            submissionStatus={d.submissionStatus}
          />
        ))}
      </ul>

      {/* Pagination */}
      <div className="border-t border-gray-200 text-center pb-2">
        <button onClick={goToPreviousPage} className="border-t-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
          prev
        </button>

        {/* Page number */}
        {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={changePage} className="px-4 py-2">
            <span>{item}</span>
          </button>
        ))}

        {/* Next button */}
        <button onClick={goToNextPage} className="px-4 py-2">
          next
        </button>
      </div>
    </div>
  )
}

export default WeekPagination
