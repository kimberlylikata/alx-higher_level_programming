import os

def write_to_file(file_path, content):
    try:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Content successfully written to {file_path}")
    except Exception as e:
        print(f"Error writing to {file_path}: {e}")

# Example usage:
file_path = 'example.txt'
content_to_write = "Hello, world! This is the content to write."
write_to_file(file_path, content_to_write)
