// src/components/visualizations/DataWarehouse.jsx
import React, { useState } from 'react';

const DataWarehouse = ({ data }) => {
  const [selectedLayer, setSelectedLayer] = useState(null);

  const layers = [
    {
      id: 'raw',
      name: 'Raw Layer',
      description: 'Landing zone for raw data files',
      color: 'bg-blue-100 hover:bg-blue-200'
    },
    {
      id: 'staging',
      name: 'Staging Layer',
      description: 'Data validation and transformation',
      color: 'bg-green-100 hover:bg-green-200'
    },
    {
      id: 'core',
      name: 'Core Layer',
      description: 'Normalized and cleansed data',
      color: 'bg-yellow-100 hover:bg-yellow-200'
    },
    {
      id: 'mart',
      name: 'Data Marts',
      description: 'Business-specific views',
      color: 'bg-purple-100 hover:bg-purple-200'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {layers.map(layer => (
          <button
            key={layer.id}
            className={`p-4 rounded-lg ${layer.color} ${
              selectedLayer === layer.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedLayer(layer.id)}
          >
            <h3 className="font-semibold">{layer.name}</h3>
          </button>
        ))}
      </div>

      {selectedLayer && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">
            {layers.find(l => l.id === selectedLayer).name}
          </h3>
          <p className="text-gray-600">
            {layers.find(l => l.id === selectedLayer).description}
          </p>
        </div>
      )}
    </div>
  );
};

export default DataWarehouse;