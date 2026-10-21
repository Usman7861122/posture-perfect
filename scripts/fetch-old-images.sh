#!/usr/bin/env bash
# Downloads the real team + clinic photos (and temporary section photos) from the old website.
# Run once from the project folder:   bash scripts/fetch-old-images.sh
cd "$(dirname "$0")/.."
B="https://postureperfectwellnesscenter.com/wp-content/uploads"
mkdir -p public/images/{team,clinic,services,conditions,blog,old}

get() { if curl -fsSL "$1" -o "$2"; then echo "ok    $2"; else echo "FAIL  $2"; rm -f "$2"; fi; }

# Team
get "$B/2026/04/Yaron-Lohr-DC-CFSA.png"             public/images/team/yaron-lohr.png
get "$B/2026/04/dr-kaur-scaled-e1776957112192.jpeg" public/images/team/sharan-kaur.jpeg
get "$B/2026/04/dr-kuhn-scaled-e1776957084463.jpeg" public/images/team/andrew-kuhn.jpeg
get "$B/2026/04/Venka-Sethuraman-MD.png"            public/images/team/venkat-sethuraman.png

# Clinic / about / book
get "$B/2026/04/about-e1785161262366.webp"          public/images/clinic/about.webp
get "$B/2026/03/Gemini_Generated_Image_lfwcx2lfwcx2lfwc-e1774975539545.png" public/images/clinic/clinic-1.png
get "$B/2026/08/71S3HZ0A2aL._SL1293_.jpg"           public/images/clinic/book-cover.jpg
get "$B/2026/04/Our-Specialties.webp"               public/images/clinic/specialties.webp

# Old hero / background photos (temporary until new ones are in)
get "$B/2026/04/AdobeStock_542623220-2.webp"        public/images/old/bg-1.webp
get "$B/2026/04/AdobeStock_254048568-1772211808785.webp" public/images/old/bg-2.webp
get "$B/2026/04/AdobeStock_440541631-1-1772211976965-1.webp" public/images/old/bg-3.webp
get "$B/2026/04/AdobeStock_579334012-1.webp"        public/images/old/bg-4.webp

# Services
get "$B/2026/04/chiropractic.webp"                       public/images/services/chiropractic.webp
get "$B/2026/04/spinal.webp"                             public/images/services/spinal-decompression.webp
get "$B/2026/04/Physiotherapy-Rehabilitation.webp"       public/images/services/rehabilitation.webp
get "$B/2026/04/Sports-Medicine-Injection-Therapy.webp"  public/images/services/injection-therapy.webp
get "$B/2026/04/Orthopedics.webp"                        public/images/services/orthopedics.webp
get "$B/2026/04/2835898.webp"                            public/images/services/pain-management.webp
get "$B/2026/04/Soft-Tissue-Therapy.webp"                public/images/services/soft-tissue.webp
get "$B/2026/04/2835408.webp"                            public/images/services/auto-accident.webp

get "$B/2026/04/2835888.webp" public/images/services/spinal-decompression-page.webp

# Conditions
get "$B/2026/04/2825255-1.webp"   public/images/conditions/low-back-pain.webp
get "$B/2026/04/2825206.webp"     public/images/conditions/sciatica.webp
get "$B/2026/04/2835601.webp"     public/images/conditions/disc-injuries.webp
get "$B/2026/05/close-up-man-having-pain-his-shoulder_23-2147948569.jpg" public/images/conditions/neck-shoulder.jpg
get "$B/2026/04/2835408.webp"     public/images/conditions/auto-accident.webp
get "$B/2026/04/2835604.webp"     public/images/conditions/muscle-strains.webp
get "$B/2026/04/2825192.webp"     public/images/conditions/hip-pain.webp
get "$B/2026/04/2835603.webp"     public/images/conditions/joint-pain.webp

# Blog
get "$B/2026/06/peptidos-plantean-oportunidades-tratamientos-medicos.jpg" public/images/blog/peptides.jpg
get "$B/2026/04/Low-Back-Pain.webp" public/images/blog/lower-back.webp
get "$B/2026/04/Disc.webp"          public/images/blog/sciatica-disc.webp

echo; echo "Finished. Restart 'npm run dev' if it is running."
