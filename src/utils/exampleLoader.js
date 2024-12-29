// src/utils/exampleLoader.js

// Explicitly import all example components and metadata
const EXAMPLES = {
  'etl-basics': {
    metadata: async () => (await import('@/examples/fundamentals/beginner/etl-basics/metadata.js')).metadata,
    component: async () => (await import('@/examples/fundamentals/beginner/etl-basics/index.jsx')).default
  },
  'spark-analytics': {
    metadata: async () => (await import('@/examples/analytics/intermediate/spark-analytics/metadata.js')).metadata,
    component: async () => (await import('@/examples/analytics/intermediate/spark-analytics/index.jsx')).default
  }
};

export async function loadExampleMetadata() {
  console.log("Starting to load metadata...");
  try {
    const loadedExamples = await Promise.all(
      Object.entries(EXAMPLES).map(async ([id, { metadata }]) => {
        try {
          const exampleMetadata = await metadata();
          return exampleMetadata;
        } catch (error) {
          console.error(`Error loading metadata for ${id}:`, error);
          return null;
        }
      })
    );

    const validExamples = loadedExamples.filter(Boolean);
    console.log("Loaded examples:", validExamples);
    return validExamples;
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
    return await example.component();
  } catch (error) {
    console.error(`Error loading component for ${id}:`, error);
    return null;
  }
}