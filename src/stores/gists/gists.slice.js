import { createSlice } from '@reduxjs/toolkit';
import { fetchGists, fetchGistsByUsername  } from './gists.actions';

const gistsSlice = createSlice({
  name: 'gists',
  initialState: {
    gists: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gists = action.payload;
      })
      .addCase(fetchGists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGistsByUsername.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGistsByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.gists = action.payload;
      })
      .addCase(fetchGistsByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default gistsSlice.reducer;
export const { } = gistsSlice.actions;