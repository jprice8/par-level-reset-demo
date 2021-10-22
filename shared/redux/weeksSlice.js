import { createSlice } from "@reduxjs/toolkit"
import { getWeekData } from "../utils/smocker"

// Set up initial state for every week to date
const initialState = getWeekData()

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
