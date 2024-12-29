// index.jsx
import React, { useState } from 'react';
import ETLVisualization from './visualization';

const ETLBasicsExample = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const OverviewTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-4 text-sm sm:text-base">
        ETL (Extract, Transform, Load) is a fundamental data engineering process that consists of three main steps:
      </p>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-sm sm:text-base">
        <li className="mb-2">
          <strong>Extract:</strong> Gathering data from source systems (databases, files, APIs)
        </li>
        <li className="mb-2">
          <strong>Transform:</strong> Cleaning, validating, and restructuring the data to match the target schema
        </li>
        <li className="mb-2">
          <strong>Load:</strong> Writing the processed data to a destination system
        </li>
      </ul>
      
      <h3 className="text-lg sm:text-xl font-bold mb-4">Pipeline Visualization</h3>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <ETLVisualization />
      </div>
    </div>
  );

  const ImplementationTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementation</h2>
      <p className="mb-4 text-sm sm:text-base">Here's a basic ETL pipeline implementation in Python:</p>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <pre className="language-python text-xs sm:text-sm">
          <code>{`import pandas as pd
import logging
from datetime import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ETLPipeline:
    def __init__(self, source_path, destination_path):
        self.source_path = source_path
        self.destination_path = destination_path
        
    def extract(self):
        logger.info("Starting data extraction")
        try:
            df = pd.read_csv(self.source_path)
            return df
        except Exception as e:
            logger.error(f"Error during extraction: {str(e)}")
            raise

    def transform(self, df):
        logger.info("Starting data transformation")
        try:
            # Clean data
            df = df.dropna()
            
            # Convert dates
            df['date'] = pd.to_datetime(df['date'])
            
            # Add derived columns
            df['year'] = df['date'].dt.year
            df['month'] = df['date'].dt.month
            
            return df
        except Exception as e:
            logger.error(f"Error during transformation: {str(e)}")
            raise

    def load(self, df):
        logger.info("Starting data load")
        try:
            df.to_csv(self.destination_path, index=False)
            logger.info("Data successfully loaded")
        except Exception as e:
            logger.error(f"Error during load: {str(e)}")
            raise`}</code>
        </pre>
      </div>
    </div>
  );

  const BestPracticesTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Best Practices</h2>
      <ul className="list-disc pl-4 sm:pl-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
        <li>
          <strong>Error Handling:</strong>
          <p>Implement robust error handling and logging at each stage</p>
        </li>
        <li>
          <strong>Data Validation:</strong>
          <p>Validate data quality at each stage of the pipeline</p>
        </li>
        <li>
          <strong>Monitoring:</strong>
          <p>Track pipeline performance and data quality metrics</p>
        </li>
        <li>
          <strong>Documentation:</strong>
          <p>Document data transformations and business rules</p>
        </li>
        <li>
          <strong>Testing:</strong>
          <p>Create unit tests for transformation logic</p>
        </li>
      </ul>
    </div>
  );

  const tabs = {
    overview: <OverviewTab />,
    implementation: <ImplementationTab />,
    bestPractices: <BestPracticesTab />
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Scrollable tabs container for mobile */}
      <div className="overflow-x-auto">
        <div className="flex space-x-2 sm:space-x-4 border-b min-w-max">
          {Object.keys(tabs).map(tabName => (
            <button
              key={tabName}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium capitalize whitespace-nowrap
                ${activeTab === tabName 
                  ? 'border-b-2 border-blue-500 text-blue-600' 
                  : 'text-gray-600 hover:text-blue-500'
                }`}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4">
        {tabs[activeTab]}
      </div>
    </div>
  );
};

export default ETLBasicsExample;