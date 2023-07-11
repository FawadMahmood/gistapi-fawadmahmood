
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPublicGists } from '../../services';

export const fetchGists = createAsyncThunk(
  'gists/fetchGists',
  async () => {
    try {
      const gists = await getPublicGists();
      return gists.data;
    } catch (error) {
      throw new Error('Failed to fetch gists.');
    }
  }
);
