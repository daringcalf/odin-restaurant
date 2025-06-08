# Project: Restaurant Page

A dynamic restaurant homepage built with vanilla JavaScript, HTML, and CSS for [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

## Description

This project demonstrates JavaScript module organization and DOM manipulation by creating a Turkish kebab restaurant website with:

- Tabbed navigation between pages
- Interactive image gallery with modal dialog
- Dynamic content generation using modules
- Responsive card layout

## Technologies

- HTML
- CSS Grid/Flexbox
- Vanilla JavaScript (ES6 modules)
- Webpack

## Usage

Run `npm install && npx webpack serve` or go to [github page](https://daringcalf.github.io/odin-restaurant/) to view the restaurant.

## Deployment

To deploy to GitHub Pages:

1. First time: `git switch -c gh-pages`  
   Subsequent times: `git switch gh-pages`
2. `git merge main --no-edit` to update `gh-pages` with latest changes from `main`
3. `npm run build` to build
4. `git add dist -f && git commit -m "Deployment commit"`
5. `npm run deploy` to push to GitHub Pages
6. `git switch main` to return to main branch
