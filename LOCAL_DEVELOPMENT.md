# Local Development Guide

## Method 1: Shopify CLI (Recommended - Full Testing)

This method connects to your Shopify store and gives you a live preview URL with hot reload. Liquid templates will work properly.

### Prerequisites

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **Shopify CLI** - Install via npm

### Setup Steps

1. **Install Shopify CLI:**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Navigate to your theme directory:**
   ```bash
   cd C:\Users\kory\Documents\projects\kwone
   ```

3. **Start development server:**
   ```bash
   shopify theme dev
   ```

4. **First time setup:**
   - You'll be prompted to log in to Shopify
   - Select your store
   - The CLI will create a development theme automatically
   - A preview URL will be generated (e.g., `https://your-store.myshopify.com/?preview_theme_id=123456`)

5. **Development features:**
   - **Hot reload**: Changes to files automatically sync
   - **Live preview**: See changes in real-time
   - **Theme editor**: Access via Shopify admin while dev server is running

### Commands

```bash
# Start development server
shopify theme dev

# Push theme to store (creates new theme)
shopify theme push

# Pull existing theme
shopify theme pull

# List themes
shopify theme list

# Open theme in browser
shopify theme open
```

### Troubleshooting

**"Command not found" error:**
- Make sure Node.js is installed: `node --version`
- Reinstall CLI: `npm install -g @shopify/cli @shopify/theme`

**Authentication issues:**
- Run `shopify auth logout` then `shopify theme dev` again
- Make sure you have theme development access

**Port already in use:**
- The CLI will automatically use a different port
- Or specify a port: `shopify theme dev --port=9292`

---

## Method 2: Static HTML Preview (Quick Visual Check)

For a quick visual preview of the HTML/CSS structure (Liquid won't work, but you can see styling):

1. **Open the preview file:**
   - Open `preview.html` in your browser
   - This shows a mockup of the lookbook structure

2. **Or use a local server:**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Then open: http://localhost:8000/preview.html
   ```

**Note:** This preview uses mock data and won't show real Shopify products. Use Shopify CLI for full testing.

---

## Method 3: Browser Extension (Theme Inspector)

Install a browser extension to inspect Shopify themes:
- **Shopify Theme Inspector** (Chrome/Firefox)
- Helps debug Liquid templates and theme structure

---

## Recommended Workflow

1. **Initial setup:** Use Shopify CLI (`shopify theme dev`)
2. **Make changes:** Edit files in your editor
3. **See changes:** Browser auto-refreshes with changes
4. **Test thoroughly:** Check on different devices/screens
5. **Push to store:** When ready, use `shopify theme push` or upload ZIP

---

## File Watching

The Shopify CLI watches for changes in:
- `.liquid` files (templates, sections, snippets)
- `.css` files in `assets/`
- `.js` files in `assets/`
- `config/settings_schema.json`

Changes are automatically synced to your development theme!
