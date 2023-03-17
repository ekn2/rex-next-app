import { feathers } from "@feathersjs/client";
import rest from '@feathersjs/rest-client';

const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const expert = app.service('expert');

export default async function handler(req, res) {
  const body = req.body;

  console.log('body: ', body);

  body.reputation = Number(body.reputation);
  body.joined = Number(body.joined);
  body.services = body.services.split(',');

  body.services = body.services.map((service) => {
    return service.trim();
  });

  console.log('body: ', body);

  let response = await expert.create(body);

  console.log(response);

  res.status(200).json({data: `Success!!`});
}