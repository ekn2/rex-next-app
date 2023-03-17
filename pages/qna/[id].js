import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import QnALayout from '@/components/qna-layout';

// Feathers Client
const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const expert = app.service('expert');
const topics = app.service('topics');
const questions = app.service('questions');

export async function getStaticProps({ params }) {
  const expertsData = await expert.find();
  const questionData = await questions.get(params.id);
  const topicsData = await topics.find();

  return {
    props: {
      expertsData,
      questionData,
      topicsData,
    }
  };
}

// When building a Static site, this is required in order to use
// getStaticProps()
export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: '6404d37c6f0aeac046c4903d'}},
      {params: {id: '6404d5006f0aeac046c4903e'}},
    ],
    fallback: false
  }
}

export default function QnA({ topicsData, questionData, expertsData }) {
  return (
    <QnALayout topics={topicsData} question={questionData} experts={expertsData} />
  );
}