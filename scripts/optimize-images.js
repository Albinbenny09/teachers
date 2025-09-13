const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/image');
const outputDir = path.join(__dirname, '../public/image/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  const extension = path.parse(filename).ext.toLowerCase();
  
  // Skip if not a supported image format
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(extension)) {
    console.log(`Skipping ${filename} - unsupported format`);
    return;
  }

  console.log(`Optimizing ${filename}...`);
  
  try {
    // Get original image metadata
    const metadata = await sharp(inputPath).metadata();
    const originalSize = fs.statSync(inputPath).size;
    
    // Keep original dimensions, just convert to WebP
    const outputFilename = `${baseName}.webp`;
    const outputPath = path.join(outputDir, outputFilename);
    
    // Convert to WebP with original dimensions
    await sharp(inputPath)
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(outputPath);
    
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`  ${outputFilename}: ${(optimizedSize / 1024).toFixed(1)}KB (${reduction}% reduction)`);
    console.log(`  Dimensions: ${metadata.width}x${metadata.height} (unchanged)`);
    
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => {
    const ext = path.parse(file).ext.toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });
  
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    await optimizeImage(inputPath, file);
    console.log(''); // Empty line for readability
  }
  
  console.log('Image optimization complete!');
  console.log(`Optimized images saved to: ${outputDir}`);
}

main().catch(console.error);