# PowerShell script to create Shopify theme ZIP file
# Run this script from the project root directory

$themeName = "kwone-lookbook-theme"
$zipFileName = "$themeName.zip"

# Get the current directory
$currentDir = Get-Location

# Check if ZIP already exists and remove it
if (Test-Path $zipFileName) {
    Remove-Item $zipFileName
    Write-Host "Removed existing $zipFileName" -ForegroundColor Yellow
}

# Create temporary directory structure
$tempDir = New-TemporaryFile | ForEach-Object { Remove-Item $_; New-Item -ItemType Directory -Path $_ }

Write-Host "Creating theme ZIP file..." -ForegroundColor Green

# Copy theme directories and files
$directories = @("assets", "config", "layout", "locales", "sections", "snippets", "templates")

foreach ($dir in $directories) {
    if (Test-Path $dir) {
        $destPath = Join-Path $tempDir $dir
        Copy-Item -Path $dir -Destination $destPath -Recurse -Force
        Write-Host "  Added: $dir/" -ForegroundColor Cyan
    } else {
        Write-Host "  Warning: $dir/ not found" -ForegroundColor Yellow
    }
}

# Create ZIP file
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipFileName -Force

# Clean up temp directory
Remove-Item $tempDir -Recurse -Force

Write-Host "`nTheme ZIP created successfully: $zipFileName" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Go to Shopify Admin -> Online Store -> Themes" -ForegroundColor White
Write-Host "2. Click Add theme -> Upload zip file" -ForegroundColor White
Write-Host "3. Select $zipFileName" -ForegroundColor White
Write-Host "4. Preview and publish when ready" -ForegroundColor White
