import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadExampleMetadata, getExampleComponent } from '../utils/exampleLoader';

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

        if (!loadedExamples || loadedExamples.length === 0) {
          setError('No examples available');
          return;
        }

        setExamples(loadedExamples);
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

  // Handle selecting a topic
  const handleTopicSelection = async (topic) => {
    try {
      if (topic) {
        const component = await getExampleComponent(topic.id);
        setSelectedTopic({ ...topic, component });
      } else {
        setSelectedTopic(null);
      }
    } catch (err) {
      console.error('Error loading topic:', err);
      setError('Failed to load topic content');
    }
  };

  const value = {
    examples: filteredExamples,
    selectedTopic,
    setSelectedTopic: handleTopicSelection,
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