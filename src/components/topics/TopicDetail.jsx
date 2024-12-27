// src/components/topics/TopicDetail.jsx
import React from 'react';
import { useTopics } from '../../context/TopicContext';
import ExampleVisualization from '../visualizations/ExampleVisualization';

const TopicDetail = () => {
  const { selectedTopic, examples } = useTopics();

  if (!selectedTopic) return null;

  // Filter out any undefined examples
  const topicExamples = selectedTopic.examples
    .map(exampleId => examples[exampleId])
    .filter(example => example !== undefined);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-6">{selectedTopic.title}</h1>
      <p className="text-gray-600 mb-8">{selectedTopic.description}</p>
      
      <div className="space-y-8">
        {topicExamples.length > 0 ? (
          topicExamples.map(example => (
            <div key={example.id} className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">{example.title}</h2>
              <p className="text-gray-600 mb-6">{example.content}</p>
              
              {example.code && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <pre className="language-javascript">
                    <code>{example.code}</code>
                  </pre>
                </div>
              )}
              
              {example.visualization && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <ExampleVisualization type={example.visualization} data={example} />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No examples available for this topic.
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicDetail;