import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((n) => (
        <div key={n} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
          {/* Title Area */}
          <div className="flex items-start space-x-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-lg" />
            <div className="flex-1">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          </div>
          
          {/* Description */}
          <div className="space-y-2 mb-4">
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-5/6" />
          </div>
          
          {/* Footer */}
          <div className="flex justify-between items-center mt-4">
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;