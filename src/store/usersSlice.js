import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Denzel Washington' },
  { id: '1', name: 'Kevin Spacey' },
  { id: '2', name: 'Al Pacino' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer