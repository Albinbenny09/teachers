import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';
import { getUserFromCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    if (!getUserFromCookie()) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Invalid file type. Only JPEG, PNG, and WebP images are allowed.' 
      }, { status: 400 });
    }

    // Validate file size (max 50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: 'File too large. Maximum size is 50MB.' 
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const nameWithoutExt = originalName.split('.')[0];
    const extension = originalName.split('.').pop()?.toLowerCase() || 'jpg';

    // Create directories
    const uploadDir = join(process.cwd(), 'public', 'image', 'uploads');
    const optimizedDir = join(process.cwd(), 'public', 'image', 'optimized');
    
    await mkdir(uploadDir, { recursive: true });
    await mkdir(optimizedDir, { recursive: true });

    // Save original file
    const originalFilename = `${nameWithoutExt}_${timestamp}.${extension}`;
    const originalPath = join(uploadDir, originalFilename);
    await writeFile(originalPath, buffer);

    // Get original image metadata
    const metadata = await sharp(buffer).metadata();
    const originalSize = buffer.length;
    
    // Keep original dimensions, just convert to WebP
    const optimizedFilename = `${nameWithoutExt}_${timestamp}.webp`;
    const optimizedPath = join(optimizedDir, optimizedFilename);
    
    await sharp(buffer)
      .webp({ 
        quality: 85,
        effort: 6
      })
      .toFile(optimizedPath);

    // Get optimized file size
    const optimizedSize = (await import('fs')).promises.stat(optimizedPath).then(s => s.size);
    const optimizedSizeBytes = await optimizedSize;
    const reduction = ((originalSize - optimizedSizeBytes) / originalSize * 100).toFixed(1);

    return NextResponse.json({
      success: true,
      original: {
        filename: originalFilename,
        path: `/image/uploads/${originalFilename}`,
        size: originalSize
      },
      optimized: [{
        size: 'optimized',
        filename: optimizedFilename,
        path: `/image/optimized/${optimizedFilename}`
      }],
      stats: {
        originalSize: `${(originalSize / 1024 / 1024).toFixed(2)}MB`,
        optimizedSize: `${(optimizedSizeBytes / 1024).toFixed(1)}KB`,
        reduction: `${reduction}%`,
        dimensions: `${metadata.width}x${metadata.height} (unchanged)`
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}