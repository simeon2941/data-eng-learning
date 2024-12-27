// src/components/visualizations/ExampleVisualization.jsx
import React from 'react';
import ETLPipeline from './ETLPipeline';
import DataWarehouse from './DataWarehouse';
import DataFlowChart from './DataFlowChart';

const visualizationComponents = {
  ETLPipeline,
  DataWarehouse,
  DataFlowChart,
};

const ExampleVisualization = ({ type, data }) => {
  const VisualizationComponent = visualizationComponents[type];

  if (!VisualizationComponent) {
    return (
      <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
        <span className="text-gray-500">Visualization type not found: {type}</span>
      </div>
    );
  }

  return <VisualizationComponent data={data} />;
};

export default ExampleVisualization;