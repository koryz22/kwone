# Kwone Lookbook Theme

A minimal, editorial Shopify theme designed as a digital notebook/lookbook for showcasing products in an aesthetically pleasing, non-traditional ecommerce format.

## Features

- **One-page lookbook** - Single-page experience focused on product showcase
- **Editorial layout** - Products arranged in an editorial/notebook style, not a standard grid
- **Minimal aesthetic** - Clean typography, generous whitespace, subtle interactions
- **Shopify 2.0 compatible** - Built with Online Store 2.0 architecture
- **Fully customizable** - Theme settings for easy customization without code

## Theme Structure

```
kwone-lookbook-theme/
├── layout/
│   └── theme.liquid          # Base layout wrapper
├── templates/
│   └── index.liquid          # Homepage template
├── sections/
│   ├── lookbook.liquid       # Main lookbook section
│   ├── header.liquid         # Site header
│   ├── footer.liquid         # Site footer
│   └── announcement-bar.liquid
├── snippets/
│   ├── product-card-editorial.liquid
│   ├── product-card-minimal.liquid
│   └── meta-tags.liquid
├── assets/
│   ├── base.css              # Base styles
│   ├── lookbook.css          # Main lookbook styles
│   └── global.js             # Lightweight JavaScript
├── config/
│   └── settings_schema.json  # Theme settings
└── locales/
    └── en.default.json       # Translations
```

## Installation

### Method 1: Upload ZIP via Shopify Admin

1. **Create ZIP file:**
   - Select all files and folders inside the theme directory
   - Create a ZIP archive (not the folder itself, but its contents)
   - Name it `kwone-lookbook-theme.zip`

2. **Upload to Shopify:**
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload zip file"
   - Select your ZIP file
   - Wait for upload to complete

3. **Publish:**
   - Click "Actions" → "Preview" to test
   - Click "Actions" → "Publish" when ready

### Method 2: Shopify CLI (Recommended for Development)

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Navigate to theme directory
cd kwone-lookbook-theme

# Login and select store
shopify theme dev

# Push to store
shopify theme push
```

## Customization

### Theme Settings

Access theme settings via: **Shopify Admin → Online Store → Themes → Customize**

#### Lookbook Section Settings:
- **Header Settings:**
  - Show/hide header
- Brand letter (corner accent)
- Brand name
- Tagline
- Collection label

- **Content Settings:**
  - Collection selection (or all products)
  - Layout style (Editorial or Minimal Grid)
  - Products per page

#### Theme Settings:
- Typography (body and heading fonts)
- Colors (text, background, accent)

### Layout Styles

**Editorial / Notebook Style:**
- Products arranged in an editorial spread
- Varied sizing and placement
- Best for fashion/editorial aesthetic

**Minimal Grid:**
- Clean, uniform grid layout
- More traditional but still minimal
- Better for product-heavy catalogs

## Design Philosophy

This theme prioritizes:
- **Aesthetics over commerce** - Editorial feel first
- **Minimal UI** - No loud buttons or heavy CTAs
- **Generous whitespace** - Breathing room for products
- **Typography** - Clean, readable fonts with proper hierarchy
- **Subtle interactions** - Gentle hover effects, smooth animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Graceful degradation for older browsers

## Performance

- Lightweight JavaScript (vanilla JS only)
- Optimized images with responsive srcsets
- Lazy loading for images
- Minimal CSS (no heavy frameworks)

## Future Enhancements

Potential additions (not included):
- Product detail modals
- Add to cart functionality
- Collection filtering
- Search functionality
- Cart drawer

## Support

For Shopify theme development resources:
- [Shopify Theme Development Docs](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.dev/docs/api/liquid)

## License

Custom theme for Kwone. All rights reserved.
