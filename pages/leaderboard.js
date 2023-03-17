import {feathers} from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import LeaderboardLayout from '@/components/leaderboard-layout';

// Feathers Client
const app = feathers();
const restClient = rest('http://localhost:3030');
app.configure(restClient.fetch(fetch));
const expert = app.service('expert');
const topics = app.service('topics');

export async function getStaticProps() {
  const expertsData = await expert.find();
  const topicsData = await topics.find();

  return {
    props: {
      expertsData,
      topicsData,
    }
  };
}

export default function Leaderboard({ expertsData, topicsData }) {
  return (
    <LeaderboardLayout topics={topicsData} experts={expertsData} />
  );
}