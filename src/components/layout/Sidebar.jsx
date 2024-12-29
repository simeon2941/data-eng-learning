// Sidebar.jsx
import React, { useState } from 'react';
import { Search, Database, Menu, X, Home, ChevronRight } from 'lucide-react';
import { useTopics } from '../../context/TopicContext';

const Sidebar = () => {
  const { 
    setSearchQuery,
    searchQuery, 
    isSidebarOpen, 
    setSidebarOpen,
    examples,
    loading,
    error,
    setSelectedTopic,
    selectedTopic
  } = useTopics();

  const examplesByCategory = examples?.reduce((acc, example) => {
    if (!example?.category) return acc;
    acc[example.category] = acc[example.category] || [];
    acc[example.category].push(example);
    return acc;
  }, {}) || {};

  const clearSearch = () => {
    setSearchQuery('');
    document.getElementById('search-input')?.focus();
  };

  const goHome = () => {
    setSelectedTopic(null);
    setSearchQuery('');
  };

  return (
    <div className={`
      ${isSidebarOpen ? 'w-full md:w-64' : 'w-full md:w-16'} 
      bg-white shadow-lg transition-all duration-300 flex flex-col
      fixed md:relative bottom-0 md:bottom-auto z-50 md:z-0
      h-16 md:h-screen
    `}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={goHome}
          className={`font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors flex items-center ${!isSidebarOpen && 'hidden'}`}
        >
          <Home size={20} className="mr-2" />
          <span className="hidden md:inline">DeMastery</span>
        </button>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
          title={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <Menu size={20} />
        </button>
      </div>
      
      {isSidebarOpen && (
        <div className="flex-1 flex flex-col overflow-hidden bg-white absolute md:relative w-full top-16 md:top-0 h-[calc(100vh-4rem)] md:h-auto">
          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <input
                id="search-input"
                type="text"
                placeholder="Search examples... (Ctrl+K)"
                className="w-full p-2 pl-8 pr-8 border rounded-lg bg-gray-50 focus:bg-white transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2 top-3 text-gray-400" size={16} />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-2 top-2 p-1 hover:bg-gray-100 rounded-full"
                >
                  <X size={16} className="text-gray-400" />
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="flex-1 overflow-y-auto px-4">
            <div className="sticky top-0 bg-white py-2">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                CATEGORIES
              </h2>
            </div>
            
            {loading && (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              </div>
            )}
            
            {error && (
              <div className="text-sm text-red-500 py-4">Error loading examples</div>
            )}
            
            {!loading && !error && Object.keys(examplesByCategory).length === 0 && (
              <div className="text-sm text-gray-500 py-4">No examples available</div>
            )}
            
            <div className="space-y-4 pb-4">
              {Object.entries(examplesByCategory).map(([category, categoryExamples]) => (
                <div key={category} className="space-y-1">
                  <div className="flex items-center text-sm font-medium text-gray-900">
                    <Database size={16} className="mr-2 text-gray-400" />
                    {category}
                    <span className="ml-2 text-xs text-gray-400">
                      ({categoryExamples.length})
                    </span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {categoryExamples.map(example => (
                      <button
                        key={example.id}
                        onClick={() => {
                          setSelectedTopic(example);
                          if (window.innerWidth < 768) {
                            setSidebarOpen(false);
                          }
                        }}
                        className={`w-full text-left group flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 ${
                          selectedTopic?.id === example.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                        }`}
                      >
                        <span className="text-sm truncate">{example.title}</span>
                        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            example.difficulty === 'Beginner' ? 'bg-green-50 text-green-700' :
                            example.difficulty === 'Intermediate' ? 'bg-blue-50 text-blue-700' :
                            'bg-purple-50 text-purple-700'
                          }`}>
                            {example.difficulty}
                          </span>
                          <ChevronRight size={14} className="ml-1 text-gray-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;