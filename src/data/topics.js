// src/data/topics.js
export const topics = [
  {
    id: "etl-basics",
    category: "Fundamentals",
    title: "ETL Basics",
    description: "Learn the fundamentals of Extract, Transform, Load processes",
    difficulty: "Beginner",
    order: 1,
    examples: ["etl-1"], // This should match example IDs in examples.js
  },
  {
    id: "spark-analytics",
    category: "Analytics",
    title: "PySpark Analytics",
    description: "Advanced data analytics using PySpark",
    difficulty: "Intermediate",
    order: 2,
    examples: ["pyspark-groupby"],
  },
  {
    id: "data-warehouse",
    category: "Architecture",
    title: "Data Warehousing",
    description: "Modern data warehouse design and implementation",
    difficulty: "Advanced",
    order: 3,
    examples: ["data-warehouse"],
  },
  {
    id: "streaming",
    category: "Real-time",
    title: "Real-time Processing",
    description: "Streaming data processing with Kafka and PySpark",
    difficulty: "Advanced",
    order: 4,
    examples: ["streaming-kafka"],
  },
];
