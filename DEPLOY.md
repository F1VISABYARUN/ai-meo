# Deploying AI MEO

This guide provides instructions for deploying the AI MEO application. The recommended approach is using [Vercel](https://vercel.com) for the easiest setup and best performance with Next.js. Alternatively, you can deploy using Docker.

## Option 1: Vercel (Recommended)

Vercel is the creators of Next.js and provides a zero-configuration deployment experience.

### Prerequisites
- A GitHub, GitLab, or Bitbucket account.
- This repository pushed to your remote git provider.
- A [Vercel account](https://vercel.com/signup).

### Steps
1.  **Log in to Vercel** and go to your **Dashboard**.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `ai-meo` repository.
4.  Vercel will automatically detect that this is a Next.js project.
    -   **Framework Preset**: Next.js
    -   **Root Directory**: `ai-meo` (Ensure this is selected if your repo root is different)
    -   **Build Command**: `next build`
    -   **Output Directory**: `.next`
    -   **Install Command**: `npm install`
5.  Click **Deploy**.

Vercel will build your application and provide you with a live URL (e.g., `https://ai-meo.vercel.app`).

---

## Option 2: Docker

You can containerize the application and deploy it to any platform that supports Docker (e.g., Render, Railway, DigitalOcean, AWS ECS).

### Prerequisites
- [Docker](https://www.docker.com/) installed on your machine.

### Local Build & Run
1.  Navigate to the project directory:
    ```bash
    cd ai-meo
    ```

2.  Build the Docker image:
    ```bash
    docker build -t ai-meo .
    ```

3.  Run the container:
    ```bash
    docker run -p 3000:3000 ai-meo
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploying to Cloud (Example: Render)
1.  Push your code to a git repository.
2.  Create a new **Web Service** on [Render](https://render.com/).
3.  Connect your repository.
4.  Select **Docker** as the runtime.
5.  Click **Create Web Service**.
