import React from 'react';
import { Search, Database, Menu } from 'lucide-react';
import { useTopics } from '../../context/TopicContext';

const Sidebar = () => {
  const { setSearchQuery, isSidebarOpen, setSidebarOpen } = useTopics();
  const categories = ['Fundamentals', 'Architecture', 'Performance', 'Security'];

  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300`}>
      <div className="p-4 flex items-center justify-between">
        <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>DeMastery</h1>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>
      </div>
      
      {isSidebarOpen && (
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search topics..."
              className="w-full p-2 pl-8 border rounded-lg"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2 top-3 text-gray-400" size={16} />
          </div>
          
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">CATEGORIES</h2>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  className="w-full text-left p-2 hover:bg-gray-100 rounded-lg text-sm flex items-center"
                >
                  <Database size={16} className="mr-2" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

