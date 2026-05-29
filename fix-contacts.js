const fs = require('fs');

const files = ['index.html', 'theoremx_mobile.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');

  // Replace Student Coordinators
  const newStudentCoordinators = `
        <div style="background: #fff; padding: 1.5rem; border-radius: 12px; text-align: center; border: 1px solid var(--border); width: 250px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
          <h4 style="font-family: var(--font-head); font-size: 1.1rem; color: var(--text-navy); margin-bottom: 0.25rem;">P. S. Balasubramanian</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Student Coordinator</p>
        </div>
        <div style="background: #fff; padding: 1.5rem; border-radius: 12px; text-align: center; border: 1px solid var(--border); width: 250px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
          <h4 style="font-family: var(--font-head); font-size: 1.1rem; color: var(--text-navy); margin-bottom: 0.25rem;">D. Aakash</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Student Coordinator</p>
        </div>
        <div style="background: #fff; padding: 1.5rem; border-radius: 12px; text-align: center; border: 1px solid var(--border); width: 250px; box-shadow: 0 4px 15px rgba(0,0,0,0.03);">
          <h4 style="font-family: var(--font-head); font-size: 1.1rem; color: var(--text-navy); margin-bottom: 0.25rem;">D. M. Pradeep</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Student Coordinator</p>
        </div>`;

  // It matches the exact block we had before
  content = content.replace(
    /<div style="background: #fff; padding: 1\.5rem; border-radius: 12px; text-align: center; border: 1px solid var\(--border\); width: 250px; box-shadow: 0 4px 15px rgba\(0,0,0,0\.03\);">\s*<h4 style="font-family: var\(--font-head\); font-size: 1\.1rem; color: var\(--text-navy\); margin-bottom: 0\.25rem;">Student Name<\/h4>\s*<p style="font-size: 0\.85rem; color: var\(--text-muted\); font-weight: 600; text-transform: uppercase; letter-spacing: 0\.05em;">Coordinator<\/p>\s*<p style="font-size: 0\.85rem; color: var\(--text-navy\); font-weight: 600; margin-top: 0\.5rem;">WhatsApp : 9<\/p>\s*<\/div>/g,
    newStudentCoordinators
  );

  // Replace footer contact info
  content = content.replace(
    /<div class="footer-contact-info">[\s\S]*?<\/div>/g,
    `<div class="footer-contact-info">
            <p class="footer-contact-name">Dr. G. R. Jothilakshmi</p>
            <p class="footer-contact-name">Dr. A. R. Revathi</p>
            <a href="mailto:theoremx2026@mgr.ac.in" class="footer-contact-link">theoremx2026@mgr.ac.in</a>
            <a href="tel:+918885680432" class="footer-contact-link">+91 88856 80432</a>
          </div>`
  );

  // Replace whatsapp link
  content = content.replace(
    /<a href="https:\/\/wa\.me\/[0-9]+" class="btn-outline-navy" id="whatsappBtn" target="_blank" rel="noopener">WHATSAPP →<\/a>/g,
    `<a href="https://wa.me/918885680432" class="btn-outline-navy" id="whatsappBtn" target="_blank" rel="noopener">WHATSAPP →</a>`
  );

  fs.writeFileSync(file, content, 'utf-8');
});

console.log("Updated files!");
