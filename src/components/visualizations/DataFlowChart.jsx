// src/components/visualizations/DataFlowChart.jsx
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DataFlowChart = ({ data }) => {
  const [timeRange, setTimeRange] = useState('1h');

  const flowData = {
    '1h': [
      { time: '00:00', records: 1000, latency: 50 },
      { time: '00:15', records: 1200, latency: 55 },
      { time: '00:30', records: 800, latency: 45 },
      { time: '00:45', records: 1500, latency: 60 },
    ],
    '4h': [
      { time: '00:00', records: 4000, latency: 52 },
      { time: '01:00', records: 4200, latency: 54 },
      { time: '02:00', records: 3800, latency: 48 },
      { time: '03:00', records: 4500, latency: 58 },
    ],
    '24h': [
      { time: '00:00', records: 24000, latency: 53 },
      { time: '06:00', records: 28000, latency: 56 },
      { time: '12:00', records: 22000, latency: 49 },
      { time: '18:00', records: 26000, latency: 55 },
    ],
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${timeRange === '1h' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTimeRange('1h')}
        >
          1 Hour
        </button>
        <button
          className={`px-4 py-2 rounded ${timeRange === '4h' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTimeRange('4h')}
        >
          4 Hours
        </button>
        <button
          className={`px-4 py-2 rounded ${timeRange === '24h' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setTimeRange('24h')}
        >
          24 Hours
        </button>
      </div>

      <div className="h-64">
        <LineChart width={600} height={240} data={flowData[timeRange]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line 
            yAxisId="left" 
            type="monotone" 
            dataKey="records" 
            stroke="#8884d8" 
            name="Records Processed" 
          />
          <Line 
            yAxisId="right" 
            type="monotone" 
            dataKey="latency" 
            stroke="#82ca9d" 
            name="Latency (ms)" 
          />
        </LineChart>
      </div>
    </div>
  );
};

export default DataFlowChart;