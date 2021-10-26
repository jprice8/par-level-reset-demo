import React from "react"
import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/outline"

import StatusBadge from "./StatusBadge"
import TrailingIcon from "./TrailingIcon"

const WeekRow = ({ currentWeek, weekNumber, submissionStatus }) => {

  return (
    <React.Fragment>
      {weekNumber === currentWeek ? (
        <li className="cursor-pointer hover:bg-indigo-400 transition duration-200">
          <Link href={`/resetForm/${weekNumber}`} className="block">
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex text-lg">
                    <p className="font-medium text-gray-600 truncate">
                      Week {weekNumber}
                    </p>
                  </div>

                  <div className="mt-2 flex">
                    <div className="flex items-center font-light text-sm text-gray-500">
                      {StatusBadge(submissionStatus)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-5 flex-shrink-0">
                {TrailingIcon(submissionStatus)}
              </div>
            </div>
          </Link>
        </li>
      ) : (
        <li className="hover:bg-indigo-400 transition duration-200">
          <div className="px-4 py-4 flex items-center sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex text-lg">
                  <p className="font-medium text-gray-600 truncate">
                    Week {weekNumber}
                  </p>
                </div>

                <div className="mt-2 flex">
                  <div className="flex items-center font-light text-sm text-gray-500">
                    {StatusBadge(submissionStatus)}
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-5 flex-shrink-0">
              {TrailingIcon(submissionStatus)}
            </div>
          </div>
        </li>
      )}
    </React.Fragment>
  )
}

export default WeekRow
