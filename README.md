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

[Replicate](https://replicate.com/) is a platform for running machine learning models in the cloud from your own code.

Here are a few links to help you explore what is possible with generative AI models.

### Getting Started

* [Getting started with Replicate in Node.js](https://replicate.com/docs/get-started/nodejs)
* [Explore all models](https://replicate.com/explore)

NOTE: models prefixed with ✨ are currently popular in the community.

### Language Models

  * language
    * [llama-2-7b-chat](https://replicate.com/meta/llama-2-7b) (small)
    * [llama-2-13b-chat](https://replicate.com/meta/llama-2-13b) (medium)
    * ✨ [llama-2-70b-chat](https://replicate.com/meta/llama-2-70b) (large)
  * code
    * [codellama-7b-instruct](https://replicate.com/meta/codellama-7b) (small)
    * [codellama-13b-instruct](https://replicate.com/meta/codellama-13) (medium)
    * ✨ [codellama-34b-instruct](https://replicate.com/meta/codellama-34) (large)

### Images
  
  * ✨ [SDXL](https://replicate.com/stability-ai/sdxl)
  * ✨ [SDXL fine-tunes](https://replicate.com/collections/sdxl-fine-tunes)
    * make it emoji! [sdxl-emoji](https://replicate.com/fofr/sdxl-emoji)
    * make it tron! [sdxl-tron](https://replicate.com/fofr/sdxl-tron)
    * make it 70s wool!  [sdxl-woolitize](https://replicate.com/pwntus/sdxl-woolitize)
  * [Stable Diffusion 2.1](https://replicate.com/stability-ai/stable-diffusion)
  * ✨ [illusion](https://replicate.com/andreasjansson/illusion)
  * generate tileable images with [material_stable_diffusion](https://replicate.com/tommoore515/material_stable_diffusion)

### [Audio](https://replicate.com/collections/audio-generation)

  * For music, try [MusicGen](https://replicate.com/meta/musicgen) or [riffusion](https://replicate.com/riffusion/riffusion)
  * For voice, try [bark](https://replicate.com/suno-ai/bark) or [xtts](https://replicate.com/sigil-wen/xtts)
  * For voice transcription, try [whisperx](https://replicate.com/daanelson/whisperx)

### [Video](https://replicate.com/collections/text-to-video)

  * ✨ [Animate Diff](https://replicate.com/zsxkib/animate-diff)
  * ✨ [Hotshot XL](https://replicate.com/lucataco/hotshot-xl)
  * [Zeroscope v2](https://replicate.com/anotherjesse/zeroscope-v2-xl) -- companion guide: https://zeroscope.replicate.dev/

---

For detailed usage, setup, and more, here is the official [Replicate Documentation for Node.js](https://replicate.com/docs/get-started/nodejs).
