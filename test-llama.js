import Replicate from 'replicate';
import * as dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

go();

async function go() {
  const output = await replicate.run(
    'zeke/nyu-llama-2-7b-chat-training-test:aae0f2ef9dd402d20aba3e83adcbb7ab8fb55fdc3081d14abb6aa082b181c981',
    {
      input: {
        prompt: 'mailbag ->',
        system_prompt: '',
      },
    }
  );
  console.log(output);
}
