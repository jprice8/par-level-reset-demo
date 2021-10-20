import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: 1,
  firstName: "Tony",
  lastName: "Soprano",
  email: "tsoprano@memorial.com",
  title: "Director of Materials Management",
  facility: "Memorial Hospital",
  phone: "817-555-1234",
  joined: new Date().toISOString(),
  profilePicture: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userUpdated(state, action) {
      const { firstName, lastName, email, title, facility } = action.payload
      state.firstName = firstName
      state.lastName = lastName
      state.email = email
      state.title = title
      state.facility = facility
    },
  },
})

export const { userUpdated } = usersSlice.actions
export default usersSlice.reducer