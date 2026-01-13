# PowerShell script to create Shopify theme ZIP file
# This script uses Python for reliable zip creation with forward slashes
# Run this script from the project root directory

$pythonScript = "create-theme-zip.py"

if (Test-Path $pythonScript) {
    Write-Host "Using Python script to create theme ZIP..." -ForegroundColor Green
    python $pythonScript
} else {
    Write-Host "Error: $pythonScript not found!" -ForegroundColor Red
    Write-Host "Please ensure create-theme-zip.py exists in the current directory." -ForegroundColor Yellow
    exit 1
}
