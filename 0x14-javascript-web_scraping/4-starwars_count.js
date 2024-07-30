import requests

def get_character_films(character_id):
    url = "https://swapi-api.alx-tools.com/api/films/"
    response = requests.get(url)
    if response.status_code == 200:
        films = response.json().get("results", [])
        wedge_films = [film for film in films if str(character_id) in film.get("characters", [])]
        return wedge_films
    else:
        print(f"Error fetching data from the API. Status code: {response.status_code}")
        return []

def main():
    character_id = 18  # Wedge Antilles
    wedge_films = get_character_films(character_id)
    num_films = len(wedge_films)
    print(f"Wedge Antilles appears in {num_films} Star Wars movies.")

if __name__ == "__main__":
    main()
