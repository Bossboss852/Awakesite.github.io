# AwakeSite (bossboss852.github.io)

AwakeSite is a simple web application designed to ensure that your computer does not go to sleep while the page is active. 

## Features
- A glowing toggle button to activate the "awake" state.
- Keeps your computer awake as long as the website is the active tab.

## Running Locally

To run the development server locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploying to GitHub Pages

This project is built with [Next.js](https://nextjs.org/) and is configured to be deployed to GitHub Pages.

### 1. Update `next.config.ts` for Static Export
To deploy a Next.js app to GitHub Pages, you must enable static HTML export. Ensure your `next.config.ts` includes `output: 'export'`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change the base path if your project is not deployed to the root of the domain.
  // basePath: '/your-repo-name', 
};

export default nextConfig;
```

### 2. Set up GitHub Actions
Create a `.github/workflows/deploy.yml` file in your repository to automatically build and deploy the site using GitHub Actions:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. Configure GitHub Repository Settings
1. Go to your repository **Settings** on GitHub.
2. Navigate to **Pages** on the left sidebar.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push your code to the `main` branch, and the Action will automatically build and deploy your site to `bossboss852.github.io`.

## License
MIT
