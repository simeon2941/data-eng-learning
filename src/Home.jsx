import React from 'react';
import { useTopics } from '../context/TopicContext';
import TopicGrid from '../components/topics/TopicGrid';
import TopicDetail from './components/topics/TopicDetail';

const Home = () => {
  const { selectedTopic } = useTopics();

  return (
    <div className="max-w-7xl mx-auto">
      {selectedTopic ? <TopicDetail /> : <TopicGrid />}
    </div>
  );
};

export default Home;