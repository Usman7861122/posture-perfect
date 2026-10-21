#!/usr/bin/env bash
# Moves your downloaded Shutterstock photos into the site, resized and renamed.
# 1) Download the 4 photos listed in STOCK-PHOTOS.md (files are named shutterstock_<id>.jpg)
# 2) Run from the project folder:  bash scripts/install-stock-photos.sh   (optional: pass another folder than ~/Downloads)
cd "$(dirname "$0")/.."
DL="${1:-$HOME/Downloads}"
OUT="public/images/stock"
mkdir -p "$OUT"

place() {  # id  name
  f=$(ls -t "$DL"/shutterstock_"$1"*.jp*g 2>/dev/null | head -1)
  if [ -z "$f" ]; then echo "missing  $2 (shutterstock_$1) not found in $DL"; return; fi
  if command -v sips >/dev/null 2>&1; then sips -Z 2400 -s formatOptions 78 "$f" --out "$OUT/$2.jpg" >/dev/null
  else cp "$f" "$OUT/$2.jpg"; fi
  echo "ok       $OUT/$2.jpg"
}

place 2149026119 hero
place 2561677713 phases
place 2847152443 specialties
place 2287316991 cta
# Spinal decompression service page
place 2138243553 spinal-hero
place 2551623831 spinal-side
