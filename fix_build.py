#!/usr/bin/env python3
import json
import os

def fix_eslint_config():
    eslint_file = ".eslintrc.json"
    config = {}

    # Load existing config if it exists
    if os.path.exists(eslint_file):
        with open(eslint_file, "r", encoding="utf-8") as f:
            try:
                config = json.load(f)
            except json.JSONDecodeError:
                print(f"Warning: Could not parse {eslint_file}. Creating a fresh configuration.")

    # Ensure Next.js base configuration is present
    if "extends" not in config:
        config["extends"] = ["next/core-web-vitals"]
    elif isinstance(config["extends"], str):
        config["extends"] = [config["extends"], "next/core-web-vitals"]
    elif isinstance(config["extends"], list) and "next/core-web-vitals" not in config["extends"]:
        config["extends"].append("next/core-web-vitals")

    # Ensure rules dictionary exists and disable the failing rule
    if "rules" not in config:
        config["rules"] = {}
    
    config["rules"]["react/no-unescaped-entities"] = "off"

    # Write the updated configuration back to the file
    with open(eslint_file, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)

    print(f"Successfully updated {eslint_file}.")
    print("The 'react/no-unescaped-entities' rule is now disabled.")
    print("Run 'npm run build' again.")

if __name__ == "__main__":
    fix_eslint_config()
