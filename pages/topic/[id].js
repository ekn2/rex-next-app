import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import QuestionsIndexLayout from '@/components/questions-index-layout';

// Feathers Client
const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const expert = app.service('expert');
const topics = app.service('topics');
const questions = app.service('questions');

export async function getStaticProps({ params }) {
  const expertsData = await expert.find();
  const topicData = await topics.get(params.id);
  const topicsData = await topics.find();
  const questionsData = await questions.find({ query: { topics: topicData.udc_code }});

  return {
    props: {
      expertsData,
      questionsData,
      topicData,
      topicsData,
    }
  };
}

// When building a Static site, this is required in order to use
// getStaticProps()
export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '640ed8e492e173f62d2bd1e3'}},
      {params: {id: '640ed9d292e173f62d2bd1e4'}},
      {params: {id: '640eda1092e173f62d2bd1e5'}}
    ],
    fallback: false
  }
}

export default function Topic({ topicData, topicsData, questionsData, expertsData }) {
  return (
    <QuestionsIndexLayout topics={topicsData} questions={questionsData} topic={topicData} experts={expertsData} />
  );
}