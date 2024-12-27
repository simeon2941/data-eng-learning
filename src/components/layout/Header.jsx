import React from 'react';
import { Bell, User } from 'lucide-react';
import { useTopics } from '../../context/TopicContext';

const Header = () => {
  const { selectedTopic, setSelectedTopic } = useTopics();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {selectedTopic && (
              <>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Back to Topics
                </button>
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-gray-900">{selectedTopic.title}</span>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;