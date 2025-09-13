// src/components/HeroCarouselDb.tsx
import { getDb } from '@/lib/db';
import HeroCarousel, { type CarouselImage } from './HeroCarousel';

export default function HeroCarouselDb() {
  const db = getDb();
  const rows = db.prepare('SELECT url, title, subtitle FROM carousel_images ORDER BY order_index, id').all() as CarouselImage[];
  return <HeroCarousel images={rows} />;
}