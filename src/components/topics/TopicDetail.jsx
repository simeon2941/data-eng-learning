import React, { useState, useEffect, Suspense } from 'react';
import { useTopics } from '../../context/TopicContext';
import { ChevronLeft, Clock, BookOpen, Tag } from 'lucide-react';

// Map of example paths to maintain dynamic imports
const EXAMPLE_PATHS = {
  'etl-basics': {
    index: () => import('@/examples/fundamentals/beginner/etl-basics/index.jsx'),
    metadata: () => import('@/examples/fundamentals/beginner/etl-basics/metadata.js')
  },
  'spark-analytics': {
    index: () => import('@/examples/analytics/intermediate/spark-analytics/index.jsx'),
    metadata: () => import('@/examples/analytics/intermediate/spark-analytics/metadata.js')
  }
};

const TopicDetail = () => {
  const { selectedTopic, setSelectedTopic } = useTopics();
  const [exampleContent, setExampleContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedTopic) return;

    const loadExampleContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Get the dynamic import functions for this example
        const exampleImports = EXAMPLE_PATHS[selectedTopic.id];
        
        if (!exampleImports) {
          throw new Error('Example path not found');
        }

        // Dynamically import all files
        const [indexModule, metadataModule] = await Promise.all([
          exampleImports.index(),
          exampleImports.metadata()
        ]);

        setExampleContent({
          Component: indexModule.default,
          metadata: metadataModule.default
        });
      } catch (err) {
        console.error('Error loading example:', err);
        setError('Failed to load example content. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadExampleContent();
  }, [selectedTopic]);

  if (!selectedTopic) return null;

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-8">
        <button
          onClick={() => setSelectedTopic(null)}
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Examples
        </button>
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 p-8">
      {/* Header with back button */}
      <button
        onClick={() => setSelectedTopic(null)}
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Examples
      </button>

      {/* Topic Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{selectedTopic.title}</h1>
          <p className="text-gray-600">{selectedTopic.description}</p>
          
          {/* Metadata */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={16} className="mr-2" />
              {exampleContent?.metadata?.estimatedTime || '30 minutes'}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Tag size={16} className="mr-2" />
              {exampleContent?.metadata?.category || 'General'}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <BookOpen size={16} className="mr-2" />
              {exampleContent?.metadata?.difficulty || 'Beginner'}
            </div>
          </div>

          {/* Prerequisites if available */}
          {exampleContent?.metadata?.prerequisites && exampleContent.metadata.prerequisites.length > 0 && (
            <div className="pt-4">
              <h3 className="text-sm font-medium text-gray-700">Prerequisites</h3>
              <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                {exampleContent.metadata.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Example Content */}
      <div className="bg-white rounded-lg shadow-sm">
        {exampleContent ? (
          <Suspense fallback={<div className="p-6">Loading content...</div>}>
            <exampleContent.Component />
          </Suspense>
        ) : (
          <div className="p-6 text-gray-500">
            Example content not available.
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicDetail;