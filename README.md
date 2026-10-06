# GMTOOLS1

## G M Tools site

This is a redesigned G M Tools site. Its homepage is one pinned, scroll-scrubbed cinematic story built from the company's existing tool photography and business information. The other routes keep straightforward access to the complete product, company, machinery, client, contact and enquiry information.

## Run locally

From this folder, run:

```powershell
node server.mjs
```

Then open <http://127.0.0.1:4173>. The local server provides the existing page paths, including `/about-us`, `/our-products`, `/infrastructure`, `/clients`, `/enquiry`, `/contact-us`, and all six product-category routes.

The homepage uses GSAP 3.13, ScrollTrigger 3.13 and Lenis 1.3.26 from their pinned CDN URLs. When those scripts are unavailable, it falls back to native scroll progress and keeps the story readable; a reduced-motion alternative is provided. The homepage, category, company and quality-document photography is served from G M Tools' existing website. The drill visual uses a local transparent cutout derived from its official product photograph in `assets/`. The Enquiry and Contact forms retain the existing G M Tools form endpoints.

## Deploy to Render

`render.yaml` configures this project as a Render Static Site. Render runs `node build.mjs`, which copies the HTML, JavaScript, CSS and local images into `dist/`, then publishes that folder. The rewrite rule keeps the client-side routes (such as `/infrastructure`) working when opened directly or refreshed.

Connect a GitHub, GitLab or Bitbucket repository containing this project in Render, then create a Static Site or Blueprint from that repository. Render deploys static sites from a connected Git repository; see the [Render Static Sites guide](https://render.com/docs/static-sites).
