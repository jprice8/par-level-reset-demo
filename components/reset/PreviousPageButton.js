import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'
import React from 'react'

const PreviousPageButton = ({ prevUrl, prevLinkHandler }) => {
  return (
    <div className="place-self-start px-5">
      {prevUrl && (
        <a>
          <ArrowNarrowLeftIcon 
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      )}
    </div>
  )
}

export default PreviousPageButton
