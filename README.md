# Vanda Nichada Homes ISB

React + Vite website for **Vanda Nichada Homes ISB** with an embedded Facebook Page timeline from:

https://www.facebook.com/kruvanda.me

## Features

- Responsive homepage
- Nichada / ISB positioning
- Featured property cards
- Search filter
- Facebook Page timeline embed
- Contact section
- GitHub Pages deployment workflow

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

### 1. Create GitHub repository

Create a new repository named:

```text
vanda-nichada-homes
```

### 2. Push project

```bash
git init
git add .
git commit -m "Initial Vanda Nichada Homes website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vanda-nichada-homes.git
git push -u origin main
```

### 3. Enable GitHub Pages

Go to:

```text
Repository > Settings > Pages
```

Under **Build and deployment**, choose:

```text
Source: GitHub Actions
```

### 4. Wait for deployment

Go to:

```text
Repository > Actions
```

When the workflow finishes, your website will be available at:

```text
https://YOUR_USERNAME.github.io/vanda-nichada-homes/
```

## Important GitHub Pages note

If you change the repository name, update `base` in `vite.config.js`.

Example:

```js
base: '/YOUR_REPOSITORY_NAME/',
```

## Facebook update method

This project uses Facebook Page Plugin iframe. It shows public Facebook updates automatically.

For a more advanced system that imports posts into your own database, you will need:

- Meta Developer App
- Page Access Token
- Facebook Page admin permission
- Pages API permissions
- Backend server or scheduled function

## Recommended next improvements

- Replace sample properties with real listings
- Add LINE OA button
- Add Google Map embed
- Add contact form
- Add SEO pages for:
  - House for Rent Nichada Thani
  - House for Sale Nichada Thani
  - ISB Housing
  - Nichada Homes
