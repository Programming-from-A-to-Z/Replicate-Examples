import Replicate from 'replicate';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import { createWriteStream } from 'fs';

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

go();

async function go() {
  const model =
    'stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf';
  const input = {
    prompt: 'An interactive telecommunications thesis project.',
  };
  const output = await replicate.run(model, { input });
  await downloadImage(output[0], 'image.png');
  console.log(output);
}

async function downloadImage(url, path) {
  const response = await fetch(url);
  const fileStream = createWriteStream(path);
  response.body.pipe(fileStream);
}
