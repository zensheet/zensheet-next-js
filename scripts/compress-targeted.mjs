import sharp from 'sharp';
import { statSync, renameSync, unlinkSync, existsSync } from 'fs';
import { basename } from 'path';

// Target ONLY the specific large files that need compression
const targets = [
    // Blog antigravity images (biggest offenders)
    './public/blog/antigravity/cover_final_v2.png',
    './public/blog/antigravity/cover_complete.png',
    './public/blog/antigravity/cover_lynk_1024.png',
    './public/blog/antigravity/cover_male_sketch.png',
    './public/blog/antigravity/mockup_lynk_1024.png',
    './public/blog/antigravity/cover_ai_developer.png',
    // images/antigravity copies
    './public/images/antigravity/cover_final_v2.png',
    './public/images/antigravity/cover_complete.png',
    './public/images/antigravity/cover_lynk_1024.png',
    './public/images/antigravity/cover_male_sketch.png',
    './public/images/antigravity/mockup_lynk_1024.png',
    // images/ebook-antigravity copies
    './public/images/ebook-antigravity/cover_final_v2.png',
    './public/images/ebook-antigravity/cover_complete.png',
    './public/images/ebook-antigravity/cover_lynk_1024.png',
    './public/images/ebook-antigravity/cover_male_sketch.png',
    './public/images/ebook-antigravity/mockup_lynk_1024.png',
    // root images
    './public/images/cover_final_v2.png',
    './public/images/preview_prompt_cartoon.png',
    './public/images/preview_toc_cartoon.png',
    './public/images/app_preview.png',
    './public/images/warung_app.png',
    './public/images/cover_ai_developer.png',
    './public/images/cover_sales_dashboard.png',
    './public/images/cover_tax_calc.png',
    './public/images/cover_ups_calc.png',
    './public/images/cover_sales_crm_v3.png',
    './public/images/cover_ebook_padel_v3.png',
    './public/images/cover_ebook_enhanced.png',
];

let totalSaved = 0;

for (const filePath of targets) {
    if (!existsSync(filePath)) {
        console.log(`⏭️  SKIP (not found): ${basename(filePath)}`);
        continue;
    }

    const tmpPath = filePath + '.tmp';
    try {
        const sizeBefore = statSync(filePath).size;

        await sharp(filePath)
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(tmpPath);

        const sizeAfter = statSync(tmpPath).size;

        if (sizeAfter < sizeBefore) {
            renameSync(tmpPath, filePath);
            const savedKB = Math.round((sizeBefore - sizeAfter) / 1024);
            totalSaved += (sizeBefore - sizeAfter);
            console.log(`✅ ${basename(filePath).padEnd(40)} ${Math.round(sizeBefore / 1024)}KB → ${Math.round(sizeAfter / 1024)}KB  (saved ${savedKB}KB)`);
        } else {
            unlinkSync(tmpPath);
            console.log(`⏭️  SKIP (already optimal): ${basename(filePath)}`);
        }
    } catch (err) {
        try { if (existsSync(tmpPath)) unlinkSync(tmpPath); } catch { }
        console.error(`❌ ERROR: ${basename(filePath)}: ${err.message}`);
    }
}

console.log(`\n💾 Total saved: ${Math.round(totalSaved / 1024)} KB = ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
