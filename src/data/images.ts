// Every photo on the homepage comes from here.
// To swap a photo (for example with a Shutterstock image), change the path in this file only.
// Files that exist in /public/images/stock. Add a file name here after you put the photo in that folder,
// and the site will use it first. Listing a file that is not there causes a 404 in the browser console.
export const stockPhotos = new Set<string>([]);
export const stock = (file: string): string[] => (stockPhotos.has(file) ? [`/images/stock/${file}`] : []);

export const img = {
  // Hero + big backgrounds. Files in /images/stock are the new Shutterstock photos.
  // Until they are added, the site uses the temporary photos from the old website.
  hero: [...stock('hero.jpg'), '/images/old/bg-1.webp'],
  about: '/images/clinic/about.webp',
  aboutAccent: '/images/clinic/clinic-1.webp',
  approach: [...stock('approach.jpg'), '/images/old/bg-2.webp'],
  phases: [...stock('phases.jpg'), '/images/old/bg-3.webp'],
  specialties: [...stock('specialties.jpg'), '/images/clinic/specialties.webp'],
  reviews: [...stock('reviews.jpg'), '/images/old/bg-2.webp'],
  cta: [...stock('cta.jpg'), '/images/old/bg-4.webp'],
  book: '/images/clinic/book-cover.webp',
  logo: '/images/PPWC-Logo-Transparent.webp',
};
