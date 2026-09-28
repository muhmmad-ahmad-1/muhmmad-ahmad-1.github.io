# muhmmad-ahmad-1.github.io

Personal site for Muhammad Ahmad. Built with [Eleventy](https://www.11ty.dev),
deployed to GitHub Pages by GitHub Actions on every push to `main`.

Live at <https://muhmmad-ahmad-1.github.io>.

## Run it locally

```bash
npm install
npm start        # http://localhost:8080, live reload
npm run build    # one-off build into _site/
```

Node 20+ required. Nothing else: no Ruby, no ImageMagick, no Docker.

## Layout

```
src/
  _data/site.json      name, role, affiliation, handles, CV path (edit this first)
  _data/news.js        the News list on the homepage, newest first
  _includes/
    base.njk           the page shell: head, sidebar, nav, footer
    social.njk         handle icons (inline SVG, no CDN)
  index.njk            homepage
  404.md
  assets/css/style.css single stylesheet
  assets/js/site.js    theme toggle, and nothing else
  files/               PDFs, served at /files/<name>
```

## Common edits

**Add or change a handle.** Fill in the matching key under `links` in
`src/_data/site.json`. An empty or missing value drops that icon from the
sidebar automatically, so there is no template change either way. Keys wired up
already: `email`, `github`, `linkedin`, `scholar`, `twitter`.

**Add a news item.** Put it at the top of the array in `src/_data/news.js`. The
body renders as inline markdown, so `**bold**` and `[links](…)` work. Two
conventions: the list records what happened, not awards or honours (those belong
on the CV); and roles are named exactly: "Teaching Fellow for X", never
"teaching X".

**Replace the CV.** Copy the new PDF over `src/files/muhammad_ahmad_cv.pdf`,
keeping the filename, and commit. The path is referenced once, as `cv` in
`site.json`, and both the sidebar icon and the CV link in the nav read it from
there, so nothing else needs touching. There is no CV page; the nav entry links
straight to the PDF.

**Add a page.** Create `src/<name>.njk` with `layout: base.njk` and a `title` in
its front matter, then add an entry to `nav` in `site.json`.

## Conventions

**Capitalisation: Title Case for nav labels and page titles.** "Home", "CV",
"Research", "Publications", "Teaching". Initialisms stay uppercase (CV, LLM, MX).
Nothing in the CSS forces case: what you type in `site.json` and in front
matter is exactly what renders, so keep it correct at the source.

## Deployment

`.github/workflows/deploy.yml` builds on push and publishes via the official
Pages actions (`configure-pages` → `upload-pages-artifact` → `deploy-pages`).
Repository **Settings → Pages → Source** must be set to **GitHub Actions**.

The workflow triggers on both `main` and `master` on purpose: a workflow that
watches only one of them while the repo sits on the other fails silently,
deploying nothing and reporting nothing.

## Still to come

Research, publications, projects, teaching and a blog, each added as its own
pass. Dependencies and stylesheet rules are added alongside the page that needs
them, not ahead of it, which is why the dependency list is two packages. Math
support (LaTeX rendered to inline SVG at build time, so there is no runtime JS)
arrives with the first post that needs it; a sitemap and structured data follow
once there is more than one page to index.
