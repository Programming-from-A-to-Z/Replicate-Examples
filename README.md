# Node.js Replicate Example

This repo contains a "hello world" example demonstrating the how to prompt a machine learning model hosted by Replicate via node.js. This example is for the [Programming from A to Z](https://github.com/Programming-from-A-to-Z/A2Z-F23) class at ITP, NYU. (Students in the class, contact me for your API key!)

```javascript
import Replicate from 'replicate';
import * as dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const version = '8e6975e5ed6174911a6ff3d60540dfd4844201974602551e10e9e87ab143d81e';
const model = 'meta/llama-2-7b-chat';
go();

async function go() {
  const input = {
    prompt: 'Help me with a thesis idea.',
    system_prompt: 'You are a student at ITP, Tisch School of the Arts, NYU.',
  };
  const output = await replicate.run(`${model}:${version}`, { input });
  console.log(output.join('').trim());
}
```

## Replicate

[Replicate](https://replicate.com/) is a platform for running machine learning models in the cloud from your own code. [Browse models](https://replicate.com/explore).

For detailed usage, setup, and more, here is the official [Replicate Documentation for Node.js](https://replicate.com/docs/get-started/nodejs).
