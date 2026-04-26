import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const publicDir = './public';
let totalSaved = 0;
let count = 0;
let skipped = 0;

function getAllImages(dir) {
    const results = [];
    try {
        const items = readdirSync(dir);
        for (const item of items) {
            if (item === 'node_modules' || item === '.next' || item.endsWith('.tmp')) continue;
            const fullPath = join(dir, item);
            try {
                const stat = statSync(fullPath);
                if (stat.isDirectory()) {
                    results.push(...getAllImages(fullPath));
                } else if (['.png', '.jpg', '.jpeg'].includes(extname(item).toLowerCase())) {
                    results.push(fullPath);
                }
            } catch { }
        }
    } catch { }
    return results;
}

async function compressImage(filePath) {
    const tmpPath = filePath + '.tmp';
    try {
        const sizeBefore = statSync(filePath).size;
        const ext = extname(filePath).toLowerCase();

        const img = sharp(filePath);

        if (ext === '.png') {
            await img.png({ quality: 80, compressionLevel: 9 }).toFile(tmpPath);
        } else {
            await img.jpeg({ quality: 80, mozjpeg: true }).toFile(tmpPath);
        }

        const sizeAfter = statSync(tmpPath).size;

        if (sizeAfter < sizeBefore) {
            renameSync(tmpPath, filePath);
            const savedKB = Math.round((sizeBefore - sizeAfter) / 1024);
            totalSaved += (sizeBefore - sizeAfter);
            count++;
            console.log(`✅ ${basename(filePath).padEnd(40)} ${Math.round(sizeBefore / 1024)}KB → ${Math.round(sizeAfter / 1024)}KB (-${Math.round((1 - sizeAfter / sizeBefore) * 100)}%)`);
        } else {
            if (existsSync(tmpPath)) unlinkSync(tmpPath);
            skipped++;
        }
    } catch (err) {
        if (existsSync(tmpPath)) { try { unlinkSync(tmpPath); } catch { } }
        console.error(`❌ ${basename(filePath)}: ${err.message}`);
    }
}

const images = getAllImages(publicDir);
console.log(`\nFound ${images.length} images...\n`);

for (const img of images) {
    await compressImage(img);
}

console.log(`\n${'='.repeat(55)}`);
console.log(`✅ Compressed: ${count} files`);
console.log(`⏭️  Already optimal: ${skipped} files`);
console.log(`💾 Total saved: ${Math.round(totalSaved / 1024)}KB`);
console.log(`${'='.repeat(55)}\n`);
