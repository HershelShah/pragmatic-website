# Complete Implementation Guide: Building Wireless-Experts.com with Astro + Claude Code

## Executive Summary

This guide provides a step-by-step blueprint for modernizing wireless-experts.com (Pragmatic Communications Systems, Inc.) using Astro static site generator, deployed on Netlify—all for under $500 total investment. The approach leverages Claude Code to generate 90%+ of the codebase, requiring only basic technical skills from you.

**Timeline:** 4-6 weeks (part-time)
**Total Cost:** $100-500 first year
**Technical Skill Required:** Basic (copy/paste, follow instructions)

---

## Part 1: Why Astro is the Right Choice

### Head-to-Head Comparison

| Factor | WordPress | Astro + Netlify |
|--------|-----------|-----------------|
| **Hosting Cost** | $168-420/yr | $0 (free tier) |
| **Page Speed** | 60-80 PageSpeed | 95-100 PageSpeed |
| **Security Risk** | High (plugins) | Near-zero (static) |
| **Claude Code Integration** | Limited | Excellent |
| **Maintenance** | Monthly updates | Zero |
| **SEO Potential** | Good | Excellent |
| **LLM/AI Optimization** | Moderate | Excellent |

### Why Astro Specifically?

1. **Zero JavaScript by default** — Ships pure HTML, loads instantly
2. **Claude Code can build everything** — No visual builder limitations
3. **Perfect for B2B product sites** — Content-focused, professional
4. **$0 hosting forever** — Netlify free tier handles 100GB bandwidth/month
5. **Future-proof** — Easy to add CMS later, migrate anywhere
6. **100/100 PageSpeed scores** — Google loves fast sites

### What Makes Astro Different

```
Traditional frameworks (React, Vue):
Browser downloads JS → Runs JS → Renders page → User sees content

Astro:
Server builds HTML → User sees content immediately
```

Astro pre-renders everything at build time. Your visitors get instant pages because there's no JavaScript processing—just pure HTML/CSS.

---

## Part 2: Complete Cost Breakdown

### Minimum Viable Budget: $100-150

| Item | Cost | Notes |
|------|------|-------|
| Domain | $0 | Already own wireless-experts.com |
| Hosting (Netlify) | $0 | Free tier: 100GB bandwidth, 300 build minutes |
| SSL Certificate | $0 | Included with Netlify |
| Forms (Netlify Forms) | $0 | 100 submissions/month free |
| Analytics | $0 | Netlify Analytics free or Plausible self-host |
| Claude Code | $100-150 | API usage over 4-6 weeks |
| **TOTAL** | **$100-150** | |

### Recommended Budget: $300-500

| Item | Cost | Notes |
|------|------|-------|
| All above | $100-150 | |
| Formspree (forms) | $0-120/yr | Better spam protection, integrations |
| Plausible Analytics | $0-90/yr | Privacy-focused, self-host free |
| Stock images | $50-100 | One-time Envato Elements purchase |
| Custom domain email | $0-72/yr | Zoho free or Google Workspace |
| **TOTAL** | **$300-500** | |

### Completely Free Stack

Everything below has a production-ready free tier:

- **Astro** — Open source, MIT license
- **Netlify** — 100GB bandwidth, 300 build min/month
- **Netlify Forms** — 100 submissions/month
- **Cloudflare Analytics** — Unlimited, privacy-focused
- **GitHub** — Unlimited private repos
- **Unsplash** — Free commercial images

---

## Part 3: Technical Architecture

### Site Structure

