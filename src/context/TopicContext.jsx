import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadExampleMetadata } from '../utils/exampleLoader';

const TopicContext = createContext();

export function TopicProvider({ children }) {
  const [examples, setExamples] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadInitialData() {
      try {
        console.log('Loading examples...');
        setLoading(true);
        const loadedExamples = await loadExampleMetadata();
        console.log('Loaded examples:', loadedExamples);

        if (!loadedExamples) {
          setError('Failed to load examples');
          return;
        }

        // Create a hard-coded set of examples for testing
        const testExamples = [
          {
            id: 'etl-basics',
            category: 'Fundamentals',
            title: 'ETL Basics',
            description: 'Learn the fundamentals of Extract, Transform, Load processes',
            difficulty: 'Beginner',
            order: 1,
            examples: ['etl-1']
          },
          {
            id: 'spark-analytics',
            category: 'Analytics',
            title: 'Spark Analytics Deep Dive',
            description: 'Learn advanced data analytics techniques using PySpark',
            difficulty: 'Intermediate',
            order: 2,
            examples: ['spark-1']
          }
        ];

        setExamples(loadedExamples.length > 0 ? loadedExamples : testExamples);
      } catch (err) {
        console.error('Failed to load examples:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadInitialData();
  }, []);

  // Filter examples based on search query
  const filteredExamples = examples.filter(example =>
    example?.title?.toLowerCase().includes(searchQuery?.toLowerCase() || '') ||
    example?.description?.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  );

  const value = {
    examples: filteredExamples,
    selectedTopic,
    setSelectedTopic,
    searchQuery,
    setSearchQuery,
    isSidebarOpen,
    setSidebarOpen,
    loading,
    error
  };

  return (
    <TopicContext.Provider value={value}>
      {children}
    </TopicContext.Provider>
  );
}

export const useTopics = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error('useTopics must be used within a TopicProvider');
  }
  return context;
};