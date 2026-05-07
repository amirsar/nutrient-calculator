# Nutrient Calculator

A web-based calculator for calculating nutrient amounts (Nitrogen, Phosphorus, Potassium) supplied by irrigation water per dunam based on weekly water input.

## Features

- Input weekly irrigation water amount in m³ per dunam
- Input nutrient concentrations in ppm
- Calculates N, P, K supplied to the field
- Time period selector (weekly, daily, monthly)
- Simple and user-friendly interface

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open http://localhost:5173 in your browser

## Usage

1. Select the time period for irrigation water input
2. Enter the irrigation water amount in cubic meters per dunam per selected period
3. Enter the concentrations of nitrate, ammonium, phosphorus, and potassium in ppm
4. Click "Calculate" to see the nutrient amounts supplied

## Deployment

The project is set up with GitHub Actions for automatic deployment to GitHub Pages.

1. Create a public repository on GitHub
2. Push this code to the main branch
3. In repository settings, go to Pages and set source to "GitHub Actions"
4. The site will be automatically deployed on each push to main

## Technologies

- Vite
- Vanilla JavaScript
- HTML/CSS
- GitHub Actions