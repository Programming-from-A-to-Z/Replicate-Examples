import Replicate from 'replicate';
import * as dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const version = '8e6975e5ed6174911a6ff3d60540dfd4844201974602551e10e9e87ab143d81e';
const model = 'meta/llama-2-7b-chat:' + version;
go();

async function go() {
  const input = {
    prompt: 'Help me with a thesis idea.',
    system_prompt: 'You are a student at ITP, Tisch School of the Arts, NYU.',
  };
  const output = await replicate.run(model, { input });
  console.log(output.join('').trim());
}
