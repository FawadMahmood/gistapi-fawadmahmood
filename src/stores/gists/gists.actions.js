
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPublicGists, getGistForUser } from '../../services';

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

export const fetchGistsByUsername = createAsyncThunk(
  'gists/fetchGistsByUsername',
  async (userId) => {
    try {
      const gists = await getGistForUser( userId );
      return gists.data;
    } catch (error) {
      throw new Error('Failed to fetch gists.');
    }
  }
);
