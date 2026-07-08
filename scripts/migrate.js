const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '../gibnpn06072026');
const TARGET_DIR = path.join(__dirname, '../src/app');

// Exclude these files from migration as they are templates, metadata, or malicious scripts
const EXCLUDED_FILES = new Set([
  'header.php',
  'fotter.php',
  'pagebanner.php',
  'banner.php',
  'metatag.php',
  '.error-logs.php',
  '.error-log.php',
  'come.php',
  'admin.php'
]);

// Helper function to slugify filenames to Next.js route names
function getSlug(filename) {
  const base = filename.replace(/\.php$/, '');
  if (base.toLowerCase() === 'index') {
    return '';
  }
  return base.toLowerCase().replace(/[\s_]+/g, '-');
}

// Convert HTML inline style strings to React JSX style objects
function convertStyleAttribute(html) {
  // Regex to match style="something" or style='something' (newline-safe)
  const styleRegex = /style=(['"])([\s\S]*?)\1/gi;
  
  return html.replace(styleRegex, (match, quote, styleStr) => {
    const declarations = styleStr.split(';').filter(d => d.trim() !== '');
    const objProps = declarations.map(decl => {
      const parts = decl.split(':');
      if (parts.length < 2) return null;
      
      const keyKebab = parts[0].trim();
      const val = parts.slice(1).join(':').trim();
      
      // Convert kebab-case key to camelCase
      const keyCamel = keyKebab.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      
      // Escape quotes in values
      const escapedVal = val.replace(/['"]/g, '\\$&');
      
      return `"${keyCamel}": "${escapedVal}"`;
    }).filter(Boolean);
    
    return `style={{ ${objProps.join(', ')} }}`;
  });
}

// Clean and translate links (Hrefs) inside HTML to Next.js equivalents
function cleanHrefs(html) {
  // Replace standard internal page links like "klehistory.php" with Next.js path "/klehistory"
  // Keep external links, anchor links, and PDF links (which are in public folder)
  const hrefRegex = /href=(['"])(.*?)\1/gi;
  
  return html.replace(hrefRegex, (match, quote, url) => {
    let newUrl = url.trim();
    
    // Check if it's a PDF or resource document path
    const isDoc = /\.(pdf|docx|xlsx|txt|html)$/i.test(newUrl) || newUrl.startsWith('images/') || newUrl.startsWith('iqac/') || newUrl.startsWith('naac/') || newUrl.startsWith('proceedings/') || newUrl.startsWith('ITEP/');
    
    if (isDoc) {
      // Make it absolute relative to public/
      if (!newUrl.startsWith('/') && !newUrl.startsWith('http')) {
        newUrl = '/' + newUrl;
      }
      return `href="${newUrl}"`;
    }
    
    // Convert local php link to nextjs slug
    if (newUrl.endsWith('.php') && !newUrl.startsWith('http')) {
      const filename = path.basename(newUrl);
      const slug = getSlug(filename);
      return `href="/${slug}"`;
    }
    
    // Convert empty hrefs
    if (newUrl === '' || newUrl === '#') {
      return `href="#"`;
    }
    
    return `href="${newUrl}"`;
  });
}

// Clean source image paths to ensure they reference public folder
function cleanImageSrcs(html) {
  const srcRegex = /src=(['"])(.*?)\1/gi;
  return html.replace(srcRegex, (match, quote, url) => {
    let newUrl = url.trim();
    if (!newUrl.startsWith('/') && !newUrl.startsWith('http') && !newUrl.startsWith('data:')) {
      newUrl = '/' + newUrl;
    }
    return `src="${newUrl}"`;
  });
}

// Fix unclosed self-closing HTML tags for JSX
function closeTags(html) {
  let cleaned = html;
  
  // Close unclosed <img ...> tags
  cleaned = cleaned.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />');
  
  // Close unclosed <br> tags
  cleaned = cleaned.replace(/<br\s*(?<!\/)>/gi, '<br />');
  
  // Close unclosed <input ...> tags
  cleaned = cleaned.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  
  // Close unclosed <hr> tags
  cleaned = cleaned.replace(/<hr\s*(?<!\/)>/gi, '<hr />');
  
  // Close unclosed <embed ...> tags
  cleaned = cleaned.replace(/<embed([^>]*?)(?<!\/)>/gi, '<embed$1 />');
  
  return cleaned;
}

// Fix common HTML typos, stray tags, and unclosed elements from the original PHP code
function fixHtmlErrors(html) {
  // Strip HTML comments at the very beginning (prevents balancing tools from running on commented code)
  let cleaned = html.replace(/<!--[\s\S]*?-->/g, '');
  
  // 1. Replace invalid </br> tags with proper <br />
  cleaned = cleaned.replace(/<\/br>/gi, '<br />');
  
  // 2. Fix basic tag typos before cell balancing (to avoid duplications)
  cleaned = cleaned.replace(/<\/t>/gi, '</a></td>');
  cleaned = cleaned.replace(/<\/td>\s*<\/td>/gi, '</td>');
  cleaned = cleaned.replace(/<\/th>\s*<\/th>/gi, '</th>');
  cleaned = cleaned.replace(/(?<!<)\/td>/gi, '</td>');
  cleaned = cleaned.replace(/<tr>\s*<th>\s*<tr>/gi, '<tr>');
  
  // 3. Fix nested href typo (e.g., href=<a href="images/..." target="_blank">Click Here</a>)
  cleaned = cleaned.replace(/<a\s+href=\s*<a\s+href=(['"])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi, '<a href="$2" target="_blank">$3</a>');
  cleaned = cleaned.replace(/href=<a\s+href=(['"])(.*?)\1[^>]*>/gi, 'href="$2" ');
  
  // 4. Fix duplicate or stray closing h3 tags
  cleaned = cleaned.replace(/<\/h3>\s*<img([^>]*?)>\s*<\/h3>/gi, '</h3><img$1 />');
  cleaned = cleaned.replace(/<\/h3>\s*<\/h3>/gi, '</h3>');
  
  // 5. Lowercase standard HTML tags (so React case matching works perfectly)
  const tagsToLower = ['p', 'strong', 'em', 'b', 'h3', 'h4', 'span', 'div', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'a', 'img'];
  for (const t of tagsToLower) {
    cleaned = cleaned.replace(new RegExp(`</${t}>`, 'gi'), `</${t}>`);
    cleaned = cleaned.replace(new RegExp(`<${t}\\b`, 'gi'), `<${t}`);
  }

  // 6. Fix table cell strong tags that span cells or are unclosed
  cleaned = cleaned.replace(/<td>\s*<strong>\s*(\d+)\s*<\/td>/gi, '<td><strong>$1</strong></td>');
  cleaned = cleaned.replace(/<td>\s*(\d+)\s*<\/strong>\s*<\/td>/gi, '<td><strong>$1</strong></td>');
  cleaned = cleaned.replace(/<td>\s*([\d\.]+(?:\s*%)?)\s*<\/strong>\s*<\/td>/gi, '<td><strong>$1</strong></td>');

  // 7. Fix table head rows that close with </thead> without opening <thead>
  cleaned = cleaned.replace(/<tr>(\s*<th>[\s\S]*?<\/tr>)\s*<\/thead>/gi, '<thead><tr>$1</thead>');
  
  // Fix thead opened without closing tr (e.g., in office.php)
  cleaned = cleaned.replace(/<thead>\s*<tr>([\s\S]*?)(?=<\/thead>)/gi, (match, content) => {
    if (!content.toLowerCase().includes('</tr>') && !content.toLowerCase().includes('<\/tr>')) {
      return `<thead><tr>${content}</tr>`;
    }
    return match;
  });

  // Close unclosed thead tags when a data row starts
  cleaned = cleaned.replace(/<thead>((?:(?!<\/thead>|<thead|<\/tbody>|<tbody>)[\s\S])*?)(?=<tr>\s*<td)/gi, '<thead>$1</thead><tbody>');

  // Close unclosed thead tags before tbody starts or table closes
  cleaned = cleaned.replace(/<thead>((?:(?!<\/thead>|<thead|<\/tbody>|<tbody>)[\s\S])*?)(?=<tbody>|<\/table>)/gi, (match, content) => {
    if (!content.toLowerCase().includes('</thead>') && !content.toLowerCase().includes('<\/thead>')) {
      return `<thead>${content}</thead>`;
    }
    return match;
  });

  // Fix nested <tr> inside <td> typo (e.g. in office.php / curricular.php)
  cleaned = cleaned.replace(/<tr>\s*<td[^>]*>\s*(?:<strong[^>]*>\s*)*<tr>/gi, '<tr>');
  cleaned = cleaned.replace(/<tr>\s*<td[^>]*>\s*(?:<strong[^>]*>\s*)*(?=<tr>)/gi, '');

  // Fix missing opening tr tags (e.g. in criterian6.php)
  cleaned = cleaned.replace(/<\/tr>(\s*)(?=<td>)/gi, '</tr>$1<tr>');

  // Fix broken tag closing </tr without > (e.g., in composition.php)
  cleaned = cleaned.replace(/<\/tr(?!\w|>)/gi, '</tr>');

  // Fix body closing tag typos inside tables (e.g., <body> and </body> instead of <tbody> and </tbody> in hostel.php/affiliation.php)
  cleaned = cleaned.replace(/<body\b/gi, '<tbody');
  cleaned = cleaned.replace(/<\/body>/gi, '</tbody>');

  // Fix stray td outside of tables (e.g. in coc.php where <a> is closed by </td>)
  cleaned = cleaned.replace(/(?<!<strong\b[^>]*>)(<a\b[^>]*>[\s\S]*?<\/a>)\s*<\/strong>/gi, '$1');
  cleaned = cleaned.replace(/<a\b([^>]*)>([\s\S]*?)<\/td>/gi, '<a$1>$2</a>');

  // 8. UNIFIED Cell Parser and Inline Tag Balancer (flawlessly parses and balances td/th cells)
  const cellRegex = /<(td|th)\b([^>]*)>([\s\S]*?)(?=<\/td>|<\/th>|<td\b|<th\b|<\/tr>|<tr>|<\/tbody>|<\/table>)/gi;
  cleaned = cleaned.replace(cellRegex, (match, tagName, attrs, content) => {
    let fixedContent = content;
    const inlineTags = ['strong', 'b', 'em', 'span', 'a', 'font'];
    for (const tag of inlineTags) {
      const openCount = (fixedContent.match(new RegExp(`<${tag}\\b`, 'gi')) || []).length;
      const closeCount = (fixedContent.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
      if (openCount > closeCount) {
        let diff = openCount - closeCount;
        for (let i = 0; i < diff; i++) {
          fixedContent += `</${tag}>`;
        }
      } else if (closeCount > openCount) {
        let diff = closeCount - openCount;
        for (let i = 0; i < diff; i++) {
          const lastIdx = fixedContent.lastIndexOf(`</${tag}>`);
          if (lastIdx !== -1) {
            fixedContent = fixedContent.slice(0, lastIdx) + fixedContent.slice(lastIdx + tag.length + 3);
          }
        }
      }
    }
    return `<${tagName}${attrs}>${fixedContent}</${tagName}>`;
  });

  // 8b. UNIFIED List and Paragraph Inline Balancer (balances li/p tags)
  const blockRegex = /<(li|p)\b([^>]*)>([\s\S]*?)(?=<\/li>|<\/p>|<li\b|<p\b|<\/ul>|<\/ol>|<\/div>)/gi;
  cleaned = cleaned.replace(blockRegex, (match, tagName, attrs, content) => {
    let fixedContent = content;
    const inlineTags = ['strong', 'b', 'em', 'span', 'a', 'font'];
    for (const tag of inlineTags) {
      const openCount = (fixedContent.match(new RegExp(`<${tag}\\b`, 'gi')) || []).length;
      const closeCount = (fixedContent.match(new RegExp(`</${tag}>`, 'gi')) || []).length;
      if (openCount > closeCount) {
        let diff = openCount - closeCount;
        for (let i = 0; i < diff; i++) {
          fixedContent += `</${tag}>`;
        }
      } else if (closeCount > openCount) {
        let diff = closeCount - openCount;
        for (let i = 0; i < diff; i++) {
          const lastIdx = fixedContent.lastIndexOf(`</${tag}>`);
          if (lastIdx !== -1) {
            fixedContent = fixedContent.slice(0, lastIdx) + fixedContent.slice(lastIdx + tag.length + 3);
          }
        }
      }
    }
    return `<${tagName}${attrs}>${fixedContent}</${tagName}>`;
  });

  // Collapse multiple sequential duplicate closing tags (excluding div/headers to preserve nested structure)
  const tagsToCollapse = ['p', 'li', 'td', 'th', 'a', 'tr'];
  for (const t of tagsToCollapse) {
    const rx = new RegExp(`</${t}>\\s*</${t}>`, 'i');
    while (rx.test(cleaned)) {
      cleaned = cleaned.replace(new RegExp(`</${t}>(\\s*)</${t}>`, 'gi'), `</${t}>`);
    }
  }

  // Clean stray closing tag syntax typos (e.g. in criterian6.php)
  cleaned = cleaned.replace(/<\/td>>/gi, '</td>');
  cleaned = cleaned.replace(/<\/th>>/gi, '</th>');

  // Remove stray </strong> tags in td/th (e.g. in mentor.php)
  cleaned = cleaned.replace(/(<td[^>]*>)([^<]*?)<\/strong>/gi, '$1$2');
  cleaned = cleaned.replace(/(<th[^>]*>)([^<]*?)<\/strong>/gi, '$1$2');

  // Fix target="_blank"</a> typo
  cleaned = cleaned.replace(/target=(['"])_blank\1\s*<\/a>/gi, 'target="_blank"></a>');

  // Fix table-closing tags before parent divs close
  cleaned = cleaned.replace(/<\/tr>(\s*<\/div>)/gi, '</tr></tbody></table>$1');

  // Fix stray <tr></td> typo (e.g. in asso.php)
  cleaned = cleaned.replace(/<tr><\/td>/gi, '<tr>');

  // Fix stray </span> inside headers (e.g. in aqardocs.php)
  cleaned = cleaned.replace(/<(h[1-6])\b([^>]*)>([^<]*)<\/span><\/\1>/gi, '<$1$2>$3</$1>');

  // Fix premature tbody before thead (e.g. in library.php / ba.php / bsc.php staff tables)
  cleaned = cleaned.replace(/<tbody>\s*<thead>/gi, '<thead>');
  cleaned = cleaned.replace(/<tbody>\s*<tbody>/gi, '<tbody>');

  // Fix stray </p> tags closed after list items (e.g. in milestone.php / indoor.php)
  cleaned = cleaned.replace(/<\/li>\s*(?:<br\s*\/?>\s*)*<\/p>/gi, '</li>');
  cleaned = cleaned.replace(/<\/ul>\s*(?:<br\s*\/?>\s*)*<\/p>/gi, '</ul>');
  cleaned = cleaned.replace(/<\/ol>\s*(?:<br\s*\/?>\s*)*<\/p>/gi, '</ol>');

  // Fix premature closing </li> when followed by a paragraph in same item (e.g. in home index.php)
  cleaned = cleaned.replace(/<\/li>\s*(<p[^>]*>[\s\S]*?<\/p>)\s*<\/li>/gi, '$1</li>');

  // Fix illegal heading tags nested inside paragraphs (e.g. <p><h3>...</h3></p>)
  cleaned = cleaned.replace(/<p>\s*(<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi, '$1');

  // Fix duplicate sequential closing tags (e.g. in researchcell.php)
  cleaned = cleaned.replace(/(<\/strong>\s*<\/li>)\s*\1/gi, '$1');
  cleaned = cleaned.replace(/(<\/strong>\s*<\/td>)\s*\1/gi, '$1');

  // Fix nested headers FIRST (e.g. <h3> ... <h3> in about.php)
  const headerRegex = /<(h[1-6])\b([^>]*)>([\s\S]*?)(?=<h[1-6]\b|<\/div>|<\/body>)/gi;
  cleaned = cleaned.replace(headerRegex, (match, tagName, attrs, content) => {
    let fixed = content;
    if (!fixed.toLowerCase().includes(`</${tagName}>`)) {
      return `<${tagName}${attrs}>${fixed}</${tagName}>`;
    }
    return match;
  });

  // Fix mismatched header tags SECOND (e.g. <h4> ... </h3> in donor.php)
  cleaned = cleaned.replace(/<(h[1-6])\b([^>]*)>([\s\S]*?)<\/h[1-6]>/gi, '<$1$2>$3</$1>');
  cleaned = cleaned.replace(/(<\/h[1-6]>)\s*<\/h[1-6]>/gi, '$1');

  // Balance tr tags (close unclosed table rows, boundary-safe so it never crosses tbody/thead)
  const trRegex = /<tr>((?:(?!<tbody|<thead|<\/tbody|<\/thead>|<table|<\/table>)[\s\S])*?)(?=\s*<tr>|\s*<\/tbody>|\s*<\/table>|\s*<tbody>|\s*<thead>|\s*<\/thead>)/gi;
  cleaned = cleaned.replace(trRegex, (match, content) => {
    let fixed = content;
    if (!fixed.toLowerCase().includes('</tr>') && !fixed.toLowerCase().includes('<\/tr>')) {
      return `<tr>${fixed}</tr>`;
    }
    return match;
  });

  // Fix missing opening tr tags after tbody/thead (e.g. in best-practice.php / office.php)
  cleaned = cleaned.replace(/<tbody>(\s*)(?=<td>)/gi, '<tbody>$1<tr>');
  cleaned = cleaned.replace(/<thead>(\s*)(?=<td>|<th>)/gi, '<thead>$1<tr>');

  // Auto-insert thead/tbody when rows are not wrapped in one (e.g. in bsc.php / achivement.php / curricular.php)
  cleaned = cleaned.replace(/(<table[^>]*>|<\/thead>)(\s*)(?=<tr>\s*<th|<tr>\s*<td>\s*<strong>\s*<th)/gi, '$1$2<thead>');
  cleaned = cleaned.replace(/(<table[^>]*>|<\/thead>)(\s*)(?=<tr>\s*<td)/gi, '$1$2<tbody>');

  // Close unclosed tbody tags before table closes (e.g. in bsc.php / library.php / mentor.php / office.php)
  cleaned = cleaned.replace(/<tbody>([\s\S]*?)(?=<\/table>)/gi, (match, content) => {
    if (!content.toLowerCase().includes('</tbody>') && !content.toLowerCase().includes('<\/tbody>')) {
      return `<tbody>${content}</tbody>`;
    }
    return match;
  });

  // Escape raw < characters that are not part of HTML tags (prevents JSX parser crash)
  cleaned = cleaned.replace(/<(?![a-zA-Z\/!])/g, '&lt;');

  // 9. Fix unclosed strong tags in cells or paragraphs
  const tagRegex = /(<strong[^>]*>)([\s\S]*?)(?=<\/p>|<\/td>|<\/li>|<\/div>|<\/tr>)/gi;
  cleaned = cleaned.replace(tagRegex, (match, openTag, content) => {
    if (!content.toLowerCase().includes('</strong>')) {
      return `${openTag}${content}</strong>`;
    }
    return match;
  });

  // 10. Flatten nested <thead>, </thead>, and <strong> tags (runs near the end to merge nesting typos)
  cleaned = cleaned.replace(/<thead>\s*<thead>/gi, '<thead>');
  cleaned = cleaned.replace(/<\/thead>\s*<\/thead>/gi, '</thead>');
  cleaned = cleaned.replace(/<strong\b([^>]*)>\s*<strong>/gi, '<strong$1>');
  cleaned = cleaned.replace(/<\/strong>\s*<\/strong>/gi, '</strong>');

  // 11. Balance <div> tags (add missing closing divs or remove extra closing divs)
  const openDivs = (cleaned.match(/<div\b/gi) || []).length;
  const closeDivs = (cleaned.match(/<\/div>/gi) || []).length;
  if (closeDivs > openDivs) {
    let diff = closeDivs - openDivs;
    for (let i = 0; i < diff; i++) {
      const lastIdx = cleaned.lastIndexOf('</div>');
      if (lastIdx !== -1) {
        cleaned = cleaned.slice(0, lastIdx) + cleaned.slice(lastIdx + 6);
      }
    }
  } else if (openDivs > closeDivs) {
    let diff = openDivs - closeDivs;
    for (let i = 0; i < diff; i++) {
      cleaned += '</div>';
    }
  }

  // ---- FINAL STRUCTURAL CLEANUP (State-Machine Pass) ----

  // 1. Remove tbody auto-inserted inside thead when thead-close rule ALSO inserted tbody
  cleaned = cleaned.replace(/<tbody>([\s\S]*?)<\/thead><tbody>/gi, (match, inner) => {
    if (/^[\s\r\n]*(<tr><\/tr>[\s\r\n]*)*$/.test(inner)) {
      return '<tbody>';
    }
    return `<tbody>${inner}`;
  });

  // 2. Fix <tr><th><tr> pattern (asso.php)
  cleaned = cleaned.replace(/<tr>([\s\r\n]*)<th>([\s\r\n]*)<tr>/gi, '<tr>');

  // 3. Remove phantom empty rows right after tbody
  cleaned = cleaned.replace(/<tbody>([\s\r\n]*)<tr><\/tr>([\s\r\n]*)/gi, '<tbody>$2');

  // 4. State-machine: scan tag by tag and insert missing </thead> before data rows
  //    and missing </tbody> before </table>
  cleaned = (function balanceTableStructure(html) {
    // Tokenize: split on table structural tags (including <table> and </table> for boundary tracking)
    const tokenRe = /(<\/?(?:table|thead|tbody|tr|td|th)\b[^>]*>)/gi;
    const tokens = html.split(tokenRe);
    let inThead = false;
    let inTbody = false;
    const result = [];
    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];
      const lower = tok.toLowerCase().trim();
      if (lower.startsWith('<table') && !lower.startsWith('</table') && !lower.startsWith('<thead') && !lower.startsWith('<tbody')) {
        // Reset state for each new table
        inThead = false;
        inTbody = false;
        result.push(tok);
      } else if (lower === '<thead>') {
        inThead = true;
        result.push(tok);
      } else if (lower === '</thead>') {
        inThead = false;
        result.push(tok);
      } else if (lower === '<tbody>') {
        if (inThead) {
          result.push('</thead>');
          inThead = false;
        }
        inTbody = true;
        result.push(tok);
      } else if (lower === '</tbody>') {
        if (!inTbody) {
          // Stray </tbody> — suppress it
        } else {
          inTbody = false;
          result.push(tok);
        }
      } else if (lower === '<tr>') {
        if (inThead) {
          let nextStructural = '';
          for (let j = i + 1; j < tokens.length; j++) {
            const t = tokens[j].toLowerCase().trim();
            if (t === '<td>' || t.startsWith('<td ') || t === '<th>' || t.startsWith('<th ')) {
              nextStructural = t;
              break;
            }
            if (t === '<tr>' || t === '</tr>' || t === '</thead>' || t === '<tbody>' || t.startsWith('</table')) break;
          }
          if (nextStructural.startsWith('<td')) {
            result.push('</thead><tbody>');
            inThead = false;
            inTbody = true;
          }
        }
        result.push(tok);
      } else if (lower.startsWith('</table')) {
        if (inTbody) {
          result.push('</tbody>');
          inTbody = false;
        }
        if (inThead) {
          result.push('</thead>');
          inThead = false;
        }
        result.push(tok);
      } else {
        result.push(tok);
      }
    }
    return result.join('');
  })(cleaned);

  return cleaned;
}



// Convert HTML entities and characters that crash JSX compiler
function escapeJSX(html) {
  let cleaned = html;
  
  // Clean Jquery script elements or bootstrap script files at bottom of pages since React loads them globally or we recreate functionality
  cleaned = cleaned.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  // Escape loose ampersands in text (exclude &nbsp; &amp; &lt; &gt; etc.)
  // We can convert & to &amp; when not followed by a valid entity sequence
  cleaned = cleaned.replace(/&(?![a-zA-Z0-9#]+;)/g, '&amp;');

  // Escape single quotes inside tags where JSX parser might get confused
  // (e.g. within text inside components)
  // We only replace apostrophes in textual nodes, but simple replace of raw string values is fine
  
  // Replace HTML comments with JSX comments
  cleaned = cleaned.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Fix common HTML attributes that must be camelCased in React
  cleaned = cleaned.replace(/\bclass=/gi, 'className=');
  cleaned = cleaned.replace(/\bfor=/gi, 'htmlFor=');
  cleaned = cleaned.replace(/\bcolspan=(\d+)/gi, 'colSpan="$1"');
  cleaned = cleaned.replace(/\bcolspan=/gi, 'colSpan=');
  cleaned = cleaned.replace(/\browspan=(\d+)/gi, 'rowSpan="$1"');
  cleaned = cleaned.replace(/\browspan=/gi, 'rowSpan=');
  cleaned = cleaned.replace(/\bframeborder=/gi, 'frameBorder=');
  cleaned = cleaned.replace(/\ballowfullscreen=/gi, 'allowFullScreen=');
  cleaned = cleaned.replace(/\bautocomplete=/gi, 'autoComplete=');
  cleaned = cleaned.replace(/\breadonly=/gi, 'readOnly=');
  cleaned = cleaned.replace(/\bmaxlength=/gi, 'maxLength=');
  cleaned = cleaned.replace(/\bcellpadding=/gi, 'cellPadding=');
  cleaned = cleaned.replace(/\bcellspacing=/gi, 'cellSpacing=');
  cleaned = cleaned.replace(/\bvalign=/gi, 'vAlign=');
  // Fix marquee attributes and hover handlers to be valid JSX
  cleaned = cleaned.replace(/\bscrollAmount=/gi, 'scrollamount=');
  cleaned = cleaned.replace(/\bonmouseover=(["'])this\.stop\(\);?\1/gi, 'onMouseOver={(e) => e.currentTarget.stop()}');
  cleaned = cleaned.replace(/\bonmouseout=(["'])this\.start\(\);?\1/gi, 'onMouseOut={(e) => e.currentTarget.start()}');

  return cleaned;
}

// Migrate a single PHP file
function migrateFile(file) {
  const filePath = path.join(SOURCE_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const slug = getSlug(file);
  const isHome = slug === '';
  
  console.log(`Processing file: ${file} -> route: /${slug}`);
  
  // Step 1: Extract main content
  let startIdx = 0;
  // Banner / pagebanner inclusions
  const headerRegex = /include\s*\(\s*['"](?:banner|pagebanner|header)\.php['"]\s*\)\s*;\s*\?>/g;
  let match;
  while ((match = headerRegex.exec(fileContent)) !== null) {
    startIdx = match.index + match[0].length;
  }
  
  // Slicing starts right after the header/banner inclusions
  
  // Find footer inclusion or footer tags to end content extraction
  let endIdx = fileContent.length;
  const footerRegex = /(?:(?:<!--\s*|\/\/)?\s*footer\b|<\?php\s*include\s*\(\s*['"](?:fotter|footer)\.php['"]\s*\)\s*;)/gi;
  const footerMatch = footerRegex.exec(fileContent.slice(startIdx));
  if (footerMatch) {
    endIdx = startIdx + footerMatch.index;
  }
  
  let mainContent = fileContent.slice(startIdx, endIdx).trim();
  
  // Step 2: Clean and convert content to JSX
  mainContent = fixHtmlErrors(mainContent);
  mainContent = convertStyleAttribute(mainContent);
  mainContent = cleanHrefs(mainContent);
  mainContent = cleanImageSrcs(mainContent);
  mainContent = closeTags(mainContent);
  mainContent = escapeJSX(mainContent);
  
  // Step 3: Wrap inside a Next.js React Page Component
  let componentCode = '';
  
  if (isHome) {
    // Homepage includes Banner component
    componentCode = `'use client';

import Banner from '@/components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      
      <div className="main-content">
        ${mainContent}
      </div>
    </>
  );
}
`;
  } else {
    // Inner pages include PageBanner component
    const pageName = file.replace(/\.php$/, '');
    const capitalizedName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/[\s_]+(.)/g, (m, c) => c.toUpperCase());
    
    componentCode = `'use client';

import PageBanner from '@/components/PageBanner';
import Link from 'next/link';

export default function ${capitalizedName}Page() {
  return (
    <>
      <PageBanner />
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            ${capitalizedName}
          </li>
        </ol>
      </nav>

      <div className="main-content py-5">
        <div className="container">
          ${mainContent}
        </div>
      </div>
    </>
  );
}
`;
  }
  
  // Step 4: Write to file
  const destDir = isHome ? TARGET_DIR : path.join(TARGET_DIR, slug);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  const destPath = path.join(destDir, 'page.tsx');
  fs.writeFileSync(destPath, componentCode, 'utf8');
}

// Main execution function
function run() {
  console.log('Starting migration...');
  
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory does not exist: ${SOURCE_DIR}`);
    process.exit(1);
  }
  
  const files = fs.readdirSync(SOURCE_DIR);
  const phpFiles = files.filter(f => f.endsWith('.php') && !EXCLUDED_FILES.has(f));
  
  console.log(`Found ${phpFiles.length} PHP files to migrate.`);
  
  let successCount = 0;
  let errorCount = 0;
  
  phpFiles.forEach(file => {
    try {
      migrateFile(file);
      successCount++;
    } catch (err) {
      console.error(`Error migrating file ${file}:`, err);
      errorCount++;
    }
  });
  
  console.log(`Migration summary: ${successCount} files migrated successfully, ${errorCount} errors.`);
}

run();
