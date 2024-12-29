// TopicCard.jsx
import React from 'react';
import { BookOpen, Clock, Tag } from 'lucide-react';
import { useTopics } from '../../context/TopicContext';

const TopicCard = ({ example }) => {
  const { setSelectedTopic } = useTopics();

  const difficultyColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-100',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-100'
  };

  const iconColors = {
    Beginner: 'bg-emerald-100 text-emerald-600',
    Intermediate: 'bg-blue-100 text-blue-600',
    Advanced: 'bg-purple-100 text-purple-600'
  };

  return (
    <div
      onClick={() => setSelectedTopic(example)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden w-full"
    >
      <div className="p-4 sm:p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className={`p-2 sm:p-3 rounded-lg ${iconColors[example.difficulty]}`}>
            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate">
              {example.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">{example.description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4">
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <Tag size={14} className="mr-1" />
            <span className="truncate">{example.category}</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm">
            <Clock size={14} className="mr-1" />
            {example.estimatedTime || `${example.time} minutes`}
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <span className={`text-xs px-2 sm:px-3 py-1 rounded-full ${difficultyColors[example.difficulty]} font-medium`}>
            {example.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;