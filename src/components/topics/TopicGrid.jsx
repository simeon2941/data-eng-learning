import React from 'react';
import TopicCard from './TopicCard';
import { useTopics } from '../../context/TopicContext';
import { BookOpen } from 'lucide-react';

const TopicGrid = () => {
  const { examples, loading, error, searchQuery } = useTopics();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-500">Loading examples...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center text-red-500">
          <p>Error loading examples: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          Welcome to DeMastery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master data engineering concepts through bite-sized examples
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {examples.map(example => (
          <TopicCard key={example.id} example={example} />
        ))}
      </div>

      {/* Empty State */}
      {examples.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchQuery ? 'No matching examples found' : 'No examples available'}
          </h3>
          <p className="text-gray-500">
            {searchQuery 
              ? 'Try adjusting your search terms or browse all examples'
              : 'Check back soon for new content!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default TopicGrid;