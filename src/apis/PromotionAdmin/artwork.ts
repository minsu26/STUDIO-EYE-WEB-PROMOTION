import { PROMOTION_BASIC_PATH } from '@/constants/basicPathConstants';
import axios from 'axios';

export const getAllArtworks = async () => {
  try {
    const response = await axios.get(`${PROMOTION_BASIC_PATH}/api/projects`);
    return response.data.data;
  } catch (error) {
    console.log('[❌ Error fetching all artworks]', error);
    throw error;
  }
};

export const getArtworkDetail = async (artworkId: number) => {
  try {
    const response = await axios.get(`${PROMOTION_BASIC_PATH}/api/projects/${artworkId}`);
    return response.data.data;
  } catch (error) {
    console.log('[❌ Error fetching artwork detail]', error);
    throw error;
  }
};

export const putArtwork = async (artworkData: FormData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const response = await axios.put(`${PROMOTION_BASIC_PATH}/api/projects`, artworkData, config);
    return response.data;
  } catch (error) {
    console.error('[❌ Error updating artwork]', error);
    throw error;
  }
};