# Using Replicate in Node.js for Machine Learning Models

Welcome to a simple example demonstrating the usage of Replicate with Node.js to interact with machine learning models in the cloud. This example is particularly designed for the "Programming from A to Z" class at ITP, NYU. For detailed information on the course and syllabus, kindly visit the [A2Z F23 GitHub Repository](https://github.com/Programming-from-A-to-Z/A2Z-F23).

## Example Overview

This example provides a concise demonstration on utilizing Replicate to communicate with a hosted machine learning model, and retrieve a response for a thesis idea based on a predefined prompt.

### Code Overview

````javascript
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

## Introduction to Replicate

[Replicate](https://replicate.com/) is a platform for running machine learning models in the cloud from your own code.

### Documentation

For detailed usage, setup, and other guidelines, refer to the official [Replicate Documentation for Node.js](https://replicate.com/docs/get-started/nodejs).
````
