# RF/EMC Test Chamber Rental — Marketing Site

A small, fast, static lead-capture website for renting an RF/EMC test chamber in the
San Francisco Bay Area, offered as a service of **Pragmatic Communication Systems**.

- Plain HTML/CSS + ~30 lines of vanilla JS. **No framework, no build step.**
- Deployable site lives entirely in [`public/`](public/) — deploy that folder as-is.
- Inquiry form posts to **Formspree** (host-independent, free tier: 50 submissions/month).
- Positioned explicitly as a **pre-compliance / R&D facility, NOT an accredited
  (ISO 17025 / A2LA) compliance lab** — keep that disclaimer intact when editing copy.

## Files

| File | Purpose |
|---|---|
| `public/index.html` | Single scrolling landing page: hero, who it's for, chamber summary, how it works, pricing summary, about, FAQ, inquiry form |
| `public/chamber.html` | Detailed specs + photo gallery (placeholders) |
| `public/pricing.html` | Full rate card + what's included |
| `public/faq.html` | Full FAQ |
| `public/thanks.html` | Post-submission confirmation (noindex) |
| `public/styles.css` | Shared stylesheet |
| `public/main.js` | Mobile nav toggle + footer year |
| `public/sitemap.xml`, `public/robots.txt` | SEO plumbing |
| `public/favicon.svg` | Placeholder favicon (antenna mark) |
| `public/assets/placeholder-photo.svg` | Placeholder gallery image |
| `wrangler.workers-fallback.jsonc` | Fallback deploy config (Workers static assets) — see comments inside |

## TODO checklist — facts you must fill in

Every placeholder is marked **both** with an HTML comment (`<!-- TODO ... -->`) and visible
`[TODO: ...]` text, so nothing ships silently unfinished. Search the `public/` folder for
`TODO` to find them all:

```bash
grep -rn "TODO" public/
```

- [ ] **Formspree form ID** — replace `TODO_FORMSPREE_ID` in `index.html`
      (sign up free at formspree.io → New form → copy the ID after `/f/` in the endpoint).
- [ ] **Form `_next` redirect URL** — in `index.html`, point the hidden `_next` field at
      `https://<your-live-domain>/thanks.html` (works with the `*.pages.dev` URL until the
      custom domain is attached).
- [ ] **Chamber specs** — type/description, interior dimensions, door size, frequency
      range, max EUT size/weight, positioning equipment, instrumentation, antennas &
      accessories, feedthroughs (in `index.html` + `chamber.html`).
- [ ] **What renters bring / site logistics** — loading access, parking, power, bench
      space, hours (`chamber.html`).
- [ ] **Photos** — replace `assets/placeholder-photo.svg` references in `chamber.html`
      with real photos; update every `alt` text and caption. Add a real 1200×630
      `assets/og-image.png` for social sharing (all pages reference it).
- [ ] **Rates** — hourly / half-day / full-day, minimum booking, what's included,
      on-site engineering support rate, other add-ons (`index.html` + `pricing.html`).
- [ ] **Policies** — cancellation policy, booking/payment process, supported test types
      and exclusions (`pricing.html` + `faq.html` + `index.html`).
- [ ] **Contact details** — street address, city, phone, email in the footer of every
      page, the contact card in `index.html`, and the `mailto:`/`tel:` hrefs next to them.
- [ ] **JSON-LD schema** (`index.html` head) — telephone, email, full postal address,
      geo latitude/longitude, opening hours.
- [ ] **About wording** — confirm/trim the Pragmatic Communication Systems description
      and the calibration/maintenance claim (`index.html`).
- [ ] **City name** in the hero location line (`index.html`).
- [ ] **Custom domain** — after attaching it, update canonical + `og:url` + `og:image`
      URLs in every page's `<head>`, every `<loc>` in `sitemap.xml`, the `Sitemap:` line
      in `robots.txt`, and the form's `_next` URL.
- [ ] **Favicon** — optional: replace `favicon.svg` with a branded icon.

## Deploy — Cloudflare Pages (free, Direct Upload)

Prereq: Node.js installed. Run these from the `rf-chamber-site/` folder:

```bash
# 1. Install Wrangler (or skip and use `npx wrangler ...` everywhere)
npm install -g wrangler

# 2. Authenticate with your Cloudflare account (opens a browser)
wrangler login

# 3. Deploy the public/ folder (creates the project on first run)
wrangler pages deploy ./public --project-name=rf-chamber-rental --branch=main
```

Wrangler prints the live URL, e.g. `https://rf-chamber-rental.pages.dev`
(first-time deploys may serve on a hashed preview URL for a minute while
`main` becomes the production branch).

### Redeploy after edits

```bash
wrangler pages deploy ./public --project-name=rf-chamber-rental --branch=main
```

That's it — same command; each deploy replaces the previous one.

### Attach a custom domain later

For a Pragmatic Communication Systems domain or a subdomain like `chamber.example.com`:

1. Cloudflare dashboard → **Workers & Pages** → project **rf-chamber-rental** →
   **Custom domains** → **Set up a custom domain** → enter the (sub)domain.
2. If the domain's DNS is already on Cloudflare, the record is added automatically.
   Otherwise add a `CNAME` at your DNS host pointing the subdomain to
   `rf-chamber-rental.pages.dev`.
3. SSL/TLS certificates are provisioned automatically — no action needed.
4. **Then update the site:** the form's `_next` URL, canonical + `og:` URLs in every
   page `<head>`, `sitemap.xml`, and `robots.txt` should all use the final domain.
   Redeploy afterwards.

### Fallback if Pages is unavailable

Use Cloudflare **Workers static assets** instead: rename
`wrangler.workers-fallback.jsonc` to `wrangler.jsonc` and run `npx wrangler deploy`
from this folder (details in the file's comments). GitHub Pages or Netlify
drag-and-drop (https://app.netlify.com/drop) are also fine free hosts — the site is
plain static files with no host-specific features.

## Form backend notes

- **Formspree** (current setup): free tier allows **50 submissions/month per form**.
  The form includes a hidden `_subject` line, a `_gotcha` honeypot for spam, and a
  `_next` redirect to `thanks.html`.
- **Web3Forms alternative** (free tier: 250 submissions/month): a ready-to-swap,
  commented-out snippet is included right above the form in `index.html`.
