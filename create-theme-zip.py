#!/usr/bin/env python3
"""
Create a Shopify theme ZIP file with proper path separators (forward slashes)
"""
import os
import zipfile
import shutil
from pathlib import Path

# Configuration
theme_name = "kwone-lookbook-theme"
zip_filename = f"{theme_name}.zip"

# Directories to include
directories = ["assets", "config", "layout", "locales", "sections", "snippets", "templates"]

# Get current directory
current_dir = Path.cwd()

# Remove existing zip if it exists
if os.path.exists(zip_filename):
    os.remove(zip_filename)
    print(f"Removed existing {zip_filename}")

print("Creating theme ZIP file...")

# Create zip file with forward slashes
with zipfile.ZipFile(zip_filename, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for dir_name in directories:
        dir_path = current_dir / dir_name
        if dir_path.exists():
            print(f"  Added: {dir_name}/")
            # Walk through directory and add files
            for root, dirs, files in os.walk(dir_path):
                for file in files:
                    file_path = Path(root) / file
                    # Calculate relative path and use forward slashes
                    arcname = file_path.relative_to(current_dir).as_posix()
                    zipf.write(file_path, arcname)
        else:
            print(f"  Warning: {dir_name}/ not found")

print(f"\nTheme ZIP created successfully: {zip_filename}")
print("\nNext steps:")
print("1. Go to Shopify Admin -> Online Store -> Themes")
print("2. Click Add theme -> Upload zip file")
print(f"3. Select {zip_filename}")
print("4. Preview and publish when ready")
