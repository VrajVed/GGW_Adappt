#!/bin/bash
# Simple batch converter - reads .tsx/.ts files and removes TypeScript patterns

for file in $(find src -name "*.tsx" -o -name "*.ts" | grep -v node_modules); do
  js_file="${file%.tsx}.jsx"
  js_file="${js_file%.ts}.js"
  
  # Skip if JS version exists
  [ -f "$js_file" ] && continue
  
  echo "Converting: $file"
  
  # Read and process
  content=$(cat "$file")
  
  # Remove "use client"
  content=$(echo "$content" | sed 's/"use client"//g' | sed 's/"use client";//g')
  
  # Remove type annotations from function params (simple cases)
  content=$(echo "$content" | sed 's/: React\.ComponentProps<[^>]*>//g')
  content=$(echo "$content" | sed 's/: VariantProps<[^>]*>//g')
  content=$(echo "$content" | sed 's/& VariantProps<[^>]*>//g')
  
  # Remove interface definitions (simple)
  content=$(echo "$content" | sed '/^interface /,/^}/d')
  
  # Write to new file
  echo "$content" > "$js_file"
done

echo "Batch conversion complete!"