```
wireless-experts.com/
├── src/
│   ├── components/
│   │   ├── Header.astro           # Navigation, logo, contact CTA
│   │   ├── Footer.astro           # Links, contact info, copyright
│   │   ├── Hero.astro             # Homepage hero section
│   │   ├── ProductCard.astro      # Product listing cards
│   │   ├── ProductSpecs.astro     # Specification tables
│   │   ├── IndustryCard.astro     # Industry vertical cards
│   │   ├── Testimonial.astro      # Customer testimonials
│   │   ├── ContactForm.astro      # Quote request form
│   │   ├── CTABanner.astro        # Call-to-action sections
│   │   ├── SEOHead.astro          # Meta tags, schema markup
│   │   └── Breadcrumbs.astro      # Navigation breadcrumbs
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro       # HTML shell, head, scripts
│   │   ├── ProductLayout.astro    # Product page template
│   │   └── IndustryLayout.astro   # Industry page template
│   │
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── about.astro            # Company history, team
│   │   ├── contact.astro          # Contact form, locations
│   │   ├── quote.astro            # Request quote form
│   │   │
│   │   ├── products/
│   │   │   ├── index.astro        # All products overview
│   │   │   ├── directional-speakers/
│   │   │   │   ├── index.astro    # PADS family overview
│   │   │   │   ├── pads-5080.astro
│   │   │   │   ├── pads-4060.astro
│   │   │   │   └── ...
│   │   │   ├── pa-systems/
│   │   │   ├── audio-distribution/
│   │   │   └── source-components/
│   │   │
│   │   ├── industries/
│   │   │   ├── index.astro        # All industries
│   │   │   ├── government.astro
│   │   │   ├── healthcare.astro
│   │   │   ├── education.astro
│   │   │   ├── hospitality.astro
│   │   │   ├── corporate.astro
│   │   │   └── houses-of-worship.astro
│   │   │
│   │   ├── support/
│   │   │   ├── index.astro
│   │   │   └── downloads.astro    # Manuals, specs, datasheets
│   │   │
│   │   └── 404.astro              # Custom error page
│   │
│   ├── content/                   # Markdown content (optional)
│   │   ├── products/
│   │   └── blog/                  # Future blog posts
│   │
│   ├── data/                      # JSON data files
│   │   ├── products.json          # Product catalog
│   │   ├── industries.json        # Industry descriptions
│   │   └── testimonials.json      # Customer quotes
│   │
│   └── styles/
│       ├── global.css             # Global styles, variables
│       └── components/            # Component-specific styles
│
├── public/
│   ├── images/
│   │   ├── products/              # Product photos
│   │   ├── industries/            # Industry hero images
│   │   ├── logos/                 # Client logos, certifications
│   │   └── team/                  # Team photos
│   ├── documents/
│   │   ├── datasheets/            # PDF spec sheets
│   │   └── manuals/               # Product manuals
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml                # Auto-generated
│
├── netlify/
│   └── functions/                 # Serverless functions (optional)
│       └── contact.js             # Form handler
│
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind CSS config
├── package.json
├── .env                           # Environment variables (not committed)
└── _redirects                     # Old URL redirects
```

### Page Count Estimate

| Section | Pages | Priority |
|---------|-------|----------|
| Core (home, about, contact, quote) | 4 | MVP |
| Products (categories + individual) | 15-25 | MVP |
| Industries | 8 | MVP |
| Support/Downloads | 2 | MVP |
| **MVP Total** | **29-39** | |
| Blog (future) | +10-20 | Phase 2 |

---

## Part 4: Content Migration Strategy

### Current Site Analysis

Based on wireless-experts.com analysis, the existing content includes:

**Products to migrate:**
- PADS™ (Pragmatic Audio Directional System) family
- PA Systems (PTS-4077F, etc.)
- Audio Distribution Systems
- Source Components (MuSe™ music server)
- Healthcare entertainment systems (phLCD, patient devices)
- In-wall cameras (IWC™)
- Amplifiers (SAA™ series)

**Industry verticals:**
- Government (NASA, military, nuclear)
- Healthcare
- Education
- Corporate
- Hospitality
- Houses of Worship
- Cultural & Events

**Key content to preserve:**
- Technical specifications
- Product images
- Press releases
- Company history (NASA heritage)
- Contact information

### URL Redirect Map

Critical for SEO preservation. Create `_redirects` file:

