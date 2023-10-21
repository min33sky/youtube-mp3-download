'use server';

import { DownloadResponse } from '@/lib/types';
import axios from 'axios';

export default async function fetchMp3(url: string) {
  try {
    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: url },
      headers: {
        'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.X_RAPID_API_HOST,
      },
    };

    const response = await axios.request(options);
    return response.data as DownloadResponse;
  } catch (error) {
    console.error(error);
  }
}
