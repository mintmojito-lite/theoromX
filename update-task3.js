const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove the old poster sections entirely
html = html.replace(/<section class="poster-section section"[\s\S]*?<\/section>\s*/g, '');

// 2. Replace the brochure section with a properly scaled poster section
const brochureRegex = /<section class="brochure section"[\s\S]*?<\/section>/;
const newPosterHtml = `<section class="poster-section section" id="poster" style="background-color: var(--bg-white); padding-top: 1rem; padding-bottom: 1rem;">
    <div class="container" style="text-align: center;">
      <div class="section-header" style="margin-bottom: 2rem;">
        <p class="section-label-mono">EVENT POSTER</p>
        <h2 class="section-heading">Official Poster</h2>
      </div>
      <img src="poster.jpeg" alt="THEOREMX Poster" style="width: 100%; max-width: 1000px; height: auto; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
    </div>
  </section>`;
html = html.replace(brochureRegex, newPosterHtml);

fs.writeFileSync('index.html', html);

// 3. Update style.css to reduce gaps and increase college logo size
let css = fs.readFileSync('style.css', 'utf8');

// Reduce section padding
css = css.replace(/--section-py: clamp\(4rem, 10vw, 8rem\);/g, '--section-py: clamp(3rem, 6vw, 5rem);');

// Reduce hero padding
css = css.replace(/padding: clamp\(6rem, 14vw, 11rem\) var\(--section-px\) clamp\(5rem, 10vw, 8rem\);/g, 'padding: clamp(4rem, 8vw, 6rem) var(--section-px) clamp(3rem, 6vw, 4.5rem);');

// Increase desktop college logo
css = css.replace(/\.nav-clg-logo \{\s*display: inline-block !important;\s*height: 150px !important;/g, '.nav-clg-logo {\n  display: inline-block !important;\n  height: 180px !important;');
css = css.replace(/max-width: 150px !important;/g, 'max-width: 180px !important;');

// Increase mobile college logo (currently 45px)
css = css.replace(/\.nav-clg-logo \{\s*height: 45px !important;/g, '.nav-clg-logo {\n      height: 60px !important;');

fs.writeFileSync('style.css', css);

console.log("Updated task 3 successfully.");