```
# Old HTML pages to new clean URLs
/index.html                    /                               301
/aboutus.html                  /about                          301
/support.html                  /contact                        301
/quote.html                    /quote                          301
/corphq.html                   /contact                        301

# Products
/PTS4077F.html                 /products/pa-systems/pts-4077f  301
/PIM-21B.html                  /products/source-components/pim-21b 301
/phLCDTv&MP.html               /products/healthcare/phlcd-tv   301
/PADS-5080.html                /products/directional-speakers/pads-5080 301
/MuSe.html                     /products/source-components/muse 301
/PragmaticAudioDistribution.html /products/audio-distribution  301

# Industries
/government.html               /industries/government          301
/healthcare.html               /industries/healthcare          301
/education.html                /industries/education           301
/corporate.html                /industries/corporate           301
/hospitality.html              /industries/hospitality         301
/how.html                      /industries/houses-of-worship   301
/culturalandevents.html        /industries/events              301
/residential.html              /industries/residential         301

# Support
/Manuals,%20diagrams,%20DS.html /support/downloads             301
/Press-releases.html           /about#press                    301
/dealers.html                  /contact#dealers                301
/reseller.html                 /contact#reseller               301
/joinemail.html                /contact#newsletter             301
/sitemap.html                  /sitemap.xml                    301

# Catch old image paths
/images/*                      /images/:splat                  301
```

---

## Part 5: Design System

### Brand Colors (Recommended Update)

Current site lacks consistent branding. Recommended professional palette:

```css
:root {
  /* Primary - Navy Blue (trust, professionalism) */
  --color-primary: #1e3a5f;
  --color-primary-light: #2d5a8a;
  --color-primary-dark: #142740;
  
  /* Secondary - Teal (technology, innovation) */
  --color-secondary: #0891b2;
  --color-secondary-light: #22d3ee;
  --color-secondary-dark: #0e7490;
  
  /* Accent - Orange (CTAs, energy) */
  --color-accent: #f97316;
  --color-accent-light: #fb923c;
  
  /* Neutrals */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  
  /* Semantic */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Typography */
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  
  /* Spacing scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

### Typography Scale

```css
/* Headings */
h1 { font-size: 2.5rem; line-height: 1.2; font-weight: 700; }
h2 { font-size: 2rem; line-height: 1.25; font-weight: 600; }
h3 { font-size: 1.5rem; line-height: 1.3; font-weight: 600; }
h4 { font-size: 1.25rem; line-height: 1.4; font-weight: 500; }

/* Body */
body { font-size: 1rem; line-height: 1.6; }
.lead { font-size: 1.25rem; line-height: 1.5; }
.small { font-size: 0.875rem; }
```

### Component Patterns

**Button Styles:**
```css
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: var(--color-accent-light);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
}
```

---

## Part 6: SEO & LLM Optimization

### Schema Markup (JSON-LD)

Every page needs structured data for both Google and AI assistants.

**Organization Schema (site-wide):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pragmatic Communications Systems, Inc.",
  "alternateName": "Wireless Experts",
  "url": "https://www.wireless-experts.com",
  "logo": "https://www.wireless-experts.com/images/logos/pragmatic-logo.png",
  "description": "Silicon Valley manufacturer of professional audio/video equipment including directional speakers, PA systems, and healthcare entertainment solutions since 1994.",
  "foundingDate": "1994",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2340A Walsh Avenue",
    "addressLocality": "Santa Clara",
    "addressRegion": "CA",
    "postalCode": "95051",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-408-748-1100",
    "contactType": "sales",
    "email": "sales@pragmatic1.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/pragmatic-communications"
  ],
  "knowsAbout": [
    "Directional Speaker Systems",
    "Distributed Audio Systems", 
    "Healthcare Entertainment Systems",
    "Professional AV Equipment",
    "RF Communications"
  ]
}
```

**Product Schema (each product page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "PADS-5080 Directional Speaker",
  "description": "Professional directional speaker system delivering focused audio to specific areas without disturbing surrounding spaces.",
  "brand": {
    "@type": "Brand",
    "name": "Pragmatic"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Pragmatic Communications Systems, Inc."
  },
  "category": "Professional Audio Equipment",
  "countryOfOrigin": "US",
  "award": "NASA Technology Partner",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD"
    }
  }
}
```

**FAQ Schema (for LLM optimization):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a directional speaker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A directional speaker focuses sound into a narrow beam, allowing audio to be heard clearly in a specific area while remaining inaudible just a few feet away. Pragmatic's PADS™ technology uses advanced acoustic focusing to deliver audio precisely where needed."
      }
    },
    {
      "@type": "Question", 
      "name": "Where are directional speakers used?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Directional speakers are used in museums (exhibit audio without crosstalk), retail (targeted promotions), healthcare (patient entertainment without disturbing others), and corporate environments (conference room privacy)."
      }
    }
  ]
}
```

