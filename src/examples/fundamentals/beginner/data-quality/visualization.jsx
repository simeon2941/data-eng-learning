// src/examples/fundamentals/beginner/data-quality/visualization.jsx
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const DataQualityVisualization = () => {
  const [activeView, setActiveView] = useState('metrics');
  
  const qualityMetrics = [
    { dimension: 'Completeness', score: 95, threshold: 90 },
    { dimension: 'Accuracy', score: 88, threshold: 85 },
    { dimension: 'Consistency', score: 92, threshold: 88 },
    { dimension: 'Timeliness', score: 96, threshold: 85 },
    { dimension: 'Uniqueness', score: 98, threshold: 95 }
  ];

  const trendData = [
    { week: 'Week 1', completeness: 91, accuracy: 85, consistency: 88 },
    { week: 'Week 2', completeness: 93, accuracy: 86, consistency: 90 },
    { week: 'Week 3', completeness: 94, accuracy: 87, consistency: 91 },
    { week: 'Week 4', completeness: 95, accuracy: 88, consistency: 92 }
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded 
            ${activeView === 'metrics' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveView('metrics')}
        >
          Current Metrics
        </button>
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded 
            ${activeView === 'trends' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveView('trends')}
        >
          Quality Trends
        </button>
      </div>

      <div className="h-64 sm:h-72 bg-white p-2 sm:p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          {activeView === 'metrics' ? (
            <BarChart data={qualityMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dimension" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#82ca9d" name="Current Score" />
              <Bar dataKey="threshold" fill="#8884d8" name="Threshold" />
            </BarChart>
          ) : (
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="completeness" 
                stroke="#82ca9d" 
                name="Completeness" 
              />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#8884d8" 
                name="Accuracy" 
              />
              <Line 
                type="monotone" 
                dataKey="consistency" 
                stroke="#ffc658" 
                name="Consistency" 
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataQualityVisualization;