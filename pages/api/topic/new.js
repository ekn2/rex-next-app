import {feathers} from "@feathersjs/client";
import rest from '@feathersjs/rest-client';

const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const topics = app.service('topics');

export default async function handler(req, res) {
  const body = req.body;

  console.log('body: ', body);

  let response = await topics.create(body);

  console.log(response);

  res.status(200).json({data: `Success!!`});
}