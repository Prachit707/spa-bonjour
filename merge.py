import os
import shutil

# Source folders
source_folders = [
    r"C:\Users\prach\Downloads\merged_videos-20240321T085514Z-001",
    r"C:\Users\prach\Downloads\merged_videos-20240321T085514Z-002"
]

# Destination folder
destination_folder = r"C:\Users\prach\Downloads\merged_videos"

# Create destination folder if it doesn't exist
os.makedirs(destination_folder, exist_ok=True)

# Iterate over each source folder
for folder in source_folders:
    # Iterate over each file in the source folder
    for file_name in os.listdir(folder):
        # Check if the file is an avi file
        if file_name.endswith(".avi"):
            source_path = os.path.join(folder, file_name)
            destination_path = os.path.join(destination_folder, file_name)
            # Move the file to the destination folder
            shutil.move(source_path, destination_path)

print("AVI files have been successfully merged into one folder.")
