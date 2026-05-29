const fs = require('fs');

let content = fs.readFileSync('theoremx_mobile.html', 'utf-8');

// 1. Hero meta
content = content.replace(
  /<p class="hero-meta anim-fade-up" style="--anim-delay:260ms">[\s\S]*?<\/p>/,
  `<p class="hero-meta anim-fade-up" style="--anim-delay:260ms">
        DEPT. OF DATA SCIENCE<br>
        DR. M.G.R. EDUCATIONAL AND RESEARCH INSTITUTE<br>
        24 JUNE 2026<br>
        HYBRID MODE
      </p>`
);

// 2. About pills
content = content.replace(
  /<div class="about-pills">\s*<span class="pill-tag pill-navy">AI GAME STALLS<\/span>\s*<span class="pill-tag pill-navy">RESEARCH PRESENTATIONS<\/span>\s*<span class="pill-tag pill-navy">NETWORKING<\/span>\s*<span class="pill-tag pill-navy">INNOVATION SHOWCASE<\/span>\s*<\/div>/,
  `<div class="about-pills">
            <span class="pill-tag pill-navy">RESEARCH PRESENTATIONS</span>
            <span class="pill-tag pill-navy">INNOVATION SHOWCASE</span>
            <span class="pill-tag pill-navy">AI GAME STALLS</span>
            <span class="pill-tag pill-navy">NETWORKING</span>
          </div>`
);

// 3. Remove logos from schedule session headers
content = content.replace(
  /<span><img src="data:image\/png;base64,[^"]+" alt="Logo" style="height: 1\.2em; vertical-align: middle; margin-right: 6px;" \/> Morning Session<\/span>/g,
  `<span>Morning Session</span>`
);
content = content.replace(
  /<span><img src="data:image\/png;base64,[^"]+" alt="Logo" style="height: 1\.2em; vertical-align: middle; margin-right: 6px;" \/> Afternoon Session<\/span>/g,
  `<span>Afternoon Session</span>`
);
content = content.replace(
  /<span><img src="data:image\/png;base64,[^"]+" alt="Logo" style="height: 1\.2em; vertical-align: middle; margin-right: 6px;" \/> Evening Session<\/span>/g,
  `<span>Evening Session</span>`
);

// 4. Lunch
content = content.replace(
  /<h4 class="sched-title">Networking Lunch<\/h4>/g,
  `<h4 class="sched-title">Lunch</h4>`
);

// 5 & 6. Move Coordinators and Add Student Coordinators
const coordRegex = /(<section class="coordinators section" id="coordinators" style="background: var\(--bg-offwhite\);">[\s\S]*?<\/section>)/;
const match = content.match(coordRegex);
if (match) {
  let coordSection = match[1];
  // remove it from its original place
  content = content.replace(coordRegex, '');
  
  // create student coordinators section
  let studentCoordSection = `

  <section class="student-coordinators section" id="student-coordinators" style="background: var(--bg-white);">
    <div class="container">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <p class="section-label-mono">STUDENT LEADERSHIP</p>
        <h2 class="section-heading">Student Coordinators</h2>
      </div>
      <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
        <div style="background: #fff; padding: 1.5rem; border-radius: 12px; text-align: center; border: 1px solid var(--border); width: 250px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
          <h4 style="font-family: var(--font-head); font-size: 1.1rem; color: var(--text-navy); margin-bottom: 0.25rem;">Student Name</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Coordinator</p>
          <p style="font-size: 0.85rem; color: var(--text-navy); font-weight: 600; margin-top: 0.5rem;">WhatsApp : 9</p>
        </div>
      </div>
    </div>
  </section>

`;

  // insert before register section
  content = content.replace(
    /(\s*)<section class="register section" id="register">/,
    `$1${coordSection}${studentCoordSection}  <section class="register section" id="register">`
  );
}

fs.writeFileSync('theoremx_mobile.html', content, 'utf-8');
console.log("Done");
