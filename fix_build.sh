#!/bin/bash
set -e

echo "[*] Ensuring openai is saved to package.json..."
npm install openai --save

echo "[*] Checking file existence..."
if [ ! -f "src/components/TutorChat.tsx" ]; then
  echo "Error: TutorChat.tsx is missing!"
  exit 1
fi

if [ ! -f "src/app/api/chat/route.ts" ]; then
  echo "Error: route.ts is missing!"
  exit 1
fi

echo "[*] Staging all project files..."
git add -A

echo "[*] Committing changes..."
git commit -m "Force track openai and chat components for production build" || echo "No changes to commit"

echo "[*] Pushing to GitHub..."
git push origin main

echo "[+] Push complete! Check your Vercel dashboard."
