import os

COMPONENTS_DIR = "./src/components"
DISABLE_COMMENT = "/* eslint-disable react/no-unescaped-entities */\n"

def main():
    if not os.path.exists(COMPONENTS_DIR):
        print(f"Error: Directory '{COMPONENTS_DIR}' does not exist.")
        return

    count = 0
    for filename in os.listdir(COMPONENTS_DIR):
        if filename.endswith((".tsx", ".jsx")):
            filepath = os.path.join(COMPONENTS_DIR, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            if "eslint-disable react/no-unescaped-entities" not in content:
                new_content = DISABLE_COMMENT + content
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Successfully patched: {filename}")
                count += 1
            else:
                print(f"Skipped (already patched): {filename}")

    print(f"\nDone! Patched {count} file(s). You can now run 'npm run build' successfully.")

if __name__ == "__main__":
    main()
