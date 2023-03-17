import { feathers } from "@feathersjs/client";
import rest from '@feathersjs/rest-client';

const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const questions = app.service('questions');

export default async function handler(req, res) {
  const body = req.body;

  console.log('body: ', body);

  let response = await questions.patch(body.question_id, {
      $push: {
        answers: {
          author: body.expert,
          body: body.answer,
        }
      }
    }, {}
  );

  // let response = await questions.update(body.question_id, {
  //   $push: {
  //     answers: {
  //       author: body.expert,
  //       body: body.answer,
  //     }
  //   }
  // });

  console.log(response);

  res.status(200).json({data: `Success!!`});
}