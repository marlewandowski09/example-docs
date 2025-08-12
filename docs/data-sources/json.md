---
sidebar_position: 3
---

# Configuring JSON File Source
StreamData can use structured data in the JSON format uploaded directly from your computer. 
The maximum file size is 50 MB.

:::note

JSON files are expected to contain an array of objects, where each object represents a row of data. Nested objects and arrays need to be preprocessed before uploading. In case of using an unsupported file structure, StreamData will display an error message.

:::

![JSON configuration window](/upload-json.png)

## Steps to add a JSON source
1. Click **Browse** to select your JSON file.
2. Click **Upload**.
3. Verify the parsed structure in the preview window.
4. Click **Confirm** to complete the import.

![JSON data preview](/json_preview.png)