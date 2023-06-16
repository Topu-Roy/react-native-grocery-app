const { createSlice } = require("@reduxjs/toolkit");

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    data: [],
  },
  reducers: {
    addToFavorites(state, action) {
      let temp = state.data;
      temp.push(action.payload);
      state.data = temp;
      console.log(state.data.length);
    },
  },
});

export const { addToFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
