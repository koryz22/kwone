# Create Shopify theme ZIP with proper folder structure
$zipName = "kwone-theme.zip"

# Remove existing zip if it exists
if (Test-Path $zipName) {
    Remove-Item $zipName -Force
}

# Directories to include
$directories = @("assets", "config", "layout", "locales", "sections", "snippets", "templates")

# Get current directory
$currentDir = Get-Location

Write-Host "Creating theme ZIP file..." -ForegroundColor Green

# Create zip file
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::Open($zipName, "Create")

foreach ($dir in $directories) {
    $dirPath = Join-Path $currentDir $dir
    if (Test-Path $dirPath) {
        Write-Host "  Adding: $dir/" -ForegroundColor Yellow
        Get-ChildItem -Path $dirPath -Recurse -File | ForEach-Object {
            $relativePath = $_.FullName.Substring($currentDir.Path.Length + 1)
            $entryName = $relativePath.Replace("\", "/")
            $entry = $zip.CreateEntry($entryName)
            $entryStream = $entry.Open()
            $fileStream = [System.IO.File]::OpenRead($_.FullName)
            $fileStream.CopyTo($entryStream)
            $fileStream.Close()
            $entryStream.Close()
        }
    } else {
        Write-Host "  Warning: $dir/ not found" -ForegroundColor Red
    }
}

$zip.Dispose()
Write-Host "`nTheme ZIP created successfully: $zipName" -ForegroundColor Green

# Verify layout/theme.liquid exists
$verifyZip = [System.IO.Compression.ZipFile]::OpenRead($zipName)
$hasTheme = $verifyZip.Entries | Where-Object { $_.FullName -eq "layout/theme.liquid" }
if ($hasTheme) {
    Write-Host "Verified: layout/theme.liquid found in ZIP" -ForegroundColor Green
} else {
    Write-Host "Error: layout/theme.liquid NOT found in ZIP" -ForegroundColor Red
}
$verifyZip.Dispose()
