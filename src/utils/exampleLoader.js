// src/utils/exampleLoader.js

// Define your examples structure with their metadata inline
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
    path: "fundamentals/beginner/etl-basics",
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
    path: "analytics/intermediate/spark-analytics",
  },
];

// Load the component dynamically
async function loadExampleComponent(example) {
  try {
    let component;

    // In development, try to load from the examples directory
    if (import.meta.env.DEV) {
      component = await import(`../examples/${example.path}/index.jsx`);
    } else {
      // In production, load from the bundled components
      switch (example.id) {
        case "etl-basics":
          component = await import(
            "../examples/fundamentals/beginner/etl-basics/index.jsx"
          );
          break;
        case "spark-analytics":
          component = await import(
            "../examples/analytics/intermediate/spark-analytics/index.jsx"
          );
          break;
        default:
          throw new Error(`Unknown example: ${example.id}`);
      }
    }

    return component.default;
  } catch (error) {
    console.error(`Error loading component for ${example.id}:`, error);
    return null;
  }
}

export async function loadExampleMetadata() {
  console.log("Starting to load metadata...");
  try {
    // Return the static metadata
    const examples = [...EXAMPLES_DATA];
    console.log("Loaded examples:", examples);
    return examples;
  } catch (error) {
    console.error("Error loading metadata:", error);
    return [];
  }
}

// Helper function to get metadata for a specific example
export async function loadExampleMetadataById(id) {
  return EXAMPLES_DATA.find((example) => example.id === id) || null;
}

// Helper function to load a specific example when needed
export async function getExampleComponent(id) {
  const example = EXAMPLES_DATA.find((ex) => ex.id === id);
  if (!example) {
    console.error(`Example not found: ${id}`);
    return null;
  }
  return loadExampleComponent(example);
}
