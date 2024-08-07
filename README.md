# Country Information App

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Usage](#usage)
- [Live Site](#live-site)
- [License](#license)

## Introduction

This is a Country Information app built with React and React Router. The application allows users to search for countries, filter them by region, and view detailed information about each country. The app features a responsive design with a theme toggle option and smooth navigation.

## Tech Stack

![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Features

- Search for countries by name
- Filter countries by region
- View detailed information about each country
- Responsive design with theme toggle (light/dark mode)
- Dynamic routing to country detail pages

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdrianPodraza/CountryApi
   cd CountryApi
   ```
2. **Instal Packages**
   ```bash
   npm i
   ```
3. **Run locally**
   ```bash
   npm run dev
   ```

   ## ScreenShots

  ![Zrzut ekranu 2024-08-07 142457](https://github.com/user-attachments/assets/5ca8b35a-2b34-48bc-95b7-3b889650aedf)
   
  ![Zrzut ekranu 2024-08-07 142519](https://github.com/user-attachments/assets/c5d98ee2-3b29-47e8-8715-9a870284624a)

  ![Zrzut ekranu 2024-08-07 142548](https://github.com/user-attachments/assets/abda9aff-4757-4c05-ba56-7ec3a3382ee6)

## Usage

### Navigate Through the App

- **Home Page**: Visit the home page by navigating to the root URL (`/`). Here you can search for countries, filter them by region, and view the country cards.
- **Country Details**: Click on a country card or navigate directly to a country details page by using the URL pattern `/country/:countryName`, where `:countryName` is the name of the country you want to view.

### Explore Features

- **Search**: Use the search bar on the home page to filter countries by name.
- **Filter**: Select a region from the filter dropdown to view countries from that region.
- **Country Details**: On the country details page, you can see detailed information about the selected country, including its flag, population, region, subregion, capital, top-level domain, currencies, languages, and neighboring countries.
- **Back Button**: Use the back button to return to the home page from the country details page.

### Theme Management

- **Theme Toggle**: The theme (light or dark) can be toggled using the `Navbar` component. The selected theme is saved in `localStorage` and applied throughout the app.

Feel free to explore the app and use the provided navigation and filters to find detailed information about countries.


   ## Live Site

   https://countryapiadek.netlify.app/

   ## License
   MIT
