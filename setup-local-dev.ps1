# Setup script for local Shopify theme development
# This will install Shopify CLI and help you get started

Write-Host "Setting up local development environment..." -ForegroundColor Green
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor Cyan
try {
    $nodeVersion = node --version 2>&1
    Write-Host "  Node.js installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  Node.js not found. Please install from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check npm
Write-Host "Checking npm..." -ForegroundColor Cyan
try {
    $npmVersion = npm --version 2>&1
    Write-Host "  npm installed: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  npm not found" -ForegroundColor Red
    exit 1
}

# Check if Shopify CLI is installed
Write-Host "Checking Shopify CLI..." -ForegroundColor Cyan
$shopifyCheck = Get-Command shopify -ErrorAction SilentlyContinue
if ($shopifyCheck) {
    Write-Host "  Shopify CLI already installed" -ForegroundColor Green
    shopify version
} else {
    Write-Host "  Installing Shopify CLI..." -ForegroundColor Yellow
    npm install -g @shopify/cli @shopify/theme
    
    if ($?) {
        Write-Host "  Shopify CLI installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "  Installation failed. Try running: npm install -g @shopify/cli @shopify/theme" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Setup complete! Next steps:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Start development server:" -ForegroundColor Yellow
Write-Host "   shopify theme dev" -ForegroundColor White
Write-Host ""
Write-Host "2. Or preview static HTML:" -ForegroundColor Yellow
Write-Host "   Open preview.html in your browser" -ForegroundColor White
Write-Host ""
Write-Host "For more details, see LOCAL_DEVELOPMENT.md" -ForegroundColor Cyan
