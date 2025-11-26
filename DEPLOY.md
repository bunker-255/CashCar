# Deploying to Render

To deploy this project to Render, create a new "Static Site" service and use the following settings:

*   **Build Command:** `npm install && npm run build`
*   **Publish Directory:** `dist`

Render will automatically detect that this is a static site and serve it from the `dist` directory. You do not need to specify a start command.
