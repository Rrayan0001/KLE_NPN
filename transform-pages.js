const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');

const subdirs = fs.readdirSync(appDir).filter(dir => {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  return fs.existsSync(pagePath) && dir !== 'page.tsx';
});

console.log(`Found ${subdirs.length} subpages to transform`);

let successCount = 0;
let failCount = 0;

for (const dir of subdirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    if (content.includes('SubpageLayout')) {
      console.log(`  SKIP ${dir} (already transformed)`);
      continue;
    }
    
    // Extract breadcrumb text
    const breadcrumbMatch = content.match(/<li\s+className="breadcrumb-item\s+active"[^>]*>([^<]+)<\/li>/);
    let breadcrumbText = '';
    if (breadcrumbMatch) {
      breadcrumbText = breadcrumbMatch[1].trim();
    } else {
      breadcrumbText = dir.charAt(0).toUpperCase() + dir.slice(1).replace(/-/g, ' ');
    }
    
    // Replace imports
    content = content.replace(/import PageBanner from ['"]@\/components\/PageBanner['"];?\n?/, '');
    content = content.replace(/import Link from ['"]next\/link['"];?\n?/, "import Link from 'next/link';\n");
    
    // Add SubpageLayout import after 'use client';
    content = content.replace(/'use client';\n/, "'use client';\n\nimport SubpageLayout from '@/components/SubpageLayout';\n");
    
    // Find the return statement and wrap it
    const returnMatch = content.match(/return\s*\(\s*<>\s*<PageBanner\s*\/>\s*([\s\S]*?)\s*<\/>\s*\);/);
    
    if (returnMatch) {
      const innerContent = returnMatch[1];
      
      // Replace the entire return block
      const newReturn = `return (
    <SubpageLayout breadcrumb="${breadcrumbText.replace(/"/g, '\\"')}">
      ${innerContent}
    </SubpageLayout>
  );`;
      
      content = content.replace(returnMatch[0], newReturn);
      
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`  OK ${dir}`);
      successCount++;
    } else {
      console.log(`  WARN ${dir}: Could not find return pattern`);
      failCount++;
    }
    
  } catch (err) {
    console.log(`  FAIL ${dir}: ${err.message}`);
    failCount++;
  }
}

console.log(`\nDone: ${successCount} transformed, ${failCount} failed/skipped`);
