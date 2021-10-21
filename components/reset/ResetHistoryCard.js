import React from "react"
import { useSelector } from "react-redux"
import { getFormattedDate } from '../../shared/utils/dateTimeHelper'

const ResetHistoryCard = ({ par, user }) => {
  const { month, day, year, hour, minute, suffix } = getFormattedDate(
    par?.itemreset?.lastUpdated
  )
  return (
    <div className="pt-5 sm:max-w-xl sm:mx-auto flex items-center flex-grow justify-center">
      <img
        className="h-8 w-8 rounded-full mr-2"
        src={user.profilePicture}
        alt="profile_picture"
      />
      <div className="">
        <div>
          <p className="text-sm text-gray-500 text-center flex-grow">
            <span className="font-medium text-gray-900">
              {user.firstName} {user.lastName}
            </span>{" "}
            reset this par level to {par?.itemreset?.resetLevel} on{" "}
            {month} {day}, {year} at {hour}:{minute} {suffix} UTC.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetHistoryCard
