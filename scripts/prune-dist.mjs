import { readdir, readFile, rm, stat } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const imageRoot = join(dist, 'assets', 'img');

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  }));
  return nested.flat();
}

const htmlFiles = (await filesUnder(dist)).filter((path) => path.endsWith('.html'));
const referencedImages = new Set();

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/img\/[^"?#]+)"/g)) {
    referencedImages.add(decodeURIComponent(match[1]));
  }
}

let removedFiles = 0;
let removedBytes = 0;

for (const imageFile of await filesUnder(imageRoot)) {
  const publicPath = `/${relative(dist, imageFile).split(sep).join('/')}`;
  if (referencedImages.has(publicPath)) continue;
  const { size } = await stat(imageFile);
  await rm(imageFile);
  removedFiles += 1;
  removedBytes += size;
}

console.log(`Pruned ${removedFiles} unused public images (${(removedBytes / 1024 / 1024).toFixed(2)} MB) from dist`);
