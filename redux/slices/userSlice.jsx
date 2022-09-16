import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name:'user',
    initialState: {
        userName:'',
        password:'',
        isLoggedIn:false
      },
      reducers:{
        setUserName: (state, action) => {
            state.userName = action.payload;
          },
          setPassword: (state, action) => {
            state.password = action.payload;
          },
          setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
          }
      }
})
export const {setUserName,setPassword, setIsLoggedIn} = slice.actions;
export default slice.reducer;