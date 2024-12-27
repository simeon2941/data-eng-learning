// src/context/TopicContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { topics, examples } from '../data/index.js';  // Updated import

const TopicContext = createContext();

export function TopicProvider({ children }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const value = {
    topics,
    examples,
    selectedTopic,
    setSelectedTopic,
    searchQuery,
    setSearchQuery,
    isSidebarOpen,
    setSidebarOpen,
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