### LLM-Optimized Content Structure

AI assistants favor content that:
1. **Leads with definitive answers** — First paragraph should directly answer "what is this?"
2. **Uses clear hierarchical structure** — H1 → H2 → H3 logical flow
3. **Includes specific data** — Numbers, specifications, measurements
4. **Cites authority** — NASA partnership, patents, certifications
5. **Uses question-based headings** — "What is...", "How does...", "Why choose..."

**Example product page structure:**
```markdown
# PADS-5080 Directional Speaker System

The PADS-5080 is a professional directional speaker that delivers focused audio 
in a 30° beam pattern up to 50 feet, manufactured in Silicon Valley by 
Pragmatic Communications Systems since 1994.

## What Makes PADS-5080 Different?

Unlike conventional speakers that broadcast sound in all directions, the 
PADS-5080 uses proprietary acoustic focusing technology developed from 
NASA research partnerships to create a precise "column" of sound.

## Technical Specifications

| Specification | Value |
|--------------|-------|
| Beam Angle | 30° |
| Range | Up to 50 ft |
| Frequency Response | 200Hz - 16kHz |
| Power | 40W RMS |
| Dimensions | 24" x 8" x 4" |

## Common Applications

### Museums and Galleries
[Specific use case with outcome data]

### Healthcare Facilities  
[Specific use case with outcome data]

## Frequently Asked Questions

### How far can the PADS-5080 project sound?
The PADS-5080 effectively delivers clear audio up to 50 feet in optimal 
acoustic conditions...

### Does it require special installation?
[Clear, specific answer]
```

### Meta Tags Template

```html
<!-- Primary Meta Tags -->
<title>{Page Title} | Pragmatic Communications - Professional AV Solutions</title>
<meta name="title" content="{Page Title} | Pragmatic Communications">
<meta name="description" content="{150-160 character description with primary keyword}">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.wireless-experts.com/{path}">
<meta property="og:title" content="{Page Title}">
<meta property="og:description" content="{Description}">
<meta property="og:image" content="https://www.wireless-experts.com/images/og/{page}-og.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.wireless-experts.com/{path}">
<meta property="twitter:title" content="{Page Title}">
<meta property="twitter:description" content="{Description}">
<meta property="twitter:image" content="https://www.wireless-experts.com/images/og/{page}-og.jpg">

<!-- Additional SEO -->
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.wireless-experts.com/{path}">
```

---

## Part 7: Conversion Optimization

### Trust Signals to Implement

Based on B2B best practices and competitor analysis:

1. **Hero Section Trust Bar:**
   - "30+ Years in Business"
   - "NASA Technology Partner"
   - "Made in USA"
   - "ISO 9001 Certified"

2. **Client Logo Section:**
   - NASA
   - US Coast Guard
   - Major hospitals/healthcare systems
   - Government agencies

3. **Certifications Display:**
   - ISO 9001
   - Made in USA badge
   - Any industry certifications

4. **Social Proof:**
   - Case study results with metrics
   - Customer testimonials with names/titles
   - "Trusted by X organizations worldwide"

### Call-to-Action Strategy

**Primary CTAs (high-intent):**
- "Get a Quote" — Product pages
- "Request Consultation" — Industry pages
- "Download Specs" — Gated for lead capture

**Secondary CTAs (lower-intent):**
- "View All Products"
- "Learn More"
- "See Applications"

**CTA Button Copy (tested patterns):**
```
✅ "Get My Free Quote"
✅ "Request Custom Quote"
✅ "Download Specifications"
✅ "Schedule Consultation"

❌ "Contact Us" (too vague)
❌ "Submit" (too generic)
❌ "Click Here" (meaningless)
```

### Contact Form Optimization

**Essential Fields Only:**
```
Name: [____________]
Company: [____________]
Email: [____________]
Phone: [____________] (optional)
Product Interest: [dropdown]
Message: [____________]
```

