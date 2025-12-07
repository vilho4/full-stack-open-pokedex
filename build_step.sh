#!/bin/bash

echo "===== BUILD STEP START ====="

echo "1. Installing dependencies..."
npm install
echo "Dependencies installed"

echo "2. Running production build..."
npm run build
echo "Production build finished"
echo "===== BUILD STEP END ====="
