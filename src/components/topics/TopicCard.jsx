// src/components/topics/TopicCard.jsx
import React from 'react';
import { Book } from 'lucide-react';
import { useTopics } from '../../context/TopicContext';

const TopicCard = ({ topic }) => {
  const { setSelectedTopic } = useTopics();

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => setSelectedTopic(topic)}
    >
      <div className="flex items-center mb-4">
        <Book className="text-blue-500 mr-2" size={24} />
        <h2 className="text-xl font-semibold">{topic.title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{topic.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{topic.category}</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {topic.difficulty}
        </span>
      </div>
    </div>
  );
};

export default TopicCard;