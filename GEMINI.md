# Project Overview

This is a web application for "CashCar", a service that connects car owners with advertisers. Car owners can get their cars wrapped with advertisements and earn money, while advertisers can promote their brands on moving vehicles.

The application is a single-page React application built with Vite. It features a multi-lingual landing page with information about the service, a gallery of car wrap designs, a "how it works" section, and a waitlist for interested drivers and advertisers.

## Building and Running

**Prerequisites:**

*   Node.js

**Instructions:**

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the app in development mode:
    ```bash
    npm run dev
    ```
3.  Build the app for production:
    ```bash
    npm run build
    ```
4.  Preview the production build:
    ```bash
    npm run preview
    ```

## Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling.
*   **Components:** The UI is built with React components, located in the `components` directory.
*   **Internationalization:** The application supports multiple languages using a `LanguageContext`. Translations are stored in the `utils/translations.ts` file.
*   **State Management:** The application uses React's built-in state management.
*   **Data Collection:** The waitlist form collects data using Google Forms, which is external to the project.