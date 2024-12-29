// visualization.jsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

const SparkVisualization = () => {
  const [activeView, setActiveView] = useState('performance');
  
  const performanceData = [
    { stage: 'Data Loading', time: 25, memory: 15 },
    { stage: 'Transformations', time: 45, memory: 35 },
    { stage: 'Window Functions', time: 60, memory: 45 },
    { stage: 'Aggregations', time: 30, memory: 25 },
    { stage: 'Result Writing', time: 20, memory: 10 },
  ];

  const resourceData = [
    { resource: 'CPU Usage', optimized: 65, baseline: 85 },
    { resource: 'Memory Usage', optimized: 55, baseline: 75 },
    { resource: 'Shuffle Read', optimized: 40, baseline: 70 },
    { resource: 'Shuffle Write', optimized: 35, baseline: 65 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded 
            ${activeView === 'performance' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveView('performance')}
        >
          Processing Time
        </button>
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded 
            ${activeView === 'resources' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveView('resources')}
        >
          Resource Usage
        </button>
      </div>

      <div className="h-64 sm:h-72 bg-white p-2 sm:p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          {activeView === 'performance' ? (
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="time" 
                stroke="#8884d8" 
                name="Processing Time (s)" 
              />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="memory" 
                stroke="#82ca9d" 
                name="Memory Usage (GB)" 
              />
            </LineChart>
          ) : (
            <BarChart data={resourceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="resource" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="optimized" fill="#82ca9d" name="Optimized" />
              <Bar dataKey="baseline" fill="#8884d8" name="Baseline" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SparkVisualization;