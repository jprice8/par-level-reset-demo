import { createSlice } from "@reduxjs/toolkit"
import { getISOWeek } from "date-fns"

const initialState = []

// Set up initial state for every week to date
const date = new Date()
const isoWeekNumber = getISOWeek(date)
for (let i = 0; i < isoWeekNumber; i++) {
  if (i === isoWeekNumber - 1) {
    initialState.push({
      weekNumber: i + 1,
      submissionStatus: "New",
    })
  } else {
    initialState.push({
      weekNumber: i + 1,
      submissionStatus: "Missed",
    })
  }
}

export const weeksSlice = createSlice({
  name: "weeks",
  initialState: initialState,
  reducers: {
    updateSubmissionStatus(state, action) {
      const { weekNumber } = action.payload
      const currentWeek = state.find((w) => parseInt(w.weekNumber) === weekNumber)
      if (currentWeek) {
        currentWeek.submissionStatus = "Submitted"
      }
    },
  },
})

export const { updateSubmissionStatus } = weeksSlice.actions
export default weeksSlice.reducer
