// src/utils/exampleLoader.js

async function loadExample(category, name) {
  try {
    const module = await import(`../examples/${category}/${name}/index.jsx`);
    const metadata = await import(
      `../examples/${category}/${name}/metadata.js`
    );
    return {
      component: module.default,
      metadata: metadata.metadata,
    };
  } catch (error) {
    console.error(`Error loading example ${category}/${name}:`, error);
    return null;
  }
}

export async function loadExampleMetadata() {
  console.log("Starting to load metadata...");

  // Define your examples structure
  const examplesList = [
    { category: "analytics/intermediate", name: "spark-analytics" },
    { category: "fundamentals/beginner", name: "etl-basics" },
  ];

  try {
    const loadPromises = examplesList.map(async ({ category, name }) => {
      try {
        const metadata = await import(
          `../examples/${category}/${name}/metadata.js`
        );
        console.log(`Loaded metadata for ${category}/${name}:`, metadata);
        return metadata.metadata;
      } catch (error) {
        console.error(`Error loading metadata for ${category}/${name}:`, error);
        return null;
      }
    });

    const results = await Promise.all(loadPromises);
    const validExamples = results.filter(Boolean);

    console.log("Loaded examples:", validExamples);
    return validExamples;
  } catch (error) {
    console.error("Error loading metadata:", error);
    return [];
  }
}

// Helper function to load a specific example when needed
export async function loadExampleComponent(category, name) {
  try {
    const example = await loadExample(category, name);
    return example?.component || null;
  } catch (error) {
    console.error(
      `Error loading example component ${category}/${name}:`,
      error
    );
    return null;
  }
}

// Helper function to get metadata for a specific example
export async function loadExampleMetadataById(id) {
  const allExamples = await loadExampleMetadata();
  return allExamples.find((example) => example.id === id) || null;
}
