import Replicate from "replicate";
import * as dotenv from "dotenv";
import fetch from "node-fetch";
import { createWriteStream } from "fs";

dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

go();

async function go() {
  const model =
    "stability-ai/sdxl:1bfb924045802467cf8869d96b231a12e6aa994abfe37e337c63a4e49a8c6c41";

  // See prompt examples here: https://replicate.com/stability-ai/sdxl/examples
  const input = {
    prompt:
      "Nintendo game cartridge for a video game named 'Programming from A to Z', cartridge design, branding, packaging, typography",
    negative_prompt: "blurry, low resolution, low quality, low fidelity", // Things to NOT include in the image.
    width: 1024,
    height: 1024,
    // seed: 42,  // Pin the random number generator to a specific seed.
    scheduler: "DDIM", // Denoising algorithm. Try "K_EULER", or "KerrasDPM"
    num_inference_steps: 30, // Less steps typically means faster generation, but lower quality. Start with 10, work your way up to 50 to get a feel for how it works.
    // SDXL introduced the new concept of a "refiner model". This is a secondary
    // model that takes a noisy/incomplete image, and turns it into something
    // a little more polished.
    // For best results, make this ~20% of the inference steps.Comment out the next 2 lines to disable the refiner model.
    refine_steps: 8,
    refine: "expert_ensemble_refiner",
  };
  const output = await replicate.run(model, { input });
  await downloadImage(output[0], "sdxl-image.png");
  console.log(output);
}

async function downloadImage(url, path) {
  const response = await fetch(url);
  const fileStream = createWriteStream(path);
  response.body.pipe(fileStream);
}
