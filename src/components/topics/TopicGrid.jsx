// src/components/topics/TopicGrid.jsx
import React from 'react';
import TopicCard from './TopicCard';
import { useTopics } from '../../context/TopicContext';

const TopicGrid = () => {
  const { topics, searchQuery } = useTopics();

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTopics.map(topic => (
        <TopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicGrid;