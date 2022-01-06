import { format } from "date-fns"
import React from "react"
import { usdTwoDigits } from "../../shared/utils/currencyHelper"

const DetailPanel = ({ user, reset, reductionExt }) => {
  const targetDate = new Date(reset?.itemreset?.lastUpdated)
  const formattedDate = format(targetDate, 'PPP')

  return (
    <div className="px-5 mt-10 rounded-md border-t border-gray-200">
      <ul className="divide-y divide-gray-200">
        <li className="py-4">
          <div className="flex space-x-3"> <img 
              className="h-10 w-10 rounded-full"
              src={user.profilePicture}
              alt="profPic"
            />
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-gray-500">
                  {formattedDate}
                </p>
              </div>
              <p className="text-sm text-gray-500">
                Reduced par from previous par level of{" "}
                {reset.currentParQty} to new par level of{" "}
                {reset.itemreset.resetLevel} for a reduction of{" "}
                {usdTwoDigits(reductionExt)}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default DetailPanel