**Form Enhancements:**
- Response time expectation: "We respond within 24 hours"
- Privacy assurance: "We never share your information"
- No CAPTCHA visible (use honeypot or invisible reCAPTCHA)

---

## Part 8: Step-by-Step Implementation

### Week 1: Setup & Foundation

**Day 1-2: Environment Setup**

1. Install Node.js (https://nodejs.org)
2. Create project:
   ```bash
   npm create astro@latest wireless-experts
   cd wireless-experts
   npm install
   ```

3. Install dependencies:
   ```bash
   npm install @astrojs/tailwind @astrojs/sitemap sharp
   npm install -D tailwindcss
   ```

4. Configure `astro.config.mjs`:
   ```javascript
   import { defineConfig } from 'astro/config';
   import tailwind from '@astrojs/tailwind';
   import sitemap from '@astrojs/sitemap';

   export default defineConfig({
     site: 'https://www.wireless-experts.com',
     integrations: [tailwind(), sitemap()],
     build: {
       format: 'directory'
     }
   });
   ```

**Day 3-4: Base Layout & Components**

Ask Claude Code:
```
Create the BaseLayout.astro file with:
- HTML5 document structure
- SEO head component slot
- Header component
- Main content slot
- Footer component
- Schema.org Organization markup
- Google Fonts (Inter)
- Global CSS variables from the design system
```

**Day 5: Header & Footer**

Ask Claude Code:
```
Create Header.astro with:
- Logo (left)
- Main navigation: Products (dropdown), Industries (dropdown), About, Support
- CTA button "Get a Quote" (right)
- Mobile hamburger menu
- Sticky on scroll
- Products dropdown showing categories
```

### Week 2: Core Pages

**Homepage (index.astro)**

Ask Claude Code:
```
Create the homepage with these sections:
1. Hero: "Professional Audio Solutions for Every Environment"
   - Subheadline about 30 years experience
   - Two CTAs: "View Products" and "Get a Quote"
   - Background showing product in use

2. Trust bar: 4 badges (30+ Years, NASA Partner, Made in USA, ISO 9001)

3. Product categories: 4 cards
   - Directional Speakers
   - PA Systems
   - Audio Distribution
   - Healthcare Solutions

4. Industries served: 8 industry cards in 2 rows

5. Why Choose Us: 3-column features
   - Silicon Valley Engineering
   - US Manufacturing
   - Custom Solutions

6. Testimonial carousel

7. CTA banner: "Ready to discuss your project?"
```

**About Page**

Ask Claude Code:
```
Create about.astro with:
1. Hero with company photo
2. Company story section (founded 1994, NASA heritage)
3. Timeline of key milestones
4. Team/expertise section
5. Manufacturing quality section (ISO 9001, local production)
6. Patents and proprietary technology mentions
```

**Contact Page**

Ask Claude Code:
```
Create contact.astro with:
1. Two-column layout:
   - Left: Contact form (Netlify Forms)
   - Right: Contact info, map, hours

2. Form fields:
   - Name, Company, Email, Phone (optional)
   - Product interest dropdown
   - Message textarea
   - Honeypot spam field (hidden)

3. Below: Dealer/reseller inquiry section
```

### Week 3: Products Section

**Products Index**

Ask Claude Code:
```
Create products/index.astro with:
1. Hero: "Professional Audio & Video Solutions"
2. Category grid with images:
   - Directional Speakers (PADS™)
   - PA Systems
   - Audio Distribution
   - Source Components
   - Healthcare Entertainment
3. Featured products section
4. "Need help choosing?" CTA to contact
```

**Product Page Template**

Ask Claude Code:
```
Create ProductLayout.astro with:
1. Breadcrumbs
2. Two-column layout:
   - Left: Product image gallery
   - Right: Name, description, key features, "Get Quote" CTA
3. Full-width tabs:
   - Specifications (table)
   - Applications
   - Downloads (datasheets)
4. Related products
5. FAQ section (if applicable)
6. JSON-LD Product schema
```

**Individual Product Pages**

For each product, ask Claude Code:
```
Create products/directional-speakers/pads-5080.astro using ProductLayout.
Content:
- Name: PADS-5080 Directional Speaker
- Description: [from current site]
- Specifications: [table from current site]
- Applications: Museums, healthcare, retail, corporate
- Downloads: Link to datasheet PDF
```

### Week 4: Industries & Polish

**Industry Pages**

For each industry, ask Claude Code:
```
Create industries/healthcare.astro with:
1. Industry-specific hero image
2. Headline: "Audio Solutions for Healthcare"
3. Pain points section (patient entertainment, privacy, etc.)
4. Relevant products for healthcare
5. Case study or application example
6. FAQ for healthcare buyers
7. CTA: "Discuss Your Healthcare Project"
```

**Polish & Testing**

- [ ] Run Lighthouse audit (target 90+ all categories)
- [ ] Test all forms
- [ ] Test all redirects
- [ ] Mobile responsive check
- [ ] Cross-browser testing
- [ ] 404 page
- [ ] Robots.txt
- [ ] XML sitemap
- [ ] Schema validation (Google Rich Results Test)

### Week 5: Content & Launch

**Content Migration Checklist:**

- [ ] All product specifications verified
- [ ] All images optimized (WebP format, lazy loading)
- [ ] All PDFs uploaded to /public/documents/
- [ ] Contact information verified
- [ ] Legal pages (privacy policy if needed)

**Netlify Deployment:**

1. Create GitHub repository
2. Push code to GitHub
3. Connect to Netlify:
   - Log into Netlify
   - "Add new site" → "Import from Git"
   - Select repository
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Configure custom domain
5. Enable HTTPS
6. Add environment variables (if any)
7. Test deployed site

### Week 6: Post-Launch

**Immediate (Days 1-3):**
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify all redirects working
- [ ] Monitor 404 errors
- [ ] Test contact forms receiving submissions

**First Week:**
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check page indexing status
- [ ] Verify schema markup showing in search results
- [ ] Review analytics for any issues

**Ongoing:**
- [ ] Monthly content updates
- [ ] Quarterly SEO review
- [ ] Add blog content (Phase 2)
- [ ] Gather customer testimonials

---

## Part 9: Claude Code Prompts Library

### Starting a Session

```
I'm building a website for Pragmatic Communications Systems (wireless-experts.com) 
using Astro. They manufacture professional audio equipment including directional 
speakers, PA systems, and healthcare entertainment solutions. They've been in 
business since 1994 and have NASA heritage.

I need you to help me create [specific component/page].
```

### Component Prompts

**Header Component:**
```
Create an Astro component Header.astro with:
- Logo on the left that links to home
- Main navigation with dropdowns for Products and Industries
- Sticky positioning on scroll
- Mobile responsive with hamburger menu
- "Get a Quote" CTA button
- Use Tailwind CSS
- Include animation for dropdown menus
```

**Product Card:**
```
Create a ProductCard.astro component that accepts props:
- title (string)
- image (string - path)
- description (string)  
- href (string - link)
- category (string)

The card should:
- Show image at top
- Title and category below
- Short description
- Hover effect (slight lift, shadow)
- Link entire card to product page
- Use Tailwind CSS
```

**Contact Form:**
```
Create a ContactForm.astro component that:
- Works with Netlify Forms
- Has fields: name, company, email, phone (optional), product interest (dropdown), message
- Includes honeypot spam protection
- Shows success message after submission
- Has client-side validation
- Styled with Tailwind CSS
- Includes ARIA labels for accessibility
```

### Page Prompts

**Homepage:**
```
Create the homepage index.astro with:

1. Hero section:
   - Headline: "Professional Audio Solutions for Every Environment"
   - Subheadline mentioning 30 years experience
   - Two buttons: "View Products" (secondary) and "Get a Quote" (primary)

2. Trust indicators bar:
   - 4 items in a row: "30+ Years", "NASA Technology Partner", "Made in USA", "ISO 9001"

3. Product categories section:
   - Section title: "Our Solutions"
   - 4 product category cards using ProductCard component
   - Categories: Directional Speakers, PA Systems, Audio Distribution, Healthcare

4. Industries section:
   - Section title: "Industries We Serve"
   - 8 industry cards in a grid
   - Each links to industry page

5. Why choose us section:
   - 3 columns with icons
   - Silicon Valley Engineering, US Manufacturing, Custom Solutions

6. CTA banner:
   - "Ready to discuss your project?"
   - Get a Quote button

Use Tailwind CSS, make it responsive, import necessary components.
```

### Data Structure Prompts

**Products JSON:**
```
Create a products.json file with an array of all products. Each product should have:
- id (slug)
- name
- category (directional-speakers, pa-systems, audio-distribution, source-components, healthcare)
- shortDescription (50 words)
- image (path)
- featured (boolean)
- specifications (object with key-value pairs)

Include these products from the current site:
- PADS-5080, PADS-4060 (directional speakers)
- PTS-4077F (PA systems)
- MuSe music server (source components)
- phLCD patient entertainment (healthcare)
```

### Utility Prompts

**Redirect File:**
```
Create a _redirects file for Netlify that redirects all the old 
.html URLs from wireless-experts.com to the new clean URL structure.
Include all product pages, industry pages, and support pages.
Use 301 permanent redirects.
```

**Robots.txt:**
```
Create a robots.txt file that:
- Allows all crawlers
- Points to sitemap.xml
- Disallows /admin if it exists
- Allows all other pages
```

---

## Part 10: Troubleshooting Guide

### Common Issues

**Build fails with "Cannot find module"**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not showing**
- Check path: `/images/...` not `./images/...`
- Verify image exists in `public/images/`
- Check file extension case sensitivity

**Forms not working on Netlify**
- Ensure `netlify` attribute on form tag
- Ensure hidden `form-name` input
- Check Netlify dashboard for form detection

**Styles not applying**
- Check Tailwind config includes all file paths
- Run `npm run dev` to regenerate
- Clear browser cache

**Redirects not working**
- Verify `_redirects` file is in `public/` folder
- Check syntax (spaces, not tabs)
- Deploy and wait 1-2 minutes

### Performance Optimization

**Image Optimization:**
```javascript
// In astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
```

**Use Astro Image component:**
```astro
---
import { Image } from 'astro:assets';
import productImage from '../images/product.jpg';
---
<Image src={productImage} alt="Product" width={800} height={600} />
```

### Deployment Checklist

- [ ] `npm run build` succeeds locally
- [ ] All environment variables set in Netlify
- [ ] Custom domain DNS configured
- [ ] SSL/HTTPS enabled
- [ ] Forms detected in Netlify dashboard
- [ ] Redirects working
- [ ] 404 page displaying correctly
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Schema markup valid (test with Google)

---

## Part 11: Future Enhancements (Phase 2)

### Add a Blog
```bash
npm install @astrojs/mdx
```

Create `src/content/blog/` folder with Markdown files.

### Add CMS (No-Code Editing)

**Option 1: Decap CMS (Free)**
- Git-based, works with Netlify
- Non-technical users can edit
- Free forever

**Option 2: Tina CMS (Free tier)**
- Visual editing
- Better UX than Decap
- Free for small sites

### Add Search

```bash
npm install pagefind
```

Static search that indexes at build time.

### Add E-commerce

If product purchases needed:
- Snipcart (simple add-to-cart)
- Stripe Payment Links
- Shopify Lite integration

---

## Summary: Your 6-Week Sprint Plan

| Week | Focus | Deliverables |
|------|-------|--------------|
| 1 | Setup | Project initialized, base layout, header/footer |
| 2 | Core Pages | Homepage, About, Contact |
| 3 | Products | Product pages, categories |
| 4 | Industries | Industry pages, polish |
| 5 | Content | Final content, testing |
| 6 | Launch | Deploy, monitor, optimize |

**Total Investment:**
- Time: 40-60 hours over 6 weeks
- Cost: $100-500

**Result:**
- 100/100 PageSpeed scores
- Modern, professional design
- SEO-optimized for Google + AI
- Zero monthly maintenance
- Scales to millions of visitors free

---

## Appendix: Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server (localhost:4321)
npm run build            # Build for production
npm run preview          # Preview production build

# Netlify
netlify dev              # Run with Netlify functions locally
netlify deploy           # Deploy preview
netlify deploy --prod    # Deploy to production

# Useful
npx astro check          # Check for errors
npx astro add [package]  # Add integration
```

---

*Guide version 1.0 | Created for Pragmatic Communications Systems, Inc.*
