Link to the application: [Usa Soccer Stadiums](https://andersonasprilla.github.io/Soccer-Stadiums-Finder/)

# Stadium Finder Web App

This web application allows users to search for soccer stadiums in the United States and retrieve detailed information about each stadium. The application utilizes the API provided by [api-football-v1.p.rapidapi.com](https://api-football-v1.p.rapidapi.com/) to fetch data about stadiums.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Search](#search)
- [Venues History](#venues-history)
- [Features](#features)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [API Key](#api-key)
- [Contributing](#contributing)
- [License](#license)
- [Screenshot](#screenshot)

## Getting Started

### Prerequisites
- Web browser (e.g., Chrome, Firefox)
- Text editor (e.g., Visual Studio Code)

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/andersonasprilla/stadium-finder.git

# Usage

## Search
1. Enter a city name in the search bar and click the search button (or press Enter).
2. The application will fetch data about stadiums in the specified city and display relevant information, including a map showing the stadium's location.

## Venues History
1. Click on the "Venues History" link in the navigation bar.
2. View a list of previously searched cities.
3. Click on a city name to perform a new search for stadiums in that city.

# Features
- **Search Functionality:** Users can search for stadiums in a specific city.
- **Venues History:** Previously searched cities are displayed as buttons for easy access.
- **Stadium Information Display:** Detailed information about each stadium, including a map of its location, is presented in a user-friendly card format.
- **Error Handling:** Displays an error card if the search query is invalid or if there is an issue fetching data.

# File Structure
- **index.html:** HTML file containing the structure of the web page.
- **style.css:** CSS file for styling the web page.
- **script.js:** JavaScript file containing the logic for interacting with the API and handling user input.
- **/css:** Folder containing external CSS files (e.g., MDB CSS).
- **/js:** Folder containing external JavaScript files (e.g., MDB JavaScript).

# Dependencies
- [Font Awesome](https://fontawesome.com/): Used for icons.
- [MDB UI Kit](https://mdbootstrap.com/docs/standard/): Material Design Bootstrap UI components.
- [jQuery](https://jquery.com/): JavaScript library for DOM manipulation.

# API Key
To make requests to the football API, an API key is required. The API key is stored in the `script.js` file as the `X-RapidAPI-Key` header.

# Contributing
Contributions are welcome! Feel free to open issues or pull requests to improve the functionality, fix bugs, or enhance the user interface.

# License
This project is licensed under the MIT License - see the `LICENSE` file for details.

# Screenshot
![badges](./Screenshot%20.png)