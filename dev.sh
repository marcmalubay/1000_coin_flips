#!/bin/bash

# Run npm install
echo "Installing npm packages..."
npm install
if [ $? -ne 0 ]; then
  echo "Error: npm install failed"
  exit 1
fi

# Run npm run dev
echo "Starting the development server..."
npm run dev
if [ $? -ne 0 ]; then
  echo "Error: npm run dev failed"
  exit 1
fi

echo "Development server started successfully"

