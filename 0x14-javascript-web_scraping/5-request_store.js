import requests

def fetch_and_save(url, file_path):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception if the request fails
        content = response.content.decode("utf-8")

        with open(file_path, "w", encoding="utf-8") as file:
            file.write(content)
        print(f"Content saved to {file_path}")
    except requests.RequestException as e:
        print(f"Error fetching content: {e}")

# Example usage:
if __name__ == "__main__":
    url_to_request = "https://example.com"
    output_file_path = "output.txt"
    fetch_and_save(url_to_request, output_file_path)
