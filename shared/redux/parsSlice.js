import { createSlice } from "@reduxjs/toolkit"
import { getParData } from "../utils/smocker"

const initialState = getParData()

export const parsSlice = createSlice({
  name: "pars",
  initialState: initialState,
  reducers: {
    updateNestedItemReset(state, action) {
      const {
        parId,
        userFirstName,
        userLastName,
        resetLevel,
        lastUpdated,
        week,
      } = action.payload
      const existingPar = state.find((p) => p.id === parId)
      if (existingPar) {
        existingPar.itemreset.userFirstName = userFirstName
        existingPar.itemreset.userLastName = userLastName
        existingPar.itemreset.resetLevel = resetLevel
        existingPar.itemreset.lastUpdated = lastUpdated
        existingPar.itemreset.week = week
      }
    },
  },
})

export const { updateNestedItemReset } = parsSlice.actions
export default parsSlice.reducer