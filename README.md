# Recipe Finder App

## Overview

The Recipe Finder App allows users to explore a variety of recipes fetched from the Spoonacular API. Users can search for recipes by name, view trending recipes sorted by user likes, and access detailed information about each recipe.

## Features

- **Search Functionality:** Users can search for recipes by name using a search bar on the home page.
- **Trending Recipes:** Displays a list of trending recipes based on user likes.
- **All Recipes:** Shows a complete list of recipes retrieved from the Spoonacular API, limited to 50 items.
- **Recipe Details:** Users can click on a recipe to view more details, including:
  - Ingredients
  - Recipe Name
  - Preparation Time
  - Cooking Instructions
  - Recipe Image

## API Integration

- The app retrieves recipe data from the **Spoonacular API**.
- Upon clicking a recipe, the app makes an additional API call to fetch detailed information about that specific recipe.

## How to Use

1. **Search for Recipes:** Type the name of the recipe in the search bar to find specific recipes.
2. **View Trending Recipes:** Check out the list of trending recipes on the home page.
3. **Explore All Recipes:** Browse through all available recipes collected from the API.
4. **Get Recipe Details:** Click on any recipe to see detailed information, including ingredients and cooking instructions.

## Limitations

- The app currently retrieves a maximum of 50 recipes from the Spoonacular API.

## Technologies
- React Native
- Typescript
- Expo
- Axios

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/joaovff/recipes-app
```

2. Navigate to the project directory:

```bash
    cd recipes-app
```

3. Install dependencies:

```bash
   npm install
```
4. Start the application:

```bash
   npm expo start
```


