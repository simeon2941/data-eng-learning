// src/examples/fundamentals/beginner/data-quality/index.jsx
import React, { useState } from 'react';
import DataQualityVisualization from './visualization';

const DataQualityExample = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const OverviewTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-4 text-sm sm:text-base">
        Data quality testing is crucial for ensuring the reliability and trustworthiness of your data pipeline.
        This guide covers essential dimensions of data quality and how to implement automated testing.
      </p>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-sm sm:text-base">
        <li className="mb-2">
          <strong>Completeness:</strong> Ensuring all required data is present
        </li>
        <li className="mb-2">
          <strong>Accuracy:</strong> Verifying data correctness and precision
        </li>
        <li className="mb-2">
          <strong>Consistency:</strong> Checking for data uniformity across datasets
        </li>
        <li className="mb-2">
          <strong>Timeliness:</strong> Confirming data freshness and update frequency
        </li>
      </ul>
      
      <h3 className="text-lg sm:text-xl font-bold mb-4">Quality Metrics Dashboard</h3>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <DataQualityVisualization />
      </div>
    </div>
  );

  const ImplementationTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementation</h2>
      <p className="mb-4 text-sm sm:text-base">Here's an example implementation using Python and Great Expectations:</p>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <pre className="language-python text-xs sm:text-sm">
          <code>{`import pandas as pd
import great_expectations as ge
from datetime import datetime, timedelta

class DataQualityChecker:
    def __init__(self, df):
        self.df = ge.from_pandas(df)
        self.results = {}
        
    def check_completeness(self, columns):
        """Check for null values in specified columns"""
        for column in columns:
            result = self.df.expect_column_values_to_not_be_null(
                column,
                result_format={'result_format': 'COMPLETE'}
            )
            self.results[f'{column}_completeness'] = {
                'success': result.success,
                'percent_null': result.result['unexpected_percent']
            }
            
    def check_accuracy(self, numerical_columns):
        """Verify numerical values are within expected ranges"""
        for column in numerical_columns:
            stats = self.df[column].describe()
            result = self.df.expect_column_values_to_be_between(
                column,
                min_value=stats['mean'] - 3 * stats['std'],
                max_value=stats['mean'] + 3 * stats['std']
            )
            self.results[f'{column}_accuracy'] = {
                'success': result.success,
                'percent_outliers': result.result['unexpected_percent']
            }
            
    def check_consistency(self, category_columns):
        """Check categorical values against approved lists"""
        for column in category_columns:
            valid_values = self.df[column].unique().tolist()
            result = self.df.expect_column_values_to_be_in_set(
                column,
                value_set=valid_values
            )
            self.results[f'{column}_consistency'] = {
                'success': result.success,
                'invalid_values': result.result['unexpected_count']
            }
            
    def check_timeliness(self, timestamp_column, max_delay_hours=24):
        """Verify data freshness"""
        current_time = datetime.now()
        result = self.df.expect_column_values_to_be_between(
            timestamp_column,
            min_value=(current_time - timedelta(hours=max_delay_hours)),
            max_value=current_time
        )
        self.results['timeliness'] = {
            'success': result.success,
            'stale_records': result.result['unexpected_count']
        }
            
    def generate_report(self):
        """Generate summary report of all quality checks"""
        return pd.DataFrame.from_dict(self.results, orient='index')`}</code>
        </pre>
      </div>
    </div>
  );

  const BestPracticesTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Best Practices</h2>
      <ul className="list-disc pl-4 sm:pl-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
        <li>
          <strong>Automated Testing:</strong>
          <p>Implement automated quality checks as part of your CI/CD pipeline</p>
        </li>
        <li>
          <strong>Clear Documentation:</strong>
          <p>Document quality rules, thresholds, and remediation procedures</p>
        </li>
        <li>
          <strong>Monitoring:</strong>
          <p>Set up alerts for quality metric violations</p>
        </li>
        <li>
          <strong>Regular Reviews:</strong>
          <p>Periodically review and update quality rules</p>
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

export default DataQualityExample;