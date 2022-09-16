import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'product',
    initialState: {
        productItem: [],
        searchItems:[],
        number:0
      },
      reducers:{
        setProduct: (state, action) => {
            state.productItem = action.payload;
          },
          setSearchItems: (state, action) => {
            state.searchItems = action.payload;
          },
          setNumber: (state, action) => {
            state.number = action.payload;
          }
      }
})

export const { setProduct, setSearchItems, setNumber} = slice.actions;
export default slice.reducer;