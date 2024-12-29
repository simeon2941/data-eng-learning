// src/utils/exampleLoader.js

// Import examples explicitly
import ETLBasics from "../examples/fundamentals/beginner/etl-basics";
import SparkAnalytics from "../examples/analytics/intermediate/spark-analytics";
import etlMetadata from "../examples/fundamentals/beginner/etl-basics/metadata";
import sparkMetadata from "../examples/analytics/intermediate/spark-analytics/metadata";

// Map of all examples
const EXAMPLES = {
  "etl-basics": {
    component: ETLBasics,
    metadata: etlMetadata.metadata,
  },
  "spark-analytics": {
    component: SparkAnalytics,
    metadata: sparkMetadata.metadata,
  },
};

export async function loadExampleMetadata() {
  console.log("Starting to load metadata...");
  try {
    // Return all metadata
    const examples = Object.values(EXAMPLES).map((ex) => ex.metadata);
    console.log("Loaded examples:", examples);
    return examples;
  } catch (error) {
    console.error("Error loading metadata:", error);
    return [];
  }
}

export async function getExampleComponent(id) {
  try {
    const example = EXAMPLES[id];
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

// Helper function to get metadata for a specific example
export async function loadExampleMetadataById(id) {
  return EXAMPLES[id]?.metadata || null;
}
