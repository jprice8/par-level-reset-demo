import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: "dashboard",
}

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    navUpdated(state, action) {
      const { currentPage } = action.payload
      state.currentPage = currentPage
    },
  },
})

export const { navUpdated } = navSlice.actions
export default navSlice.reducer
