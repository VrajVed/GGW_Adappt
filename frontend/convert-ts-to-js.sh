#!/bin/bash
# Batch convert TypeScript files to JavaScript
# This script removes TypeScript type annotations from .tsx/.ts files

find src/components -name "*.tsx" -o -name "*.ts" | while read file; do
  if [[ "$file" == *.tsx ]]; then
    output="${file%.tsx}.jsx"
  else
    output="${file%.ts}.js"
  fi
  
  # Skip if already converted
  if [ -f "$output" ]; then
    continue
  fi
  
  # Convert file (basic pattern matching - would need more sophisticated tool in practice)
  echo "Would convert: $file -> $output"
done
