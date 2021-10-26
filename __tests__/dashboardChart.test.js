import { getISOWeek } from "date-fns"
import React from "react"
import {
  getWeekLabels,
  getWeeklyReductionData,
} from "../shared/utils/dashboardChartHelper"
import { getWeekData, getParData } from "../shared/utils/smocker"

const weekState = getWeekData()
const parState = getParData()

test("Get the correct week labels from helper function.", () => {
  // Simply return Week n for week n
  const date = new Date()
  const currentWeek = getISOWeek(date)
  expect(getWeekLabels(weekState).length).toEqual(currentWeek)
  expect(getWeekLabels(weekState).at(-1)).toEqual(`Week ${currentWeek}`)
})

test("Get the correct reduction data from helper function.", () => {
  const weeklyReductionData = getWeeklyReductionData(weekState, parState)
  expect(weeklyReductionData.at(-2)).toEqual(4676.84)
})
