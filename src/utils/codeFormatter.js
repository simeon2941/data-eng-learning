// src/utils/codeFormatter.js
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";

export function formatCode(code, language) {
  try {
    return highlight(code, languages[language], language);
  } catch (error) {
    console.error(`Error formatting code for language: ${language}`, error);
    return code;
  }
}
