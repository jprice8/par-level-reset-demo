import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./usersSlice"
import resetsSlice from "./resetsSlice"
import navSlice from "./navSlice"

export default configureStore({
  reducer: {
    users: usersSlice,
    resets: resetsSlice,
    nav: navSlice,
  },
})
