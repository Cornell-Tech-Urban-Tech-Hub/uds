# UDS26 Gowanus — Project Directory

Visual directory of student group projects for UDS26 Urban Systems, Cornell Tech, Spring 2026.

## Adding Your Project

Two steps:

### 1. Create your project file

Create a new file at `src/content/projects/your-group-name.md` with this format:

```yaml
---
title: "Your Project Title"
members: ["Name 1", "Name 2", "Name 3"]
image: "/images/projects/your-group-name.jpg"
url: "https://your-username.github.io/your-project-repo"
description: "A one-line description of your project"
---
```

All fields except `description` are required.

### 2. Add your teaser image

Drop your image into `public/images/projects/`. The filename should match what you put in the `image` field above.

**Image guidelines:**

- Square crop recommended (the card displays at 1:1 aspect ratio)
- At least 800x800px
- JPG or WebP, under 500KB
- Maps, aerial photos, data visualizations, and neighborhood photos all work well

### 3. Open a pull request

Commit your two files (the `.md` and the image) and open a PR to `main`. The site auto-deploys when your PR is merged.

## Local Development

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:4321/uds26_gowanus/`.

## Tech Stack

- [Astro](https://astro.build/) 5.x
- Vanilla CSS
- GitHub Pages
