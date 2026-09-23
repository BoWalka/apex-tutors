#!/bin/bash

echo "[*] Removing node_modules from Git tracking (files stay on your local drive)..."
git rm -r --cached node_modules

echo "[*] Adding node_modules to .gitignore..."
echo "node_modules/" >> .gitignore
git add .gitignore

echo "[*] Rewriting the last commit to erase the giant files from history..."
git commit --amend --no-edit

echo "[*] Pushing clean code to GitHub..."
git push origin main
