import {feathers} from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import QuestionsIndexLayout from "@/components/questions-index-layout";

// Feathers Client
const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const expert = app.service('expert');
const questions = app.service('questions');
const topics = app.service('topics');

// Get Properties from Feathers Server
export async function getStaticProps() {
  const expertsData = await expert.find();
  const questionsData = await questions.find();
  const topicsData = await topics.find();

  return {
    props: {
      expertsData,
      questionsData,
      topicsData,
    }
  };
}

export default function Questions(props) {
  return (
    <QuestionsIndexLayout topics={props.topicsData} questions={props.questionsData} experts={props.expertsData} />
  );
}