/**
 * Remove white backgrounds from images and make them transparent
 */

import sharp from 'sharp';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename, dirname } from 'path';

const medicalDir = './public/images/products/medical-displays/pim-21b';
const outputDir = './public/images/products/medical-displays/pim-21b-transparent';

async function removeWhiteBackground(inputPath, outputPath) {
  const image = sharp(inputPath);

  // Get raw pixel data with alpha
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Process each pixel
  let transparentCount = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Check if pixel is white or near-white
    if (r >= 245 && g >= 245 && b >= 245) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
      transparentCount++;
    }
  }

  // Save to output file
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .webp({ quality: 85, alphaQuality: 100 })
    .toFile(outputPath);

  const totalPixels = info.width * info.height;
  const percent = ((transparentCount / totalPixels) * 100).toFixed(1);
  console.log(`${basename(inputPath)}: ${transparentCount.toLocaleString()} pixels made transparent (${percent}%)`);
}

async function processDirectory(inputDir, outputDir) {
  if (!existsSync(inputDir)) {
    console.error(`Directory not found: ${inputDir}`);
    return;
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const files = readdirSync(inputDir).filter(f => f.endsWith('.webp'));

  for (const file of files) {
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, file);
    try {
      await removeWhiteBackground(inputPath, outputPath);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

console.log('Removing white backgrounds from medical display images...\n');
console.log(`Output directory: ${outputDir}\n`);
await processDirectory(medicalDir, outputDir);
console.log('\nDone! Now manually replace the originals with the transparent versions.');
