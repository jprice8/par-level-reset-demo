import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = []

export const resetsSlice = createSlice({
  name: "resets",
  initialState: initialState,
  reducers: {
    resetAdded(state, action) {
      state.push(action.payload)
    },
    prepare(resetQty, sendBackConfirmed, week, imms, description, catNo, userId) {
      return {
        payload: {
          id: nanoid(),
          timestamp: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
          resetQty,
          sendBackConfirmed,
          week,
          imms,
          description,
          catNo,
          user: userId,
        },
      }
    },
    resetUpdated(state, action) {
      const { id, resetQty, sendBackConfirmed } = action.payload
      const existingReset = state.find((r) => r.id === id)
      if (existingReset) {
        existingReset.lastUpdated = new Date().toISOString()
        existingReset.resetQty = resetQty
        existingReset.sendBackConfirmed = sendBackConfirmed
      }
    }
  },
})

export const { resetAdded, resetUpdated } = resetsSlice.actions
export default resetsSlice.reducer