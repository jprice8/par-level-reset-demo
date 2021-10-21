import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./usersSlice"
import parsSlice from "./parsSlice"
import weeksSlice from "./weeksSlice"

export default configureStore({
  reducer: {
    users: usersSlice,
    pars: parsSlice,
    weeks: weeksSlice,
  },
})
