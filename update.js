const fs = require('fs');

let html = fs.readFileSync('c:/TheromX 2026/index.html', 'utf8');

// The icons list to cycle through for the themes
const icons = [
  // Brain
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
  // Atom
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 3.8c-2.04-2.03-7.36-.02-11.9 4.5-4.54 4.52-6.54 9.87-4.5 11.9 2.04 2.03 7.36.02 11.9-4.5 4.54-4.52 6.54-9.87 4.5-11.9Z"/></svg>`,
  // Shield
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  // Leaf
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  // Network
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
  // Blocks
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>`
];

// Find the themes section
const startTag = '<div class="themes-list">';
const endTag = '</div>\n    </div>\n  </section>';
const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const themesContent = html.substring(startIndex, endIndex);
  
  // Parse the themes
  const themeRegex = /<span class="theme-name">(.*?)<\/span>\s*<span class="theme-desc">(.*?)<\/span>/g;
  let match;
  const themes = [];
  while ((match = themeRegex.exec(themesContent)) !== null) {
    themes.push({ name: match[1].trim(), desc: match[2].trim() });
  }

  // Generate new HTML
  let newHtml = '<div class="themes-grid">\n';
  themes.forEach((theme, i) => {
    const icon = icons[i % icons.length];
    newHtml += `        <div class="theme-card scroll-reveal">
          <div class="theme-icon-box">
            ${icon}
          </div>
          <div class="theme-content">
            <h3 class="theme-name">${theme.name}</h3>
            <p class="theme-desc">${theme.desc}</p>
          </div>
        </div>\n`;
  });
  newHtml += '      ';

  html = html.substring(0, startIndex) + newHtml + html.substring(endIndex);
  fs.writeFileSync('c:/TheromX 2026/index.html', html);
  console.log('index.html updated successfully with grid themes.');
} else {
  console.error('Could not find themes list bounds.');
}
