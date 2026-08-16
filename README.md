# blog.ericman.com

Source for [blog.ericman.com](https://blog.ericman.com) — a static blog built
with [Cobalt](https://cobalt-org.github.io/), the Rust static-site generator.
Themed to match [ericman.com](https://ericman.com): Space Mono + Instrument
Serif, light palette, pink accent.

## Local development

Cobalt is installed with the syntax-highlighting feature:

```sh
cargo install cobalt-bin --version 0.20.4 --features syntax-highlight --locked
```

Then, from the repo root:

```sh
cobalt serve            # preview at http://localhost:1024 (live reload)
cobalt serve --drafts   # include drafts
cobalt build            # write the static site to _site/
```

## Writing a post

```sh
cobalt new "My Post Title"   # creates posts/my-post-title.md (a draft)
```

Edit the Markdown, set `is_draft: false` and a `published_date` (or run
`cobalt publish posts/<file>.md`), then commit. Posts live in `posts/`; tags in
each post's front matter generate `/tags/<tag>/` pages.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
Cobalt and publishes `_site/` to GitHub Pages. The custom domain is set by the
root `CNAME` file (`blog.ericman.com`).

## Layout

- `posts/` — blog posts (Markdown + front matter)
- `_layouts/`, `_includes/` — Liquid templates
- `_sass/`, `main.scss` — styles (compiles to `/main.css`)
- `js/` — the header wordmark animation
- `_cobalt.yml` — site config
- `_meta/`, `_reference/` — build notes and reference material (ignored by the
  build; not part of the published site)
