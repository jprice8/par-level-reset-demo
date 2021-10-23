import React, { useState } from "react"

const WeekPagination = ({
  data,
  RenderComponent,
  currentWeek,
  pageLimit,
  dataLimit,
}) => {
  // const [pages] = useState(Math.round(data.length / dataLimit))
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
        {currentPage > 1 && (
          <button
            onClick={goToPreviousPage}
            className="border-t-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-2 pt-4"
          >
            prev
          </button>
        )}

        {/* Page number */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={
              currentPage === item
                ? "border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            }
          >
            <span>{item}</span>
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={goToNextPage}
          className="border-t-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 px-4 py-2 pt-4"
        >
          next
        </button>
      </div>
    </div>
  )
}

export default WeekPagination
