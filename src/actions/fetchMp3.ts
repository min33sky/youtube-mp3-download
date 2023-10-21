'use server';

import { env } from '@/lib/environment';
import { DownloadResponse } from '@/lib/types';
import axios from 'axios';

export default async function fetchMp3(url: string) {
  try {
    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: url },
      headers: {
        'X-RapidAPI-Key': env['NEXT_PUBLIC_X-RAPID-API-KEY'],
        'X-RapidAPI-Host': env['NEXT_PUBLIC_X-RAPID-API-HOST'],
      },
    };

    const response = await axios.request(options);
    return response.data as DownloadResponse;
  } catch (error) {
    console.error(error);
  }
}
