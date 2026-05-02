# Melitrix, deployable static site

This folder is the production build of the Melitrix website. It is plain static HTML, CSS, JS, and images, no build step required.

## Folder layout

```
melitrix-deploy/
├── index.html              ← Home (the root page, served at /)
├── asset-classes.html      ← Asset Classes / Pipeline
├── about.html              ← About / Operating principles / Ecosystem
├── careers.html            ← Careers (no open roles, expression of interest)
├── contact.html            ← Contact / Form / Boston office
├── robots.txt              ← Search-engine instructions
├── sitemap.xml             ← URL sitemap for search engines
└── assets/
    ├── shared.css          ← Global styles + design tokens
    ├── shared.js           ← Reveal-on-scroll helpers
    ├── chrome.js           ← Top nav + footer (injected on every page)
    ├── karthik.jpg         ← Founder headshot (currently unused, kept for future)
    └── melitrix-mark.svg   ← Logo mark
```

## How to deploy

Pick whichever host fits how your domain is set up:

### Option 1, Netlify (easiest, free, recommended)

1. Sign up at netlify.com
2. Drag this entire `melitrix-deploy` folder onto the Netlify dashboard
3. In Site settings → Domain management → Add custom domain → enter `melitrix.net`
4. Follow Netlify's DNS instructions (point A record to Netlify, or change nameservers)
5. SSL is automatic. Done.

### Option 2, Vercel (similar to Netlify)

1. Sign up at vercel.com
2. `vercel deploy` from inside this folder, or drag-drop in the dashboard
3. Add custom domain in Project Settings → Domains

### Option 3, AWS S3 + CloudFront

1. Create an S3 bucket named `melitrix.net`, enable static website hosting
2. Upload the contents of this folder (not the folder itself, the files inside it) to the bucket root
3. Put a CloudFront distribution in front of the bucket and point your domain at it
4. Request an ACM certificate for HTTPS

### Option 4, GoDaddy / cPanel / shared hosting

1. Open File Manager in your hosting control panel
2. Navigate to `public_html/` (or whatever your web root is called)
3. Upload everything from this folder, preserving the `assets/` subfolder
4. Visit your domain. The site is live.

### Option 5, GitHub Pages

1. Create a GitHub repo, push the contents of this folder to the root of the `main` branch
2. Settings → Pages → Source: `main`, folder: `/ (root)`
3. Add `melitrix.net` as the custom domain in repo Settings → Pages

## Before you go live

- [ ] Update meta descriptions / OG tags per page (currently generic)
- [ ] Add a favicon to `assets/` and link it in each page's `<head>`
- [ ] Replace the Unsplash imagery on Home and Asset Classes with licensed or commissioned photos before any commercial launch
- [ ] Wire the Contact form on `contact.html` to a real backend, currently the form does not submit anywhere. Easiest options:
  - **Netlify Forms**, add `data-netlify="true"` to the `<form>` and Netlify auto-handles submissions
  - **Formspree**, change the `<form action="...">` to your Formspree endpoint
  - **Resend / SendGrid**, hook up via a serverless function
- [ ] Add Plausible or GA4 analytics snippet to `assets/chrome.js` so it injects on every page
- [ ] Confirm the Boston office address and `info@melitrix.net` email are correct
- [ ] Add a privacy policy page and link from the footer

## Editing content later

All pages share the same nav and footer, injected by `assets/chrome.js`. To change a nav link or footer line, edit `chrome.js` once and it applies everywhere.

Page-specific copy lives directly inside each `.html` file. Open in any text editor, edit, save, re-upload.

Colors and typography are tokenized at the top of `assets/shared.css` (`:root { --navy: ...; }`). Change a token there and it propagates across the whole site.
