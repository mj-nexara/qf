# ┌────────────────────────────────────────────┐
# │ Quraner Fariwala Initialization Script     │
# │ Ethical • Spiritual • Audit-Ready          │
# └────────────────────────────────────────────┘

# --- Identity Banner ---
$Host.UI.RawUI.WindowTitle = "📖 Quraner Fariwala — Ethical CLI"
Write-Host "`n🕊️ Welcome to Quraner Fariwala — A mission of truth, dignity, and spiritual clarity." -ForegroundColor Cyan

# --- Root Path Setup ---
$global:QURANER_ROOT = "C:\mj-ahmad\quraner-fariwala"

# --- Semantic Anchors ---
$env:QF_DOCS       = "$QURANER_ROOT\Docs"
$env:QF_SCRIPTS    = "$QURANER_ROOT\.nexara\infra\scripts"
$env:QF_MEDIA      = "$QURANER_ROOT\Media"
$env:QF_NETWORK    = "$QURANER_ROOT\Network"
$env:QF_CONSPIRACY = "$QURANER_ROOT\Docs\Legal\ImageConspiracy"
$env:QF_DISTRICT   = "$QURANER_ROOT\Docs\Legacy\DistrictNetwork"

# --- Ethical Reminder ---
Write-Host "`n📜 Every script here is a vow. Every folder is a testimony. Every contributor is a node of dignity." -ForegroundColor Magenta

# --- Logging ---
$logPath = "$QURANER_ROOT\.nexara\infra\logs\init.log"
"[$(Get-Date)] Quraner Fariwala CLI initialized." | Out-File -FilePath $logPath -Append

# --- Ritual Completion ---
Write-Host "`n✅ Quraner Fariwala CLI environment is now active." -ForegroundColor Green
Write-Host "📁 Current module: $QURANER_ROOT" -ForegroundColor Yellow
