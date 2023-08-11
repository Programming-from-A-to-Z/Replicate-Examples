import Replicate from 'replicate';

import dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const destination = 'shiffman/raanapbot';
const trainingDataUrl = process.env.TRAINING_DATA;
const modelOwner = 'replicate';
const modelName = 'llama-7b';
const modelVersion =
  '455d66312a66299fba685548fe24f66880f093007b927abd19f4356295f8577c';

async function go() {
  const training = await replicate.trainings.create(
    modelOwner,
    modelName,
    modelVersion,
    {
      destination,
      input: {
        train_data: trainingDataUrl,
      },
    }
  );
  console.log({ training });
  console.log(`URL: https://replicate.com/p/${training.id}`);
}

go();
