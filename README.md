# Simple Shop Prototype

A static React shop mock with React Router and `react-server-dom-webpack@19.2.0` available for future server components. Bundled with webpack 5; login, cart, and checkout buttons are placeholders.

## Running locally

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev` (http://localhost:5173/)
3. Build bundle: `npm run build` (outputs to `dist/`)

## Routes

- `/` - hero and featured picks
- `/shop` - grid of all products
- `/product/:productId` - product detail mock
- `/cart` - static cart + checkout preview

Styling is contained in `src/index.css`. Adjust the product catalog in `src/data/products.js`.
