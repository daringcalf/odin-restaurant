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
2. `npx webpack` to build
3. `git add dist -f && git commit -m "Deployment commit"`
4. `git subtree push --prefix dist origin gh-pages`
5. `git checkout main`
