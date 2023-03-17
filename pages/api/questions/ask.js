import {feathers} from "@feathersjs/client";
import rest from '@feathersjs/rest-client';

const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const questions = app.service('questions');

export default async function handler(req, res) {
  const body = req.body;

  console.log('body: ', body);

  body.timestamp = Date.now();
  body.interested_count = Number(body.interested_count);
  body.answers_count = Number(body.answers_count);
  body.views_count = Number(body.views_count);

  console.log(body);

  let response = await questions.create(body);

  console.log(response);

  res.status(200).json({data: `Success!!`});
}