
export const getWeekLabels = (weeks) => {
  let labels = []

  for (let i = 0; i < weeks.length; i++) {
    labels.push(`Week ${i+1}`)
  }

  return labels
}

export const getWeeklyReductionData = (weeks, pars) => {
  let data = []

  // Iterate through each week
  for (let i = 0; i < weeks.length; i++) {
    let weekOneIndexed = i + 1
    // Weekly reduction ext temp variable
    let ext = 0
    // Iterate through pars looking for matching week
    for (let j = 0; j < pars.length; j++) {
      // Check to see if the par is in the current week
      if (parseInt(pars[j].itemreset.week) === weekOneIndexed) {
        // Check if this par has a reset
        if (pars[j].itemreset.resetLevel) {
          // If so, append reductionExt to temp variable
          let currentExt = pars[j].currentParQty * pars[j].unitCost
          let resetExt = pars[j].itemreset.resetLevel * pars[j].unitCost
          let reductionExt = currentExt - resetExt

          ext += reductionExt
        }
      }
    }

    // After finding total reduction ext for week,
    // append data to arrays
    data.push(ext)
  }

  // Return chart arrays
  return data
}
