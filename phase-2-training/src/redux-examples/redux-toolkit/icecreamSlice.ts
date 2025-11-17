import { createSlice } from "@reduxjs/toolkit";

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: { numOfIcecreams: 20 },
  reducers: {
    buyIcecream: (state, action) => {
      state.numOfIcecreams -= action.payload;
    }
  }
});

export const { buyIcecream } = icecreamSlice.actions;
export default icecreamSlice.reducer;
