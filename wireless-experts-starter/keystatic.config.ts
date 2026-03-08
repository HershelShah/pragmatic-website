import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: {
      name: 'Wireless Experts',
    },
  },

  collections: {
    // ── PRODUCTS ──────────────────────────────────────────────────────
    products: collection({
      label: 'Products',
      slugField: 'name',
      path: 'content/products/*',
      format: { data: 'json' },
      schema: {
        // Listing / search fields
        name: fields.slug({ name: { label: 'Model Name', description: 'e.g. PLP-HD63' } }),
        title: fields.text({ label: 'Full Title', description: 'e.g. PLP-HD63 Laser Projector' }),
        category: fields.text({ label: 'Category Display Name' }),
        categorySlug: fields.text({ label: 'Category Slug', description: 'e.g. laser-projectors' }),
        description: fields.text({ label: 'Short Description', multiline: true }),
        image: fields.text({
          label: 'Primary Image Path',
          description: 'e.g. /images/products/laser-projectors/plp-hd63/plp-hd63-front.webp',
        }),
        url: fields.text({ label: 'Product URL', description: 'e.g. /products/laser-projectors/plp-hd63' }),
        badge: fields.text({ label: 'Badge Text', validation: { isRequired: false } }),
        available: fields.checkbox({ label: 'Available', defaultValue: true }),
        showInGrid: fields.checkbox({
          label: 'Show in Product Grid',
          defaultValue: true,
          description: 'Uncheck to make searchable only, hidden from product grids',
        }),

        // Card specs (3–4 key-value pairs shown on listing cards)
        specs: fields.array(
          fields.object({
            key: fields.text({ label: 'Spec Label', description: 'e.g. brightness' }),
            value: fields.text({ label: 'Spec Value', description: 'e.g. 6300 ANSI lumens' }),
          }),
          {
            label: 'Card Specs',
            description: '3–4 specs shown on product listing cards',
            itemLabel: (props) => `${props.fields.key.value}: ${props.fields.value.value}`,
          }
        ),

        // Search keywords
        keywords: fields.array(
          fields.text({ label: 'Keyword' }),
          { label: 'Search Keywords', itemLabel: (props) => props.value }
        ),

        // Detail page fields
        detailTitle: fields.text({ label: 'Detail Page Title', validation: { isRequired: false } }),
        detailDescription: fields.text({
          label: 'Detail Page Meta Description',
          multiline: true,
          validation: { isRequired: false },
        }),
        sku: fields.text({ label: 'SKU', validation: { isRequired: false } }),
        brand: fields.text({ label: 'Brand', description: 'e.g. Pragmatic Signage', validation: { isRequired: false } }),

        // Image gallery
        images: fields.array(
          fields.object({
            src: fields.text({ label: 'Image Path' }),
            alt: fields.text({ label: 'Alt Text' }),
          }),
          {
            label: 'Product Images',
            itemLabel: (props) => props.fields.alt.value || props.fields.src.value,
          }
        ),

        // Full technical specifications table
        specifications: fields.array(
          fields.object({
            key: fields.text({ label: 'Spec Label' }),
            value: fields.text({ label: 'Spec Value' }),
          }),
          {
            label: 'Technical Specifications',
            description: 'Full spec table on the detail page',
            itemLabel: (props) => `${props.fields.key.value}: ${props.fields.value.value}`,
          }
        ),

        // Features list
        features: fields.array(
          fields.text({ label: 'Feature' }),
          { label: 'Features', itemLabel: (props) => props.value }
        ),

        // Applications list
        applications: fields.array(
          fields.text({ label: 'Application' }),
          { label: 'Applications', itemLabel: (props) => props.value }
        ),

        // Downloads
        downloads: fields.array(
          fields.object({
            name: fields.text({ label: 'Document Name' }),
            url: fields.text({ label: 'Document URL' }),
            type: fields.select({
              label: 'Type',
              options: [
                { label: 'Datasheet', value: 'datasheet' },
                { label: 'Manual', value: 'manual' },
                { label: 'Brochure', value: 'brochure' },
                { label: 'Other', value: 'other' },
              ],
              defaultValue: 'datasheet',
            }),
          }),
          { label: 'Downloads', itemLabel: (props) => props.fields.name.value }
        ),

        // Related products
        relatedProducts: fields.array(
          fields.object({
            name: fields.text({ label: 'Product Name' }),
            href: fields.text({ label: 'Product URL' }),
            image: fields.text({ label: 'Image Path', validation: { isRequired: false } }),
            comingSoon: fields.checkbox({ label: 'Coming Soon', defaultValue: false }),
          }),
          { label: 'Related Products', itemLabel: (props) => props.fields.name.value }
        ),
      },
    }),

    // ── CATEGORIES ────────────────────────────────────────────────────
    categories: collection({
      label: 'Categories',
      slugField: 'name',
      path: 'content/categories/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Category Name', description: 'e.g. Laser Projectors' } }),
        slug: fields.text({ label: 'URL Slug', description: 'e.g. laser-projectors' }),
        description: fields.text({ label: 'Description', multiline: true }),
        badge: fields.text({ label: 'Badge Text', validation: { isRequired: false } }),
      },
    }),
  },
});
