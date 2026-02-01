import sharp from 'sharp';
import { mkdir, copyFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '../..');

// PVP-72A images
const pvp72aImages = [
  { src: 'Products/LaserVideoProjectors/PVP-72A/Front.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/pvp-72a/pvp-72a-front.webp' },
  { src: 'Products/LaserVideoProjectors/PVP-72A/Rear.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/pvp-72a/pvp-72a-rear.webp' },
  { src: 'Products/LaserVideoProjectors/PVP-72A/Front Profile.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/pvp-72a/pvp-72a-front-profile.webp' },
  { src: 'Products/LaserVideoProjectors/PVP-72A/Rear profile.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/pvp-72a/pvp-72a-rear-profile.webp' },
  { src: 'Products/LaserVideoProjectors/PVP-72A/Exhaust fans.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/pvp-72a/pvp-72a-exhaust-fans.webp' },
  { src: 'Products/LaserVideoProjectors/PVP-72A/Intake fans.png', dest: 'wireless-experts-starter/public/images/products/laser-projectors/pvp-72a/pvp-72a-intake-fans.webp' },
];

// PIM-21B images
const pim21bImages = [
  { src: 'Products/Medical-Dental-ImagingMonitors/PIM-21B Front copy.jpg', dest: 'wireless-experts-starter/public/images/products/medical-displays/pim-21b/pim-21b-front.webp' },
  { src: 'Products/Medical-Dental-ImagingMonitors/PIM-21B-Rear-covered copy.jpg', dest: 'wireless-experts-starter/public/images/products/medical-displays/pim-21b/pim-21b-rear.webp' },
  { src: 'Products/Medical-Dental-ImagingMonitors/Dental Chair1.jpg', dest: 'wireless-experts-starter/public/images/products/medical-displays/pim-21b/pim-21b-dental-chair.webp' },
  { src: 'Products/Medical-Dental-ImagingMonitors/Dental Operatory1.jpg', dest: 'wireless-experts-starter/public/images/products/medical-displays/pim-21b/pim-21b-dental-operatory.webp' },
];

// PDF copies
const pdfCopies = [
  // PVP-72A
  { src: 'Products/LaserVideoProjectors/PVP-72A/PVP-72A.pdf', dest: 'wireless-experts-starter/public/documents/laser-projectors/pvp-72a/pvp-72a-datasheet.pdf' },
  // PIM-21B
  { src: 'Products/Medical-Dental-ImagingMonitors/PIM-21B datasheet.pdf', dest: 'wireless-experts-starter/public/documents/medical-displays/pim-21b/pim-21b-datasheet.pdf' },
  { src: 'Products/Medical-Dental-ImagingMonitors/PIM-21B Manual.pdf', dest: 'wireless-experts-starter/public/documents/medical-displays/pim-21b/pim-21b-manual.pdf' },
  // PHA Speakers
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA Brochure.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-brochure.pdf' },
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA-4.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-4-datasheet.pdf' },
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA-8.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-8-datasheet.pdf' },
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA-16.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-16-datasheet.pdf' },
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA-25.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-25-datasheet.pdf' },
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA-264.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-264-datasheet.pdf' },
  { src: 'Products/Loudspeakers/Compact-Line-array/PHA-5125.pdf', dest: 'wireless-experts-starter/public/documents/line-array-speakers/pha-5125-datasheet.pdf' },
];

const allImages = [...pvp72aImages, ...pim21bImages];

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
  console.log('Converting images...\n');

  for (const img of allImages) {
    try {
      await convertImage(img.src, img.dest);
    } catch (err) {
      console.error(`Error converting ${img.src}:`, err.message);
    }
  }

  console.log('\nCopying PDFs...\n');

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
