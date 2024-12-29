// src/utils/exampleLoader.js
// Import components statically
import ETLVisualization from "../examples/fundamentals/beginner/etl-basics/visualization.jsx";
import SparkVisualization from "../examples/analytics/intermediate/spark-analytics/visualization.jsx";

// Static examples data
const EXAMPLES_DATA = [
  {
    id: "etl-basics",
    category: "Fundamentals",
    title: "ETL Basics",
    description: "Learn the fundamentals of Extract, Transform, Load processes",
    difficulty: "Beginner",
    topics: ["ETL", "Data Pipeline", "Python", "Pandas"],
    prerequisites: ["Basic Python knowledge", "Understanding of CSV files"],
    order: 1,
    created: "2024-01-01",
    updated: "2024-03-15",
    author: "John Doe",
    estimatedTime: "30 minutes",
    visualization: "ETLPipeline",
    component: ETLVisualization,
  },
  {
    id: "spark-analytics",
    category: "Analytics",
    title: "Spark Analytics Deep Dive",
    description: "Learn advanced data analytics techniques using PySpark",
    difficulty: "Intermediate",
    topics: ["Spark", "Analytics", "Big Data"],
    prerequisites: ["Python knowledge", "Basic SQL"],
    order: 2,
    created: "2024-01-15",
    updated: "2024-03-20",
    author: "Jane Smith",
    estimatedTime: "45 minutes",
    visualization: "DataFlowChart",
    component: SparkVisualization,
  },
];

export async function loadExampleMetadata() {
  console.log("Starting to load metadata...");
  // Return metadata without the component field
  return EXAMPLES_DATA.map(({ component, ...rest }) => rest);
}

export async function getExampleComponent(id) {
  try {
    const example = EXAMPLES_DATA.find((ex) => ex.id === id);
    if (!example) {
      console.error(`Example not found: ${id}`);
      return null;
    }
    return example.component;
  } catch (error) {
    console.error(`Error loading component for ${id}:`, error);
    return null;
  }
}
