#!/usr/bin/env python3
import os

def fix_imports():
    filepath = "src/app/page.tsx"
    
    if not os.path.exists(filepath):
        print(f"Error: Could not find {filepath}")
        return

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # The components that threw the export error
    failing_components = [
        "About", 
        "Services", 
        "WhyUs", 
        "Testimonials", 
        "ContactForm"
    ]
    
    for comp in failing_components:
        # Strip the curly braces from the import statements
        content = content.replace(f'import {{ {comp} }}', f'import {comp}')
        content = content.replace(f'import {{{comp}}}', f'import {comp}')

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Successfully fixed imports in {filepath}!")

if __name__ == "__main__":
    fix_imports()
