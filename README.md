# Busy Bar Landing Page

This project is a landing page for the Busy Bar application, built with React, TypeScript, and Vite.

## Demo Link
You can view the live version of the project [here].(https://vikshiyan.github.io/).

## Technologies:

- **SASS (SCSS)** – for styling components.
- **Vite** – for fast project build.
- **Axios** – for making API requests.
- **React Toastify** – for displaying notifications.
- **Intl-tel-input** – for formatting and validating phone numbers.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/busy-bar-landing.git
cd busy-bar-landing
npm install
npm run dev

## File Structure

busy-bar-landing/
├── src/                        # Source files for the application
│   ├── components/             # React components
│   │   ├── Footer/             # Footer component
│   │   │   ├── Footer.tsx      # Footer component implementation
│   │   │   ├── Footer.scss     # Footer component styles
│   │   │   └── index.ts        # Footer component export
│   │   ├── Header/             # Header component
│   │   │   ├── HeaderMobileElements/  # Mobile elements for Header
│   │   │   ├── MobileMenu/     # Mobile menu for Header
│   │   │   ├── Header.tsx      # Header component implementation
│   │   │   ├── Header.scss     # Header component styles
│   │   │   └── index.ts        # Header component export
│   │   ├── LiveBusy/           # LiveBusy component
│   │   ├── ManualControls/     # ManualControls component
│   │   ├── Monochrome/         # Monochrome component
│   │   ├── ProductivityMultiTool/  # ProductivityMultiTool component
│   │   ├── QuizBlock/          # QuizBlock component
│   │   ├── VideoBackground/    # Video background component
│   │   │   ├── VideoBackground.tsx  # Video background component implementation
│   │   │   ├── VideoBackground.scss # Video background component styles
│   │   │   └── index.ts        # Video background component export
│   ├── images/                 # Image files
│   ├── styles/                 # Global styles and SCSS variables
│   │   ├── main.scss           # Main SCSS file
│   │   ├── mixins.scss         # SCSS mixins
│   │   ├── normalize.scss      # Normalize CSS
│   │   ├── reset.scss          # CSS reset
│   │   └── variables.scss      # SCSS variables
│   ├── types/                  # TypeScript type definitions
│   │   └── ini-tel-input.d.ts  # Type definitions for ini-tel-input
│   ├── utils/                  # Utility files
│   │   └── questions.ts        # Array of questions for the quiz
│   ├── App.scss                # Styles for the main application component
│   ├── App.tsx                 # Main application component
│   ├── index.tsx               # Entry point for the React application
│   └── vite-env.d.ts           # Vite environment definitions
├── .eslint.config.js                # ESLint configuration
├── index.html                  # Main HTML file
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Project metadata and dependencies

