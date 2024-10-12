# File Manager

## Description

The **File Manager** is a command-line tool built with Node.js that allows users to perform various file system operations such as navigation, file manipulation, hashing, and compression.

## Features

- Command-line interface for file management
- Basic file operations: copy, move, delete, rename, etc.
- File reading and writing with Streams API
- Retrieve operating system information (EOL, CPU, home directory, username, etc.)
- Calculate file hashes
- Compress and decompress files using the Brotli algorithm

## Installation

1. Ensure you have Node.js version 22.9.0 or higher installed.
2. Clone the repository or download the project.
3. Start the File Manager with the following command:

   ```bash
   npm run start -- --username=your_username
   ```

## Usage

Upon starting the application, you'll see a welcome message that includes your username, followed by a prompt for entering commands. The current working directory will be displayed after each operation.

### General Commands

- **Navigation & Working Directory**:

  - Move up one level:
    ```bash
    up
    ```
  - Change directory:
    ```bash
    cd path_to_directory
    ```
  - List all files and directories in the current folder:
    ```bash
    ls
    ```

- **Basic File Operations**:

  - Read a file's content:
    ```bash
    cat path_to_file
    ```
  - Create an empty file:
    ```bash
    add new_file_name
    ```
  - Rename a file:
    ```bash
    rn path_to_file new_filename
    ```
  - Copy a file:
    ```bash
    cp path_to_file path_to_new_directory
    ```
  - Move a file:
    ```bash
    mv path_to_file path_to_new_directory
    ```
  - Delete a file:
    ```bash
    rm path_to_file
    ```

- **Operating System Information**:

  - Get the system End-Of-Line (EOL) marker:
    ```bash
    os --EOL
    ```
  - Retrieve CPU details:
    ```bash
    os --cpus
    ```
  - Get the user's home directory:
    ```bash
    os --homedir
    ```
  - Get the system's username:
    ```bash
    os --username
    ```
  - Get CPU architecture:
    ```bash
    os --architecture
    ```

- **Hash Calculation**:

  - Calculate a file’s hash:
    ```bash
    hash path_to_file
    ```

- **Compression & Decompression**:
  - Compress a file using Brotli:
    ```bash
    compress path_to_file path_to_destination
    ```
  - Decompress a file:
    ```bash
    decompress path_to_file path_to_destination
    ```

## Error Handling

- If an invalid command or input is provided, the message `Invalid input` will be displayed.
- If an operation fails (e.g., due to a missing file or path), the message `Operation failed` will appear.

## Exit

- To exit the application, type `.exit` or press `Ctrl + C`.
  A farewell message will be displayed:

  `Thank you for using File Manager, Username, goodbye!`
