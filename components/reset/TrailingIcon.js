import { CheckIcon, ChevronRightIcon, XIcon } from "@heroicons/react/outline"
import React, { Fragment } from "react"

const TrailingIcon = (status) => {
  if (status === "Submitted") {
    return (
      <Fragment>
        <CheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Fragment>
    )
  } else if (status === "Missed") {
    return (
      <Fragment>
        <XIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Fragment>
    )
  } else if (status === "New") {
    return (
      <Fragment>
        <ChevronRightIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Fragment>
    )
  }
}

export default TrailingIcon
