# React Counter App

A simple counter application built with React and styled with plain CSS. Use the buttons to add, subtract, and reset the counter value.

**Live demo:** [mycounterapp4.netlify.app](https://mycounterapp4.netlify.app/)


## Features

- Increment the counter
- Decrement the counter (the value can go below zero)
- Reset to zero
- Centered card layout with a colored shadow, a round count display, and styled hover effects on the buttons

## Tech Stack

- React 19
- Vite
- Plain CSS
- ESLint

## Project Structure

```
Counter_App_Project/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── src/
    ├── main.jsx    # App entry point
    ├── App.jsx     # Counter component (state and buttons)
    ├── App.css     # Component styles
    └── index.css   # Global styles (currently commented out)
```

## Getting Started

You need Node.js 20.19 or newer (or 22.12 or newer), which is what Vite 7 requires.

1. Clone the repository:
   ```bash
   git clone https://github.com/niraj5511/Counter_App_Project.git
   cd Counter_App_Project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173 in your browser. The port may be different on your machine; check the terminal output.

### Other scripts

```bash
npm run build     # Production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## How It Works

`App.jsx` keeps a single `count` value in React state with `useState(0)`. The **Add** and **Subtract** buttons change it by 1, and **Reset** sets it back to 0.

## Known Limitations

- The count is not saved, so it resets to 0 when the page is refreshed.
- There is no minimum or maximum value.
