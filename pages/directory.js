import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import DirectoryLayout from '@/components/directory-layout';

// Feathers Client
const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const expert = app.service('expert');
const topics = app.service('topics');

export async function getStaticProps() {
  const expertsData = await expert.find()
  const topicsData = await topics.find();

  return {
    props: {
      expertsData,
      topicsData,
    }
  };
}

export default function Directory({ expertsData, topicsData }) {
  return (
    <DirectoryLayout topics={topicsData} experts={expertsData} />
  );
}