import type { IncomingRequest, ServerResponse } from 'astro/server';
import { promises as fs } from 'fs';

const pictureDir = './public/assets/pictures';

export default async function (req: IncomingRequest): Promise<ServerResponse> {
  try {
    const pictureFiles = await fs.readdir(pictureDir);
    const pngPictures = pictureFiles.filter((file) => file.endsWith('.png'));
    return {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pngPictures),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Failed to fetch images' }),
    };
  }
}