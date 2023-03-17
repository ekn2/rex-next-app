import { feathers } from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import ExpertProfileLayout from '@/components/expert-profile-layout';

// Feathers Client
const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const topics = app.service('topics');

export async function getStaticProps() {
  let topicsData = await topics.find();

  return {
    props: {
      topicsData,
    }
  };
}

export default function ExpertProfile({ topicsData}) {
  return (
    <ExpertProfileLayout topics={topicsData} />
  );
}