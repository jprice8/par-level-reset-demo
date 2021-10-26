import React from "react"
import {
  calcExtReduction,
  calcParsReset,
  calcWeeksCompleted,
  getParsForStatList,
} from "../shared/utils/dashboardStatsHelper"
import { getParData, getWeekData } from "../shared/utils/smocker"

const weekState = getWeekData()
const parState = getParData()

test("Calculate the total extended cost reduction for a user.", () => {
  // Nine pars were reduced for $14K from mock data
  expect(calcExtReduction(parState)).toEqual(14084.96)
})

test("Calculate the number of pars reset for the user.", () => {
  // Nine pars should be reduced from mock data
  expect(calcParsReset(parState)).toEqual(9)
})

test("Count the number of weeks completed for the user.", () => {
  // Three weeks should be completed from mock data
  expect(calcWeeksCompleted(weekState)).toEqual(3)
})

// Confirm the correct number of pars are being sent to the reset review list
test("Confirm the correct number of pars being sent to the reset review list.", () => {
  expect(getParsForStatList(parState).length).toEqual(9)
})

test("Confirm the reduction ext of the reset review list is matching the Dashboard reduction ext.", () => {
  const dashboardExt = calcExtReduction(parState)
  let resetReviewExt = 0

  // Loop through pars and format for array
  for (let i = 0; i < parState.length; i++) {
    // We only want pars that have been reduced
    if (
      parState[i].itemreset.resetLevel &&
      parState[i].itemreset.resetLevel < parState[i].currentParQty
    ) {
      // Calculate reduction ext
      const currentExt = parState[i].currentParQty * parState[i].unitCost
      const resetExt = parState[i].itemreset.resetLevel * parState[i].unitCost
      const reductionExt = currentExt - resetExt

      resetReviewExt += reductionExt
    }
  }


  expect(dashboardExt).toEqual(resetReviewExt)
})
