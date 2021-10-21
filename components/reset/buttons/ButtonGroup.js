import React from "react"

import NextStepButton from "./NextStepButton"
import BackStepButton from "./BackStepButton"
import SubmitButton from "./SubmitButton"

const ButtonGroup = (props) => {
  if (props.stepIndex === 1) {
    return (
      <div className="pt-5 flex justify-center">
        <NextStepButton />
      </div>
    )
  } else if (props.stepIndex > 1 && props.stepIndex < 5) {
    return (
      <div className="pt-5 flex justify-between">
        <BackStepButton onBackButton={props.onBackButton} />
        <NextStepButton />
      </div>
    )
  } else {
    return (
      <div className="pt-5 flex justify-between">
        <BackStepButton onBackButton={props.onBackButton} />
        <SubmitButton />
      </div>
    )
  }
}

export default ButtonGroup
