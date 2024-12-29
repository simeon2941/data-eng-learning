// visualization.jsx
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';

const ETLVisualization = () => {
  const [activeView, setActiveView] = useState('timeline');
  const [chartWidth, setChartWidth] = useState(0);
  
  const timelineData = [
    { stage: 'Extract', time: 120, records: 1000000 },
    { stage: 'Transform', time: 180, records: 950000 },
    { stage: 'Load', time: 90, records: 950000 },
  ];

  const performanceData = [
    { metric: 'CPU Usage', value: 65 },
    { metric: 'Memory Usage', value: 78 },
    { metric: 'Disk I/O', value: 45 },
    { metric: 'Network', value: 55 },
  ];

  // Update chart width based on container size
  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById('chart-container');
      if (container) {
        setChartWidth(container.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded 
            ${activeView === 'timeline' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveView('timeline')}
        >
          Pipeline Timeline
        </button>
        <button
          className={`px-3 sm:px-4 py-2 text-xs sm:text-sm rounded 
            ${activeView === 'performance' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveView('performance')}
        >
          Performance Metrics
        </button>
      </div>

      <div id="chart-container" className="h-64 sm:h-72 bg-white p-2 sm:p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          {activeView === 'timeline' ? (
            <LineChart data={timelineData}>
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
                dataKey="records" 
                stroke="#82ca9d" 
                name="Records Processed" 
              />
            </LineChart>
          ) : (
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="metric" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Utilization %" />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ETLVisualization;