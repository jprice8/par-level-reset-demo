import React from "react"
import Link from "next/link"

import StatusBadge from "./StatusBadge"
import { ChevronRightIcon } from "@heroicons/react/outline"

const WeekRow = ({ idx, currentWeek, results }) => {
  console.log(results)
  return (
    <li key={idx}>
      {idx + 1 === currentWeek ? (
        <Link href={`/${results[idx].weekNumber}/step1}`} className="block hover:bg-gray-50">
          <div className="px-4 py-4 flex items-center sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex text-lg">
                  <p className="font-medium text-gray-600 truncate">
                    Week {results[idx].weekNumber}
                  </p>
                </div>

                <div className="mt-2 flex">
                  <div className="flex items-center font-light text-sm text-gray-500">
                    {StatusBadge(results[idx].submissionStatus)}
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-5 flex-shrink-0">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </Link>

      ) : (

        <div className="block hover:bg-gray-50">
          <div className="px-4 py-4 flex items-center sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex text-lg">
                  <p className="font-medium text-gray-600 truncate">
                    Week {results[idx].weekNumber}
                  </p>
                </div>

                <div className="mt-2 flex">
                  <div className="flex items-center font-light text-sm text-gray-500">
                    {StatusBadge(results[idx].submissionStatus)}
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-5 flex-shrink-0">
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      )}
    </li>
  )
}

export default WeekRow
