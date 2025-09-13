const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

async function testUpload() {
  try {
    console.log('Testing image upload API...\n');
    
    // Check if we have a test image
    const testImagePath = path.join(__dirname, '../public/image/home1.JPG');
    if (!fs.existsSync(testImagePath)) {
      console.log('No test image found. Please ensure home1.JPG exists in public/image/');
      return;
    }

    // Create form data
    const form = new FormData();
    form.append('file', fs.createReadStream(testImagePath));

    console.log('Uploading test image...');
    const response = await fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: form,
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Upload failed:', error);
      return;
    }

    const result = await response.json();
    console.log('Upload successful!');
    console.log('\nResults:');
    console.log(`Original: ${result.stats.originalSize}`);
    console.log(`Optimized: ${result.stats.carouselSize}`);
    console.log(`Reduction: ${result.stats.reduction}`);
    console.log('\nGenerated files:');
    result.optimized.forEach(img => {
      console.log(`- ${img.size}: ${img.path}`);
    });

  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  testUpload();
}

module.exports = { testUpload };

