import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./usersSlice"
import resetsSlice from "./resetsSlice"
import parsSlice from "./parsSlice"

export default configureStore({
  reducer: {
    users: usersSlice,
    resets: resetsSlice,
    pars: parsSlice
  },
})
