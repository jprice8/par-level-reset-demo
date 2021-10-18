import React from "react"
import { getYear, getISOWeek } from "date-fns"

import WeekList from "../components/reset/WeekList"
import AltNavBar from "../shared/components/AltNavBar"
import ResetPanel from "../components/reset/ResetPanel"

const Reset = () => {
  const date = new Date()
  const week = getISOWeek(date)
  const year = getYear(date)

  return (
    <AltNavBar>
      <ResetPanel currentWeek={week} currentYear={year} />

      <WeekList weeks={week} />
    </AltNavBar>
  )
}

export default Reset
