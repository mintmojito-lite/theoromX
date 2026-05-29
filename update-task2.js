const fs = require('fs');

// 1. READ FILES
let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('style.css', 'utf8');
let js = fs.readFileSync('script.js', 'utf8');
let build = fs.readFileSync('build-single.js', 'utf8');

// 2. ADD POSTER
// Find the end of the hero section and insert the poster section
const posterHtml = `  </section>

  <section class="poster-section section" style="background: var(--bg-white); padding-bottom: 0;">
    <div class="container" style="text-align: center;">
      <img src="poster.jpeg" alt="THEOREMX Poster" style="width: 100%; max-width: 900px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
    </div>
  </section>

  <section class="brochure section"`;
html = html.replace('  </section>\n\n  <!-- ═══════════════ EVENT BROCHURE ═══════════════ -->\n  <section class="brochure section"', posterHtml);
// In case the comment is already gone:
html = html.replace('  </section>\n\n  <section class="brochure section"', posterHtml);

// 3. REMOVE COMMENTS
html = html.replace(/<!--[\s\S]*?-->/g, '');
css = css.replace(/\/\*[\s\S]*?\*\//g, '');
js = js.replace(/\/\*[\s\S]*?\*\//g, '');
js = js.replace(/^[ \t]*\/\/.*$/gm, '');

// 4. SPELLING FIX: THEROMX -> THEOREMX
html = html.replace(/THEROMX/g, 'THEOREMX');
html = html.replace(/THEROM/g, 'THEOREM');
html = html.replace(/theromx/g, 'theoremx');

css = css.replace(/THEROMX/g, 'THEOREMX');
css = css.replace(/THEROM/g, 'THEOREM');
css = css.replace(/theromx/g, 'theoremx');

js = js.replace(/THEROMX/g, 'THEOREMX');
js = js.replace(/THEROM/g, 'THEOREM');
js = js.replace(/theromx/g, 'theoremx');

// 5. UPDATE BUILD SCRIPT
build = build.replace(/theromx_mobile\.html/g, 'theoremx_mobile.html');

const buildAddition1 = `  const whatsappImage = fs.readFileSync('WhatsApp Image 2026-05-28 at 1.18.57 PM.jpeg', 'base64');
  const posterImg = fs.readFileSync('poster.jpeg', 'base64');`;
const buildAddition2 = `  html = html.replace('src="WhatsApp Image 2026-05-28 at 1.18.57 PM.jpeg"', \`src="data:image/jpeg;base64,\${whatsappImage}"\`);
  html = html.replace('src="poster.jpeg"', \`src="data:image/jpeg;base64,\${posterImg}"\`);`;

build = build.replace(`  const whatsappImage = fs.readFileSync('WhatsApp Image 2026-05-28 at 1.18.57 PM.jpeg', 'base64');`, buildAddition1);
build = build.replace(`  html = html.replace('src="WhatsApp Image 2026-05-28 at 1.18.57 PM.jpeg"', \`src="data:image/jpeg;base64,\${whatsappImage}"\`);`, buildAddition2);

// Delete old file
try {
  if (fs.existsSync('theromx_mobile.html')) {
    fs.unlinkSync('theromx_mobile.html');
  }
} catch (e) { console.error(e); }

// 6. SAVE EVERYTHING
fs.writeFileSync('index.html', html);
fs.writeFileSync('style.css', css);
fs.writeFileSync('script.js', js);
fs.writeFileSync('build-single.js', build);

console.log("Done updating sources.");
