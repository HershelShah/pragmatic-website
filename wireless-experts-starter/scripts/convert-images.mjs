import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const projectRoot = join(__dirname, '../..');

// Image conversions
const imageConversions = [
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-Front.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/plp-hd63/plp-hd63-front.webp' },
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-Rear.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/plp-hd63/plp-hd63-rear.webp' },
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-RearProfile.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/plp-hd63/plp-hd63-rear-profile.webp' },
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-RightProfile.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/plp-hd63/plp-hd63-right-profile.webp' },
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-CoolingFanSide.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/plp-hd63/plp-hd63-cooling-fan-side.webp' },
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-FilterSide.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/plp-hd63/plp-hd63-filter-side.webp' },
];

// PDF copies
const pdfCopies = [
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD.pdf', dest: 'wireless-experts-starter/public/documents/laser-projectors/plp-hd63/plp-hd63-datasheet.pdf' },
  { src: 'Products/LaserVideoProjectors/PLP-63HD/PLP-63HD-LensProjectionTable.pdf', dest: 'wireless-experts-starter/public/documents/laser-projectors/plp-hd63/plp-hd63-lens-projection-table.pdf' },
];

async function ensureDir(filePath) {
  const dir = dirname(filePath);
  await mkdir(dir, { recursive: true });
}

async function convertImage(srcPath, destPath) {
  const fullSrc = join(projectRoot, srcPath);
  const fullDest = join(projectRoot, destPath);

  await ensureDir(fullDest);

  await sharp(fullSrc)
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(fullDest);

  console.log(`Converted: ${srcPath} -> ${destPath}`);
}

async function copyPdf(srcPath, destPath) {
  const fullSrc = join(projectRoot, srcPath);
  const fullDest = join(projectRoot, destPath);

  await ensureDir(fullDest);
  await copyFile(fullSrc, fullDest);

  console.log(`Copied: ${srcPath} -> ${destPath}`);
}

async function main() {
  console.log('Converting images...');

  for (const img of imageConversions) {
    try {
      await convertImage(img.src, img.dest);
    } catch (err) {
      console.error(`Error converting ${img.src}:`, err.message);
    }
  }

  console.log('\nCopying PDFs...');

  for (const pdf of pdfCopies) {
    try {
      await copyPdf(pdf.src, pdf.dest);
    } catch (err) {
      console.error(`Error copying ${pdf.src}:`, err.message);
    }
  }

  console.log('\nDone!');
}

main();
