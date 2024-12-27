// src/data/examples.js
export const examples = {
  'etl-1': {
    id: 'etl-1',
    title: 'Basic ETL Pipeline',
    content: 'Understanding the basics of ETL pipelines and how they function in a data engineering ecosystem. This example demonstrates a modern ETL pipeline using Python and Pandas, with error handling and logging.',
    visualization: 'ETLPipeline',
    code: `# Modern ETL Pipeline with Error Handling
import pandas as pd
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ETLPipeline:
    def __init__(self, source_path, destination_path):
        self.source_path = source_path
        self.destination_path = destination_path`,
    interactive: true
  },
  'pyspark-groupby': {
    id: 'pyspark-groupby',
    title: 'PySpark GroupBy Operations',
    content: 'Learn how to perform complex aggregations using PySpark GroupBy operations. This example demonstrates various grouping techniques and window functions.',
    visualization: 'DataFlowChart',
    code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.window import Window

spark = SparkSession.builder.appName("GroupBy Example").getOrCreate()

# Read sample data
df = spark.read.parquet("sales_data.parquet")

# Basic GroupBy with multiple aggregations
sales_stats = df.groupBy("category").agg(
    count("order_id").alias("total_orders"),
    sum("amount").alias("total_revenue"),
    avg("amount").alias("avg_order_value")
)

# Window function example
window_spec = Window.partitionBy("category").orderBy("order_date")
df_with_running_total = df.withColumn(
    "running_total",
    sum("amount").over(window_spec)
)`,
    interactive: true
  },
  'data-warehouse': {
    id: 'data-warehouse',
    title: 'Data Warehouse Schema',
    content: 'Understanding modern data warehouse design patterns and best practices.',
    visualization: 'DataWarehouse',
    code: `-- Fact Table
CREATE TABLE fact_sales (
    sale_key BIGINT PRIMARY KEY,
    date_key INT,
    product_key INT,
    customer_key INT,
    sales_amount DECIMAL(19,4),
    quantity INT,
    FOREIGN KEY (date_key) REFERENCES dim_date(date_key),
    FOREIGN KEY (product_key) REFERENCES dim_product(product_key),
    FOREIGN KEY (customer_key) REFERENCES dim_customer(customer_key)
);`,
    interactive: true
  },
  'streaming-kafka': {
    id: 'streaming-kafka',
    title: 'Real-time Processing',
    content: 'Real-time data processing with Kafka and PySpark Streaming',
    visualization: 'DataFlowChart',
    code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *

spark = SparkSession.builder.appName("Streaming").getOrCreate()

# Read stream from Kafka
df = spark.readStream.format("kafka")
    .option("kafka.bootstrap.servers", "localhost:9092")
    .option("subscribe", "events")
    .load()`,
    interactive: true
  }
};

export const topics = [
  {
    id: 'etl-basics',
    category: 'Fundamentals',
    title: 'ETL Basics',
    description: 'Learn the fundamentals of Extract, Transform, Load processes',
    difficulty: 'Beginner',
    order: 1,
    examples: ['etl-1']
  },
  {
    id: 'spark-analytics',
    category: 'Analytics',
    title: 'PySpark Analytics',
    description: 'Advanced data analytics using PySpark',
    difficulty: 'Intermediate',
    order: 2,
    examples: ['pyspark-groupby']
  },
  {
    id: 'data-warehouse',
    category: 'Architecture',
    title: 'Data Warehousing',
    description: 'Modern data warehouse design and implementation',
    difficulty: 'Advanced',
    order: 3,
    examples: ['data-warehouse']
  },
  {
    id: 'streaming',
    category: 'Real-time',
    title: 'Real-time Processing',
    description: 'Streaming data processing with Kafka and PySpark',
    difficulty: 'Advanced',
    order: 4,
    examples: ['streaming-kafka']
  }
];