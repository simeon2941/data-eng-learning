// src/components/visualizations/ETLPipeline.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ETLPipeline = ({ data }) => {
  const sampleData = [
    { name: 'Extract', value: 400 },
    { name: 'Transform', value: 300 },
    { name: 'Load', value: 200 },
  ];

  return (
    <div className="h-64">
      <LineChart width={600} height={240} data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ETLPipeline;