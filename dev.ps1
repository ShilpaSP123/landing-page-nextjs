# PowerShell script to run npm dev
# Usage: .\dev.ps1 or powershell -ExecutionPolicy Bypass -File dev.ps1

Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm run dev
