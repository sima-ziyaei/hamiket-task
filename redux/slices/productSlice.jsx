import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'product',
    initialState: {
        productItem: [],
      },
      reducers:{
        setProduct: (state, action) => {
            state.productItem = action.payload;
          }
      }
})

export const { setProduct} = slice.actions;
export default slice.reducer;