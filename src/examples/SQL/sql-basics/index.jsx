// index.jsx
import React, { useState } from 'react';

const SQLBasicsExample = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const OverviewTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">SQL Basics: SELECT Statements</h2>
      <p className="mb-4 text-sm sm:text-base">
        The SELECT statement is the most fundamental command in SQL, used to retrieve data from a database.
        In this guide, you'll learn how to:
      </p>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-sm sm:text-base">
        <li className="mb-2">Write basic SELECT statements</li>
        <li className="mb-2">Filter data using WHERE clauses</li>
        <li className="mb-2">Sort results using ORDER BY</li>
        <li className="mb-2">Limit results using LIMIT</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm sm:text-base text-blue-700">
          💡 Pro Tip: Always start with SELECT * to explore your data, but in production,
          only select the columns you actually need for better performance.
        </p>
      </div>
    </div>
  );

  const ExamplesTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Examples</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Basic SELECT Statement</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Select all columns from a table
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, salary 
FROM employees;`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">This retrieves all or specific columns from the employees table.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. Using WHERE Clause</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Filter records using WHERE
SELECT first_name, last_name, salary 
FROM employees
WHERE salary > 50000;

-- Multiple conditions
SELECT first_name, last_name, department 
FROM employees
WHERE department = 'Sales' 
  AND hire_date >= '2023-01-01';`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">The WHERE clause filters rows based on specified conditions.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. Sorting Results</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Sort by a single column
SELECT first_name, last_name, salary 
FROM employees
ORDER BY salary DESC;

-- Sort by multiple columns
SELECT first_name, last_name, department, salary 
FROM employees
ORDER BY department ASC, salary DESC;`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">ORDER BY sorts results in ascending (ASC) or descending (DESC) order.</p>
        </div>
      </div>
    </div>
  );

  const PracticeTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Practice Exercises</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Exercise 1: Basic SELECT</h3>
          <p className="text-sm mb-2">Write a query to select the name and price of all products in the 'products' table.</p>
          <div className="bg-white p-3 rounded border mb-2">
            <pre className="text-xs sm:text-sm"><code className="language-sql">{`-- Your solution here
SELECT name, price FROM products;`}</code></pre>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Exercise 2: Filtering</h3>
          <p className="text-sm mb-2">Find all employees in the IT department who were hired after 2023.</p>
          <div className="bg-white p-3 rounded border mb-2">
            <pre className="text-xs sm:text-sm"><code className="language-sql">{`-- Your solution here
SELECT first_name, last_name, hire_date 
FROM employees 
WHERE department = 'IT' 
  AND hire_date >= '2023-01-01';`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = {
    overview: <OverviewTab />,
    examples: <ExamplesTab />,
    practice: <PracticeTab />
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

export default SQLBasicsExample;