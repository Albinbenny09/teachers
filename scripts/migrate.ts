// scripts/migrate.ts
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import path from 'path';
import fs from 'fs';

const DB_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DB_DIR, 'app.db');

if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });

const db = new Database(DB_PATH);

db.exec(`
  PRAGMA journal_mode = WAL;

  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS carousel_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    title TEXT,
    subtitle TEXT,
    order_index INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const existing = db.prepare('SELECT COUNT(*) as c FROM admins').get() as { c: number };
if (existing.c === 0) {
  const passwordHash = bcrypt.hashSync('A123456@', 10);
  db.prepare('INSERT INTO admins (username, password_hash) VALUES (?, ?)').run('admin', passwordHash);
  console.log('Seeded admin user → username: admin, password: A123456@');
}

const imgCount = db.prepare('SELECT COUNT(*) as c FROM carousel_images').get() as { c: number };
if (imgCount.c === 0) {
  const demo = [
    { url: '/image/home1.JPG', title: 'Welcome', subtitle: 'Teachers’ Cooperative Society' },
    { url: '/image/home2.JPG', title: 'Community', subtitle: 'Support & Growth' },
    { url: '/image/home3.JPG', title: 'Service', subtitle: 'Reliable financial solutions' },
  ];
  const stmt = db.prepare('INSERT INTO carousel_images (url, title, subtitle, order_index) VALUES (?, ?, ?, ?)');
  demo.forEach((d, idx) => stmt.run(d.url, d.title, d.subtitle, idx));
  console.log('Seeded default carousel images');
}

console.log('Migration complete at:', DB_PATH);
db.close();