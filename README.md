# Wireless Experts Website - Pragmatic Communications Systems

Modern website for Pragmatic Communications Systems, Inc. (wireless-experts.com) built with Astro + Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Development

1. Navigate to the project directory:
```bash
cd wireless-experts-starter
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to: **http://localhost:4321**

The site will automatically reload when you make changes to files.

### Build for Production

To create a production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
wireless-experts-starter/
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Header.astro    # Navigation header
│   │   └── Footer.astro    # Site footer
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro      # Main HTML shell
│   │   └── ProductLayout.astro   # Product page template
│   ├── pages/              # File-based routing
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── contact.astro         # Contact page
│   │   ├── quote.astro           # Quote request page
│   │   ├── products/             # Product pages
│   │   ├── industries/           # Industry pages
│   │   └── support/              # Support pages
│   └── styles/
│       └── global.css      # Global styles & Tailwind
├── public/                 # Static assets
│   ├── _redirects          # URL redirects (for Netlify)
│   └── robots.txt          # SEO robots file
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary (Navy)**: #1e3a5f - Trust, professionalism
- **Secondary (Teal)**: #0891b2 - Technology, innovation
- **Accent (Orange)**: #f97316 - CTAs, energy

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clear hierarchy
- **Body**: 1rem, line-height 1.6

## 📄 Pages Implemented

### Core Pages ✅
- [x] Homepage (/)
- [x] About (/about)
- [x] Contact (/contact)
- [x] Quote Request (/quote)
- [x] 404 Page

### Products ✅
- [x] Products Overview (/products)
- [x] Directional Speakers (/products/directional-speakers)
  - [x] PADS-5080 product page
- [x] PA Systems (/products/pa-systems)
  - [x] PTS-4077F product page
- [x] Audio Distribution (/products/audio-distribution)
- [x] Source Components (/products/source-components)
- [x] Healthcare Solutions (/products/healthcare)

### Industries ✅
- [x] Industries Overview (/industries)
- [x] Government & Defense
- [x] Healthcare
- [x] Education
- [x] Corporate
- [x] Hospitality
- [x] Houses of Worship
- [x] Cultural & Events
- [x] Residential

### Support ✅
- [x] Support (/support)
- [x] Downloads (/support/downloads)
- [x] Contact Success (/contact/success)

## 🎯 Key Features

1. **SEO Optimized**
   - Semantic HTML
   - Meta tags on all pages
   - Schema.org markup
   - Sitemap integration

2. **Performance**
   - Static site generation
   - Zero JavaScript by default
   - Optimized images
   - Fast page loads

3. **Responsive Design**
   - Mobile-first approach
   - Tailwind CSS utilities
   - Flexible grid layouts

4. **Forms**
   - Contact form (Netlify Forms ready)
   - Quote request form
   - Honeypot spam protection

## 🚢 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

The `_redirects` file handles all old URL redirects automatically.

### Other Platforms

Works with:
- Vercel
- Cloudflare Pages
- GitHub Pages
- Any static hosting

## 📝 Next Steps

1. **Add Product Images**: Replace emoji placeholders with actual product photos in `/public/images/products/`

2. **Complete Product Pages**: Create additional product detail pages using `ProductLayout.astro` as template

3. **Add Content**:
   - Product specifications
   - Case studies
   - Customer testimonials
   - Team photos

4. **Set up Forms**: Configure Netlify Forms or another form service

5. **Add Analytics**: Integrate Netlify Analytics, Plausible, or Google Analytics

6. **Test & Launch**:
   - Run Lighthouse audit
   - Test all forms
   - Verify redirects
   - Check mobile responsiveness

## 🛠️ Customization

### Adding a New Product Page

1. Create file in `/src/pages/products/[category]/product-name.astro`
2. Use `ProductLayout` component
3. Fill in specifications, features, applications
4. Add to category index page

### Adding a New Page

1. Create `.astro` file in `/src/pages/`
2. Import and use `BaseLayout`
3. Add navigation link in `Header.astro`

## 📞 Support

For questions or issues:
- Email: sales@pragmatic1.com
- Phone: 408-748-1100

## 📜 License

© 2026 Pragmatic Communications Systems, Inc. All rights reserved.
