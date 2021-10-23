import { format } from "date-fns"
import React from "react"

const ResetHistoryCard = ({ par, user }) => {
  const targetDate = new Date(par?.itemreset?.lastUpdated)

  const formattedDate = format(targetDate, 'PPPpp')

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
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetHistoryCard
