// src/utils/exampleLoader.js

export async function loadExampleMetadata() {
  console.log("Starting to load metadata...");
  try {
    const metadataFiles = import.meta.glob("../examples/*/*/*/metadata.js", {
      eager: true,
    });
    console.log("Found metadata files:", Object.keys(metadataFiles));

    const examples = Object.values(metadataFiles).map((module) => {
      console.log("Processing module:", module);
      return module.metadata;
    });

    console.log("Processed examples:", examples);
    return examples;
  } catch (error) {
    console.error("Error loading metadata:", error);
    return [];
  }
}
