import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: 1,
  firstName: "John",
  lastName: "Smith",
  email: "jsmith@memorial.com",
  title: "Director of Materials Management",
  joined: new Date().toISOString(),
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userUpdated(state, action) {
      const { firstName, lastName, email, title } = action.payload
      state.firstName = firstName
      state.lastName = lastName
      state.email = email
      state.title = title
    },
  },
})

export const { userUpdated } = usersSlice.actions
export default usersSlice.reducer
