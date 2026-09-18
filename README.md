# Ganesh Ray — Video Editor Portfolio

A dark, neon-green themed portfolio site built with plain HTML/CSS/JS — no build step, ready for GitHub Pages.

## Structure

```
index.html          Main page
style.css            All styling (theme, glow effects, layout, responsive)
script.js            Project/reel data, video modal, nav, scroll reveal
assets/
  profile/           Background-removed profile photo (profile.png)
  resume/            Downloadable resume PDF
  icons/             Social icons — LinkedIn, WhatsApp, Behance, Gmail
  tools/              Adobe app badges — Premiere Pro, After Effects, Audition, Photoshop, Illustrator
  thumbnails/        16:9 placeholder thumbnails for the 8 main videos
  shorts/            9:16 placeholder thumbnails for the 4 reels
```

## Before you publish — important

The 8 video links and 4 reel links are embedded using Google Drive's inline
`/preview` player, e.g.:

```
https://drive.google.com/file/d/FILE_ID/preview
```

**For these to play directly on the site (instead of showing an error), every
file's Drive sharing setting must be "Anyone with the link → Viewer".**
Files that are private or "restricted" will fail to load inside the embedded
player even though the direct Drive link works for you.

## Replacing the placeholder thumbnails

Every thumbnail in `assets/thumbnails/` and `assets/shorts/` is a generated
placeholder (SVG) named after the project, e.g. `varanasi-water-crisis.svg`.
To swap in a real thumbnail:

1. Export a frame or custom thumbnail from your video (16:9 for main videos,
   9:16 for reels — JPG or PNG works fine).
2. Name it the same as the file it replaces, or update the `thumb:` path for
   that project inside `script.js`.

## Editing content

All project titles, categories, descriptions and Drive file IDs live in two
arrays at the top of `script.js` — `videos` and `shorts`. Edit those to
change captions or swap videos; no HTML editing required.

## Hosting on GitHub Pages

1. Push this whole folder to a GitHub repository.
2. In the repo, go to Settings → Pages → set the source branch to `main`
   (or `master`) and folder to `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes

- Resume button downloads `assets/resume/Ganesh_Ray_Resume.pdf` directly.
- "Hire Me" and the WhatsApp contact button open a WhatsApp chat with
  +91 88106 75064 via `wa.me`.
- "View Projects" links to your Google Drive folder.
- Fonts (Space Grotesk + Inter) load from Google Fonts via CDN — an internet
  connection is required for them to render; the site falls back to
  system sans-serif otherwise.
