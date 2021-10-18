import React from 'react'

import PreviousPageButton from './PreviousPageButton'
import NumberedPageButton from './NumberedPageButton'
import NextPageButton from './NextPageButton'

const ResetFooter = (props) => {
  return (
    <footer className="border-t border-gray-200 grid grid-cols-3 justify-items-stretch pb-2">
      <PreviousPageButton prevUrl={props.prevUrl} prevLinkHandler={props.prevLinkHandler} />
      <NumberedPageButton />
      <NextPageButton />
    </footer>
  )
}

export default ResetFooter
