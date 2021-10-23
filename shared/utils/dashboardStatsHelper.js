import { getISOWeek } from "date-fns"
import { usdTwoDigits } from './currencyHelper'

export const calcExtReduction = (pars) => {
  // Reduction amount variable
  let ext = 0
  // Loop through pars
  for (let i = 0; i < pars.length; i++) {
    // Get the current extended cost
    let currentExt = pars[i].currentParQty * pars[i].unitCost
    // Get the reset level
    let resetLevel = pars[i].itemreset.resetLevel

    // If the par has a reset, calc the delta
    if (resetLevel) {
      // Get ext cost of reset level
      let resetExt = resetLevel * pars[i].unitCost
      // Calc the delta of current ext against reset ext
      let delta = currentExt - resetExt
      // Add to total reduction
      ext += delta
    }
  }
  // Return total reduction
  return ext
}

export const calcWeeksCompleted = (weeks) => {
  // Weeks completed variable
  let weeksSubmitted = 0
  // Loop through weeks
  for (let i = 0; i < weeks.length; i++) {
    // Check submission status for Submitted
    if (weeks[i].submissionStatus === "Submitted") {
      weeksSubmitted++
    }
  }

  // Return number of weeks submitted
  return weeksSubmitted
}

export const calcParsReset = (pars) => {
  // Pars reset variable
  let parsReset = 0
  // Loop through pars
  for (let i = 0; i < pars.length; i++) {
    // Get current par level
    let currentParLevel = pars[i].currentParQty
    // Get the reset level
    let resetLevel = pars[i].itemreset.resetLevel
    // If the par has a reset, check for delta
    if (resetLevel) {
      // If the reset level is lower than the par, increment
      if (resetLevel < currentParLevel) parsReset++
    }
  }
  // Return the number of pars reset
  return parsReset
}

export const getParsForStatList = (pars) => {
  // The return pars array
  let statsListPars = []

  // Loop through pars and format for array
  for (let i = 0; i < pars.length; i++) {
    // We only want pars that have been reduced
    if (pars[i].itemreset.resetLevel && pars[i].itemreset.resetLevel < pars[i].currentParQty) {
      let tmp = {}
      // Give tmp variable desired attributes of par
      tmp.id = pars[i].id
      tmp.week = pars[i].itemreset.week
      tmp.year = pars[i].itemreset.year
      tmp.mfr = pars[i].mfr
      tmp.description = pars[i].description

      // Calculate reduction ext
      const currentExt = pars[i].currentParQty * pars[i].unitCost
      const resetExt = pars[i].itemreset.resetLevel * pars[i].unitCost
      const reductionExt = currentExt - resetExt
      tmp.reductionExt = usdTwoDigits(reductionExt)

      tmp.flagged = "No"

      statsListPars.push(tmp)
    }
  }

  return statsListPars
}
