// index.jsx
import React, { useState } from 'react';
import SparkVisualization from './visualization';

const SparkAnalyticsExample = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const OverviewTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-4 text-sm sm:text-base">
        Apache Spark is a powerful analytics engine for large-scale data processing.
        This guide covers advanced analytics techniques including:
      </p>
      <ul className="list-disc pl-4 sm:pl-6 mb-6 text-sm sm:text-base">
        <li className="mb-2">Complex aggregations and window functions</li>
        <li className="mb-2">Performance optimization techniques</li>
        <li className="mb-2">Best practices for large-scale data processing</li>
      </ul>
      
      <h3 className="text-lg sm:text-xl font-bold mb-4">Performance Analysis</h3>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <SparkVisualization />
      </div>
    </div>
  );

  const ImplementationTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Implementation</h2>
      <p className="mb-4 text-sm sm:text-base">Here's an example of advanced PySpark analytics:</p>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <pre className="language-python text-xs sm:text-sm"><code>{`from pyspark.sql import SparkSession
from pyspark.sql import Window
from pyspark.sql.functions import *

# Initialize Spark session
spark = SparkSession.builder\\
    .appName("Advanced Analytics")\\
    .config("spark.sql.adaptive.enabled", "true")\\
    .getOrCreate()

# Read and prepare data
df = spark.read.parquet("sales_data.parquet")

# Complex aggregation with window functions
window_spec = Window.partitionBy("category")\\
    .orderBy("date")\\
    .rowsBetween(-6, 0)  # 7-day rolling window

df_analytics = df.withColumn(
    "rolling_avg_revenue",
    avg("revenue").over(window_spec)
).withColumn(
    "revenue_rank",
    rank().over(Window.partitionBy("category")
    .orderBy(desc("revenue")))
).withColumn(
    "pct_total",
    sum("revenue").over(window_spec) / 
    sum("revenue").over(Window.partitionBy("category"))
)

# Optimize performance
df_analytics.cache()

# Complex grouped analytics
result = df_analytics.groupBy("category").agg(
    avg("rolling_avg_revenue").alias("avg_revenue"),
    sum(when(col("revenue_rank") <= 10, col("revenue"))
        .otherwise(0)).alias("top_10_revenue"),
    count(when(col("pct_total") > 0.5, True))
        .alias("high_impact_days")
)`}</code></pre>
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-4">SQL Implementation</h3>
      <div className="bg-gray-50 p-2 sm:p-4 rounded-lg mb-6 overflow-x-auto">
        <pre className="language-sql text-xs sm:text-sm"><code>{`-- Equivalent SQL implementation
WITH windowed_sales AS (
  SELECT *,
    AVG(revenue) OVER (
      PARTITION BY category
      ORDER BY date
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as rolling_avg_revenue,
    RANK() OVER (
      PARTITION BY category
      ORDER BY revenue DESC
    ) as revenue_rank,
    SUM(revenue) OVER (
      PARTITION BY category
      ORDER BY date
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) / SUM(revenue) OVER (PARTITION BY category) as pct_total
  FROM sales_data
)
SELECT
  category,
  AVG(rolling_avg_revenue) as avg_revenue,
  SUM(CASE WHEN revenue_rank <= 10 THEN revenue ELSE 0 END) as top_10_revenue,
  COUNT(CASE WHEN pct_total > 0.5 THEN 1 END) as high_impact_days
FROM windowed_sales
GROUP BY category;`}</code></pre>
      </div>
    </div>
  );

  const OptimizationTab = () => (
    <div className="prose max-w-none">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Performance Optimization</h2>
      <ul className="list-disc pl-4 sm:pl-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
        <li>
          <strong>Caching Strategy:</strong>
          <p>Cache intermediate results when data is reused multiple times</p>
          <pre className="language-python text-xs sm:text-sm overflow-x-auto"><code>{`# Cache intermediate results
df_transformed.cache()

# Force cache materialization
df_transformed.count()

# Uncache when no longer needed
df_transformed.unpersist()`}</code></pre>
        </li>
        <li>
          <strong>Partition Optimization:</strong>
          <p>Optimize data partitioning for better parallel processing</p>
          <pre className="language-python text-xs sm:text-sm overflow-x-auto"><code>{`# Repartition data
df_optimized = df.repartition(
    "category"
).sortWithinPartitions("date")`}</code></pre>
        </li>
        <li>
          <strong>Query Optimization:</strong>
          <p>Use broadcast joins for small tables</p>
          <pre className="language-python text-xs sm:text-sm overflow-x-auto"><code>{`from pyspark.sql.functions import broadcast

# Broadcast small lookup table
result = df.join(
    broadcast(lookup_df),
    "category"
)`}</code></pre>
        </li>
      </ul>
    </div>
  );

  const tabs = {
    overview: <OverviewTab />,
    implementation: <ImplementationTab />,
    optimization: <OptimizationTab />
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

export default SparkAnalyticsExample;
