/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from '../../../../utils/axios';

export const getVideos = async () => {
  const response = await axios.get('/videos');

  return response.data;
};
