// index.jsx
import React, { useState } from 'react';

const SQLAggregationsExample = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const OverviewTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">SQL Aggregations: GROUP BY and Aggregate Functions</h2>
      <p className="mb-4 text-sm sm:text-base">
        Aggregation functions in SQL allow you to perform calculations on groups of rows.
        Combined with GROUP BY, they're powerful tools for data analysis.
      </p>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-sm sm:text-base">
        <li className="mb-2">Use aggregate functions (COUNT, SUM, AVG, MAX, MIN)</li>
        <li className="mb-2">Group data using GROUP BY</li>
        <li className="mb-2">Filter groups using HAVING</li>
        <li className="mb-2">Combine with WHERE clauses</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm sm:text-base text-blue-700">
          💡 Pro Tip: The ORDER of operations matters in SQL aggregations:
          FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
        </p>
      </div>
    </div>
  );

  const ExamplesTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Examples</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Basic Aggregation Functions</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Count total number of employees
SELECT COUNT(*) as total_employees 
FROM employees;

-- Calculate average salary
SELECT AVG(salary) as avg_salary 
FROM employees;

-- Find highest and lowest salaries
SELECT 
    MIN(salary) as min_salary,
    MAX(salary) as max_salary
FROM employees;`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">These functions operate on entire columns and return a single value.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. Using GROUP BY</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Count employees by department
SELECT 
    department,
    COUNT(*) as employee_count
FROM employees
GROUP BY department;

-- Average salary by department
SELECT 
    department,
    ROUND(AVG(salary), 2) as avg_salary,
    COUNT(*) as employee_count
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">GROUP BY splits the data into groups before applying aggregate functions.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. Using HAVING</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Find departments with average salary > 50000
SELECT 
    department,
    ROUND(AVG(salary), 2) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;

-- Departments with more than 5 employees
SELECT 
    department,
    COUNT(*) as employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5
ORDER BY employee_count DESC;`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">HAVING filters groups after aggregation, while WHERE filters rows before grouping.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Combining WHERE and GROUP BY</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-2">
            <pre className="text-xs sm:text-sm overflow-x-auto"><code className="language-sql">{`-- Average salary by department for recent hires
SELECT 
    department,
    ROUND(AVG(salary), 2) as avg_salary,
    COUNT(*) as employee_count
FROM employees
WHERE hire_date >= '2023-01-01'
GROUP BY department
HAVING COUNT(*) >= 3
ORDER BY avg_salary DESC;`}</code></pre>
          </div>
          <p className="text-sm text-gray-600">Combine WHERE and HAVING to filter both rows and groups.</p>
        </div>
      </div>
    </div>
  );

  const PracticeTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Practice Exercises</h2>
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Exercise 1: Basic Aggregation</h3>
          <p className="text-sm mb-2">Calculate the total sales and average order value from the orders table.</p>
          <div className="bg-white p-3 rounded border mb-2">
            <pre className="text-xs sm:text-sm"><code className="language-sql">{`-- Your solution here
SELECT 
    COUNT(*) as total_orders,
    SUM(amount) as total_sales,
    ROUND(AVG(amount), 2) as avg_order_value
FROM orders;`}</code></pre>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Exercise 2: GROUP BY</h3>
          <p className="text-sm mb-2">Find the number of orders and total sales for each customer in 2024, but only show customers with more than 5 orders.</p>
          <div className="bg-white p-3 rounded border mb-2">
            <pre className="text-xs sm:text-sm"><code className="language-sql">{`-- Your solution here
SELECT 
    customer_id,
    COUNT(*) as order_count,
    SUM(amount) as total_spent
FROM orders
WHERE YEAR(order_date) = 2024
GROUP BY customer_id
HAVING COUNT(*) > 5
ORDER BY total_spent DESC;`}</code></pre>
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

export default SQLAggregationsExample;