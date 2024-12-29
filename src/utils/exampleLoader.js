// src/utils/exampleLoader.js

// Define a list of available examples to ensure predictable loading in production
const AVAILABLE_EXAMPLES = {
  "etl-basics": {
    metadata: () =>
      import("@/examples/fundamentals/beginner/etl-basics/metadata.js"),
    component: () =>
      import("@/examples/fundamentals/beginner/etl-basics/index.jsx"),
  },
  "data-quality": {
    metadata: () =>
      import("@/examples/fundamentals/beginner/data-quality/metadata.js"),
    component: () =>
      import("@/examples/fundamentals/beginner/data-quality/index.jsx"),
  },
  "spark-analytics": {
    metadata: () =>
      import("@/examples/analytics/intermediate/spark-analytics/metadata.js"),
    component: () =>
      import("@/examples/analytics/intermediate/spark-analytics/index.jsx"),
  },
};

// Cache for loaded examples
const exampleCache = new Map();

/**
 * Validates example metadata
 */
function validateMetadata(metadata) {
  const requiredFields = [
    "id",
    "category",
    "title",
    "description",
    "difficulty",
    "topics",
    "prerequisites",
  ];

  return requiredFields.every((field) => {
    const value = metadata[field];
    if (value === undefined || value === null) {
      console.warn(`Missing required field: ${field} in example metadata`);
      return false;
    }
    return true;
  });
}

/**
 * Loads metadata for a single example
 */
async function loadSingleExample(exampleId) {
  try {
    const example = AVAILABLE_EXAMPLES[exampleId];
    if (!example) {
      throw new Error(`Example ${exampleId} not found`);
    }

    // Check cache first
    if (exampleCache.has(exampleId)) {
      return exampleCache.get(exampleId);
    }

    const module = await example.metadata();
    if (!module.metadata) {
      throw new Error(`No metadata found for ${exampleId}`);
    }

    // Validate metadata
    if (!validateMetadata(module.metadata)) {
      throw new Error(`Invalid metadata for ${exampleId}`);
    }

    // Cache the metadata
    exampleCache.set(exampleId, module.metadata);

    return module.metadata;
  } catch (err) {
    console.error(`Failed to load metadata for ${exampleId}:`, err);
    return null;
  }
}

/**
 * Loads all example metadata
 */
export async function loadExampleMetadata() {
  try {
    const examples = await Promise.all(
      Object.keys(AVAILABLE_EXAMPLES).map(loadSingleExample)
    );

    return examples.filter(Boolean).sort((a, b) => {
      if (a.category !== b.category) {
        return a.category.localeCompare(b.category);
      }
      return (a.order || 0) - (b.order || 0);
    });
  } catch (err) {
    console.error("Error loading examples:", err);
    throw new Error("Failed to load example metadata");
  }
}

/**
 * Loads an example component
 */
export async function getExampleComponent(exampleId) {
  try {
    const example = AVAILABLE_EXAMPLES[exampleId];
    if (!example) {
      throw new Error(`Example ${exampleId} not found`);
    }

    const module = await example.component();

    // Load dependencies if any
    const metadata = await loadSingleExample(exampleId);
    const dependencies = metadata?.dependencies
      ? await Promise.all(
          metadata.dependencies.map(async (depId) => {
            try {
              const dep = AVAILABLE_EXAMPLES[depId];
              if (!dep) return null;

              const depModule = await dep.component();
              return {
                id: depId,
                component: depModule.default,
              };
            } catch (err) {
              console.warn(`Failed to load dependency ${depId}:`, err);
              return null;
            }
          })
        )
      : [];

    return {
      component: module.default,
      dependencies: dependencies.filter(Boolean),
    };
  } catch (err) {
    console.error(`Failed to load component for ${exampleId}:`, err);
    throw new Error(`Failed to load example: ${err.message}`);
  }
}

/**
 * Gets styling information for difficulty levels
 */
export function getDifficultyInfo(difficulty) {
  const difficultyStyles = {
    Beginner: {
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    Intermediate: {
      color: "text-blue-700",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    Advanced: {
      color: "text-purple-700",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
  };

  return difficultyStyles[difficulty] || difficultyStyles.Beginner;
}

/**
 * Gets all examples for a specific category
 */
export async function getExamplesByCategory(category) {
  const allExamples = await loadExampleMetadata();
  return allExamples.filter(
    (example) => example.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Checks if all prerequisites are met
 */
export function checkPrerequisites(exampleId, completedExamples = []) {
  if (!exampleId || !completedExamples) return true;

  const example = exampleCache.get(exampleId);
  if (!example?.dependencies) return true;

  return example.dependencies.every((depId) =>
    completedExamples.includes(depId)
  );
}

/**
 * Clears the example cache
 */
export function clearExampleCache() {
  exampleCache.clear();
}
