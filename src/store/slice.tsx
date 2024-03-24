import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log('aaaaaaaaaaa');
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export default movieSlice.reducer;
export const {addUser} = movieSlice.actions;
