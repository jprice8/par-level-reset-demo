import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/outline"
import React, { Fragment } from "react"

const StatusBadge = (status) => {
  if (status === "Submitted") {
    return (
      <Fragment>
        <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" />
        <p>Submitted</p>
      </Fragment>
    )
  } else if (status === "Missed") {
    return (
      <Fragment>
        <XCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" />
        <p>Missed</p>
      </Fragment>
    )
  } else if (status == "New") {
    return (
      <Fragment>
        <ExclamationCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-400" />
        <p>New</p>
      </Fragment>
    )
  }
}

export default StatusBadge