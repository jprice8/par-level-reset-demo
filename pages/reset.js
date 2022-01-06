import React from "react"

import WeekList from "../components/reset/WeekList"
import AltNavBar from "../shared/components/AltNavBar"
import ResetPanel from "../components/reset/ResetPanel"

const Reset = () => {

  return (
    <AltNavBar>
      <ResetPanel currentWeek={5} currentYear={2021} />

      <WeekList />
    </AltNavBar>
  )
}

export default Reset
