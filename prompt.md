# THEOREMX 2026 — Complete Website Analysis & Master Prompt

---

## 📋 PART 1: COMPLETE WEBSITE DETAILS

---

### 🏛️ What is the Website?

**THEOREMX 2026** is a one-page static website for a **National Research Expo** organized by the **Department of Data Science** at **Dr. M.G.R. Educational and Research Institute**, Chennai. The tagline is *"Where Research Meets Intelligence"*.

---

### 📐 Current Tech Stack

| Component       | Technology                                      |
|-----------------|------------------------------------------------|
| **Type**        | Static single-page site (no framework)          |
| **HTML**        | Single `index.html` (~13.5 MB, includes inline CSS) |
| **CSS**         | External `style.css` (46 KB) + inline `<style>` in HTML |
| **JavaScript**  | External `script.js` (8.7 KB) — vanilla JS     |
| **Fonts**       | Google Fonts — Sora, Inter, JetBrains Mono      |
| **Hosting**     | Vercel (static deployment via `vercel.json`)    |
| **Mobile**      | Separate `theoremx_mobile.html` (~13.8 MB)      |
| **Build**       | No build step — served as static assets         |

---

### 🎨 Current Design System

| Token             | Value                                             |
|--------------------|--------------------------------------------------|
| **Primary BG**     | `#F8FAFC` (Light grayish blue)                   |
| **Dark BG**        | `#1E1B4B` (Deep indigo — used for Register & Footer) |
| **Accent (Indigo)**| `#4F46E5`                                        |
| **Accent (Purple)**| `#7C3AED`                                        |
| **Accent (Cyan)**  | `#06B6D4`                                        |
| **Accent Gradient**| `linear-gradient(135deg, #4F46E5, #7C3AED)`     |
| **Display Font**   | Sora (300–800)                                   |
| **Body Font**      | Inter (300–600)                                  |
| **Monospace Font** | JetBrains Mono (400–500)                         |
| **Max Width**      | 1200px                                           |
| **Nav Height**     | 68px                                             |
| **Border Radius**  | 10px / 16px / 24px / 32px / 9999px               |

---

### 🗂️ Website Sections (in order)

#### 1. **Navbar** (`#navbar`)
- Sticky top navigation with glassmorphism (backdrop blur + semi-transparent bg)
- College logo + brand name "THEOREM**X**" + subtitle "National Research Expo"
- Nav links: About, Themes, Schedule, Register, Contact
- CTA button: "Register Free →" linking to Google Form
- Hamburger menu for mobile
- Full-screen mobile navigation overlay
- Department logo (AUDI) on the right side

#### 2. **Hero Section** (`#home`)
- Large animated floating gradient orbs (3 orbs with CSS `@keyframes` animations)
- Status badge with pulsing dot: "📍 Dr. M.G.R. ERI · June 24, 2026"
- Giant typography: "THEOREM**X**" (gradient text, clamp 4rem–10rem) + "2026"
- Subtitle: "National Research Expo"
- Meta text: venue details and department info
- CTA buttons: "Register Free →" + "Explore Event"
- Countdown timer: Days / Hours / Minutes / Seconds (counting down to June 24, 2026, 09:00 IST)
- Scroll hint with animated line at bottom

#### 3. **Poster Section** (`#poster`)
- Centered header with eyebrow "Event Poster"
- Heading "Official Poster" with "THEOREM**X** 2026"
- Glassmorphism card wrapping the event poster image
- Image: `poster.png`

#### 4. **Launch Event Gallery** (`#gallery`)
- Image carousel with 4 launch event photos (`image-1.png` through `image-4.JPG`)
- Fade transition between slides
- Dot navigation (4 dots)
- Auto-play carousel

#### 5. **About Section** (`#about`)
- Two-column grid layout
- **Left Column:**
  - Eyebrow: "About THEOREMX"
  - Heading: "Where Research / Meets *Intelligence*" (gradient italic text)
  - Description paragraph about the expo
  - Stat chips: "23 June 2026" | "Offline Mode" | "FREE Registration"
- **Right Column:**
  - Three info blocks with hover lift animation:
    1. **About the Department** — Department of Data Science at Dr. M.G.R. ERI (with AUDI logo image)
    2. **About the College** — Dr. M.G.R. ERI description (with college image)
    3. **About the Event** — THEOREMX 2026 description

#### 6. **Track Submission Search** (`#search`)
- Search card with input field for tracking submission IDs (e.g., "THX-006")
- Search button
- Results table with columns: SNo, Title, Members, College, Domain
- Fetches data from Google Sheets API

#### 7. **Research Themes** (`#themes`)
- Centered header: "Research Themes" / "Domains of Innovation"
- Grid of 18 theme cards, each with:
  - Colored icon background (unique color per theme via `--ti-clr` CSS variable)
  - SVG icon
  - Theme name + short description
- Themes include: Applied AI/ML, Computer Vision, Deep Learning, Generative AI & LLMs, IoT, Reinforcement Learning, Computational Biology, Federated Learning, Scientific ML, Ethics of AI Governance, Autonomous Simulation, Computational Chemistry, Differential Privacy, Linguistic Data Curation, Explainable AI, Automated Scheduler, Systems for AI, Science & Engineering

#### 8. **Event Schedule** (`#schedule`)
- Centered header: "Event Flow" / "Your Day at THEOREM**X**"
- Filter pills: All | Morning | Afternoon | Evening
- Timeline organized by sessions:
  - **Morning Session** (09:00–12:30): Registration, Opening Ceremony, Research Showcase
  - **Afternoon Session** (12:30–02:30): AI Game Stalls, Networking Lunch
  - **Evening Session** (02:30–05:30): Final Presentations, Prize Distribution, Closing Ceremony
- Each event row shows: Time badge | Event title + description | Category tag
- Tag categories: Registration, Inaugural, Research, Interactive, Break, Awards, Closing

#### 9. **Important Dates** (`#dates`)
- Timeline of key dates:
  - Abstract submission deadline
  - Registration deadline
  - Acceptance notification
  - Event day

#### 10. **AI Game Stalls** (`#stalls`)
- 3-column grid of interactive stall cards
- Each card has:
  - Colored top border accent line (via `--sc` CSS variable)
  - Emoji icon in colored background
  - Category badge
  - Stall name + description
- 6 stalls: AI Quiz Arena, Face Recognition Demo, Prompt Battle, AI Art Generator, Reaction Time Game, ML Prediction Game

#### 11. **Awards & Prizes** (`#prizes`)
- White background section with golden-gradient award cards
- Grid layout with 6 award categories:
  1. Best Research Paper
  2. Innovative Idea
  3. Best Prototype
  4. Best Sustainable Development Project
  5. Social Impact
  6. Audience's Choice Award
- Bottom note: All registered participants receive certificates

#### 12. **Faculty Coordinators** (`#coordinators`)
- Flex layout, center-aligned
- Coordinator cards with:
  - Circular photo with accent border + glow ring
  - Name
  - Role (Convenor / Expo Coordinator)
- Faculty: Dr. T. Kirubadevi (Convenor), Dr. D. Usha (Expo Coordinator)

#### 13. **Student Coordinators** (`#student-coordinators`)
- Infinite horizontal marquee/slider
- Chip-styled names scrolling horizontally
- Names duplicated for seamless loop
- 7 student coordinators: K. Sivaram Varaputhra, K. Bala Bhaskar, Arrhat Nag, Subashini, K. Sai Teja, S K Rahul Ganesh, V Vinitha

#### 14. **Registration CTA** (`#register`)
- Dark background (`#1E1B4B`) with floating gradient orbs
- Two-column layout:
  - **Left:** Heading "Join THEOREMX 2026" + eligibility list (UG/PG students, School students, Teams of up to 3)
  - **Right:** Glassmorphism card with:
    - "✨ FREE Registration" label
    - Date reminder
    - Large "Register Now →" button (links to Google Form)
    - Note about abstract submission format

#### 15. **Contact & FAQ** (`#contact`)
- Two-column grid:
  - **Left:**
    - Heading "Get in Touch"
    - Description text
    - WhatsApp button (links to `wa.me/918885680432`)
    - Email button (links to `mailto:ncyukti@drmgrdu.ac.in`)
  - **Right:**
    - FAQ accordion with questions like:
      - Who can participate?
      - Is there a registration fee?
      - How do I submit my abstract?
      - Will I receive a certificate?

#### 16. **Venue/Location** (`#location`)
- Venue card with:
  - Location pin icon
  - Venue name: "Dr. M.G.R. Educational and Research Institute"
  - Full address
  - "Hybrid Event" mode tag
  - Campus image (from SDG image)
  - "Open in Maps →" button (Google Maps link)

#### 17. **Footer** (`#footer`)
- Dark background matching register section
- Background glow effects
- Three-column layout:
  - **Column 1:** College logo (inverted white), Brand name "THEOREMX 2026", tagline, social links (IG, LI, EM)
  - **Column 2:** Quick Links — About, Themes, Schedule, Stalls, Awards
  - **Column 3:** Contact info — Coordinator names, WhatsApp, Email, Register link
- Bottom bar: Copyright text + "Made with ❤ by Dept. of Data Science"

---

### ⚡ Current Animations & Interactions

| Animation                   | Description                                              |
|-----------------------------|----------------------------------------------------------|
| `fadeSlideUp`               | Elements fade in + slide up from 30px                    |
| `orb-float-1/2/3`          | Hero gradient orbs floating with translate + scale       |
| `scroll-line`              | Scroll hint line grows then fades                        |
| `scroll-coordinators`      | Infinite horizontal scroll for student coordinator chips |
| `pulse-dot`                | Status badge dot pulses with box-shadow                  |
| `scroll-reveal`            | IntersectionObserver-based reveal on scroll              |
| Navbar glassmorphism       | Blur increases on scroll, shadow appears                 |
| Card hover lift            | Cards lift with `translateY(-3px to -6px)` on hover      |
| Card mouse glow            | Mouse-following glow on stall/award/theme cards          |
| FAQ accordion              | Expand/collapse with `maxHeight` transition              |
| Stagger reveal             | Theme/stall/award/timeline cards reveal with incremental delays |
| Countdown timer            | Real-time countdown updating every second                |
| Carousel                   | Image gallery with fade transitions + dot navigation     |

---

### 📱 Responsive Breakpoints

| Breakpoint  | Changes                                                        |
|-------------|----------------------------------------------------------------|
| **≤ 900px** | Timeline card columns shrink                                   |
| **≤ 768px** | Nav collapses to hamburger, grids go single-column, font sizes reduce |
| **≤ 560px** | Stalls/themes/awards go 1-2 columns, hero actions stack        |
| **≤ 420px** | Hero typography further shrinks                                |

---

### 📂 Image Assets

| File                              | Purpose                         |
|-----------------------------------|---------------------------------|
| `poster.png`                      | Official event poster           |
| `image-1.png` to `image-4.JPG`   | Launch event gallery photos     |
| `clg-logo-BcHbAi1G.png`          | College logo                    |
| `audi logo-VGoDBqTU.png`         | Department (AUDI) logo          |
| `audi white down.png`            | White variant of AUDI logo      |
| `abt clg.png`                    | College campus image            |
| `hod.png`                        | Faculty photo                   |
| `usha.jpeg`                      | Dr. D. Usha's photo            |
| `sdg.jpeg`                       | SDG/Campus image (venue)        |
| `WhatsApp Image...`              | WhatsApp shared image           |

---

### 🔗 External Links

| Link                                          | Purpose                |
|-----------------------------------------------|------------------------|
| `https://forms.gle/HN2yXXsQz3uoho1w5`       | Google Form registration |
| `wa.me/918885680432`                          | WhatsApp contact        |
| `mailto:ncyukti@drmgrdu.ac.in`               | Email contact           |
| Google Maps link                              | Venue directions        |
| Google Sheets API                             | Submission tracking     |

---

---

## 🚀 PART 2: MASTER PROMPT TO REGENERATE WITH STUNNING 3D ANIMATIONS

---

Use the following prompt in any AI coding assistant (Claude, ChatGPT, Cursor, Antigravity, etc.) to generate the website from scratch with jaw-dropping 3D animations:

---

### 🎯 THE PROMPT

```
Build a stunning, award-winning single-page website for "THEOREMX 2026" — a National Research Expo organized by the Department of Data Science at Dr. M.G.R. Educational and Research Institute, Chennai. The website must feel like a premium Apple/Google product launch page with cinematic 3D animations and mind-blowing transitions.

═══════════════════════════════════════════
🎬 3D INTRO / LANDING EXPERIENCE
═══════════════════════════════════════════

Create a full-screen cinematic 3D intro sequence that plays when the page first loads:

1. **Particle Universe Intro**: Start with a dark void. Thousands of glowing particles (like stars) rush toward the camera using Three.js/WebGL. They converge and form the text "THEOREMX" in 3D metallic letters.

2. **3D Text Reveal**: The "THEOREMX" text should be rendered as a 3D extruded mesh with:
   - Metallic/chrome material with environment map reflections
   - Dramatic lighting (3-point setup: key, fill, rim)
   - The "X" should glow with an indigo-to-purple gradient energy pulse
   - Camera orbits around the text, then zooms through the "X"

3. **Transition to Hero**: After the 3D intro (3-4 seconds), the scene smoothly morphs into the hero section. The 3D particles dissolve into the floating gradient orbs of the hero background. Add a "Skip Intro" button.

4. **Use Three.js** (via CDN) for the 3D intro. Use GSAP for all timeline animations.

═══════════════════════════════════════════
🎨 DESIGN SYSTEM & THEME
═══════════════════════════════════════════

Color Palette:
- Background: #0A0A0F (deep space black) with subtle radial gradients
- Primary Accent: Indigo #4F46E5 → Purple #7C3AED gradient
- Secondary: Cyan #06B6D4
- Text: #F8FAFC (light) on dark, #1E1B4B (dark) on light sections
- Glass: rgba(255,255,255,0.05) with backdrop-filter blur(20px)
- Glow effects: box-shadow with accent colors at 20-40% opacity

Typography:
- Display: "Sora" (Google Fonts) — weights 300-800
- Body: "Inter" (Google Fonts) — weights 300-600
- Mono: "JetBrains Mono" — for labels, badges, countdown

Design Style:
- Dark mode first (space/tech theme) with glassmorphism cards
- Floating gradient orbs as ambient background elements
- Noise texture overlay for depth
- Micro-interactions on every interactive element
- Smooth scroll with GSAP ScrollTrigger parallax

═══════════════════════════════════════════
📐 SECTIONS & CONTENT
═══════════════════════════════════════════

Build these sections in order:

### 1. NAVBAR
- Sticky, glassmorphism nav (dark glass)
- Left: College logo + "THEOREMX" brand text + "National Research Expo" subtitle
- Center: Nav links — About, Themes, Schedule, Register, Contact
- Right: Department logo + "Register Free →" CTA button (link: https://forms.gle/HN2yXXsQz3uoho1w5)
- Mobile: Hamburger → full-screen overlay nav with staggered link animations
- On scroll: nav gets more opaque glass + subtle shadow
- ANIMATION: Nav links have magnetic hover effect (text follows cursor slightly)

### 2. HERO SECTION
- Full viewport height
- Animated 3D particle background (continuation from intro) — particles slowly drift
- Status badge: "📍 Dr. M.G.R. ERI · June 24, 2026" with pulsing dot
- Main title: "THEOREMX" in massive gradient text (clamp 4rem-10rem), "2026" below
- Subtitle: "National Research Expo"
- Meta: "Dept. of Data Science · Dr. M.G.R. Educational and Research Institute"
- Two CTA buttons: "Register Free →" (solid gradient) + "Explore Event" (glass outline)
- Live Countdown Timer to June 24, 2026, 09:00 IST — glass card with gradient numbers
- Scroll hint at bottom
- ANIMATION: Title text reveals letter-by-letter with GSAP SplitText. Countdown numbers flip with 3D card-flip animation every second. Hero elements have staggered parallax on scroll.

### 3. POSTER SECTION
- Centered event poster image (poster.png)
- Glassmorphism frame with glow border
- ANIMATION: Poster floats in 3D space with subtle tilt on mouse move (vanilla-tilt effect). On scroll-in, poster flies in from below with rotation.

### 4. LAUNCH EVENT GALLERY
- Image carousel with 4 photos (image-1.png through image-4.JPG)
- 3D carousel: images arranged in a circular 3D ring, rotating
- Dot navigation + auto-play
- ANIMATION: 3D perspective carousel with CSS transforms. Images have parallax depth on hover.

### 5. ABOUT SECTION
- Two-column layout
- Left: Eyebrow "About THEOREMX" → Heading "Where Research / Meets Intelligence" → Description → Stat chips (23 June 2026 | Offline Mode | FREE Registration)
- Right: Three info cards (About Department with logo, About College with logo, About Event)
- ANIMATION: Text lines slide in from left with stagger. Info cards flip in from right with 3D rotation. Stat chip numbers count up from 0.

### 6. SUBMISSION TRACKER
- Search card with input + button
- Results table
- Fetches from Google Sheets API
- ANIMATION: Search card has breathing glow border. Results rows slide in with stagger.

### 7. RESEARCH THEMES (18 themes)
- Grid of glassmorphism cards with colored icons
- Themes: Applied AI/ML, Computer Vision, Deep Learning, Generative AI & LLMs, IoT, Reinforcement Learning, Computational Biology, Federated Learning, Scientific ML, Ethics of AI Governance, Autonomous Simulation, Computational Chemistry, Differential Privacy, Linguistic Data Curation, Explainable AI, Automated Scheduler, Systems for AI, Science & Engineering
- ANIMATION: Cards reveal in a wave pattern on scroll. Each card has a 3D tilt on hover with glowing border. Icons rotate/pulse on hover.

### 8. EVENT SCHEDULE
- Filter pills: All | Morning | Afternoon | Evening
- Three session blocks with colored headers:
  - Morning (09:00-12:30): Registration, Opening Ceremony, Research Showcase
  - Afternoon (12:30-02:30): AI Game Stalls, Networking Lunch
  - Evening (02:30-05:30): Final Presentations, Prize Distribution, Closing Ceremony
- ANIMATION: Timeline appears with a drawing line animation. Each event card slides in from the side with stagger delay. Filter transitions use FLIP animation (smooth layout changes).

### 9. IMPORTANT DATES
- Vertical timeline with key dates
- ANIMATION: Timeline line draws itself as you scroll. Date nodes pop in with spring physics.

### 10. AI GAME STALLS (6 stalls)
- Cards with emoji icons, colored accents, descriptions
- Stalls: AI Quiz Arena, Face Recognition Demo, Prompt Battle, AI Art Generator, Reaction Time Game, ML Prediction Game
- ANIMATION: Cards float up from below with 3D rotation. On hover, card lifts with shadow expansion and inner glow pulse. Emoji icons have bounce animation.

### 11. AWARDS & PRIZES (6 categories)
- Golden gradient cards
- Awards: Best Research Paper, Innovative Idea, Best Prototype, Best Sustainable Development Project, Social Impact, Audience's Choice Award
- Note: All participants get certificates
- ANIMATION: Trophy/medal 3D model rotates at section start. Award cards have golden shimmer sweep animation on hover. Cards fan out like playing cards on scroll reveal.

### 12. FACULTY COORDINATORS
- Circular photo cards with glow rings
- Dr. T. Kirubadevi (Convenor), Dr. D. Usha (Expo Coordinator & Professor)
- ANIMATION: Photos zoom in from blurred to sharp with a ripple effect. Glow ring pulses on hover.

### 13. STUDENT COORDINATORS
- Infinite horizontal marquee of name chips
- Names: K. Sivaram Varaputhra, K. Bala Bhaskar, Arrhat Nag, Subashini, K. Sai Teja, S K Rahul Ganesh, V Vinitha
- ANIMATION: Smooth infinite scroll, pauses on hover with spring effect.

### 14. REGISTRATION CTA
- Dark section with floating orbs
- Left: "Join THEOREMX 2026" + eligibility bullets (UG/PG, School X-XII, Teams up to 3)
- Right: Glass card with "FREE Registration" + date + "Register Now →" button (link: https://forms.gle/HN2yXXsQz3uoho1w5)
- ANIMATION: Orbs move with parallax on mouse. CTA button has magnetic attraction effect + ripple on click. Section has aurora borealis background animation.

### 15. CONTACT & FAQ
- Left: "Get in Touch" + WhatsApp button (wa.me/918885680432) + Email button (ncyukti@drmgrdu.ac.in)
- Right: FAQ accordion (Who can participate?, Is there a fee?, How to submit abstract?, Certificate details?)
- ANIMATION: Contact buttons have hover inflate + glow. FAQ items expand with spring physics.

### 16. VENUE
- Glass card with venue details
- Location: Dr. M.G.R. Educational and Research Institute, Periyar E.V.R. High Road, Maduravoyal, Chennai
- Campus image + Google Maps button
- ANIMATION: Embedded 3D map with custom styling. Card has parallax tilt.

### 17. FOOTER
- Dark background with ambient glow
- Three columns: Brand + socials | Quick Links | Contact details
- Copyright: "© 2026 THEOREMX · Dept. of Data Science, Dr. M.G.R. ERI"
- ANIMATION: Footer reveals with curtain-up effect. Links have underline-slide hover.

═══════════════════════════════════════════
🎞️ GLOBAL ANIMATIONS & TRANSITIONS
═══════════════════════════════════════════

1. **Page Load Sequence**: 3D intro → Hero reveal with staggered elements (0.1s delay each)

2. **Scroll Animations** (use GSAP ScrollTrigger):
   - Every section fades in with translateY(60px) → translateY(0)
   - Parallax: Background orbs move at 0.3x scroll speed
   - Section headings split into characters and animate in with wave effect
   - Progress indicator on scroll (thin gradient bar at top)

3. **Page Transitions**: Smooth scroll with lerp (linear interpolation) for buttery feel

4. **Cursor Effects**: Custom cursor that changes shape on hoverable elements. Magnetic effect on buttons.

5. **Loading States**: Skeleton screens with shimmer animation while images load

6. **Micro-Interactions**:
   - Button hover: scale(1.02) + glow + slight lift
   - Card hover: 3D tilt + glow border + shadow expansion
   - Link hover: gradient underline slides in
   - Input focus: border color transition + subtle glow

7. **Ambient Background**: Floating gradient orbs that move with mouse parallax throughout the page. Subtle noise texture overlay.

═══════════════════════════════════════════
🛠️ TECHNICAL REQUIREMENTS
═══════════════════════════════════════════

- Single `index.html` file with external CSS and JS
- Use Three.js (via CDN: https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js) for 3D intro
- Use GSAP + ScrollTrigger (via CDN) for all animations
- Use vanilla CSS (no Tailwind)
- Google Fonts: Sora, Inter, JetBrains Mono
- Fully responsive (mobile-first)
- Smooth 60fps animations with `will-change` and GPU acceleration
- Dark mode primary theme
- All images referenced: poster.png, image-1.png, image-2.png, image-3.png, image-4.JPG, clg-logo-BcHbAi1G.png, audi logo-VGoDBqTU.png, hod.png, usha.jpeg, sdg.jpeg, abt clg.png
- Deploy-ready for Vercel (static site)
- SEO optimized with meta tags

═══════════════════════════════════════════
📊 EVENT DATA REFERENCE
═══════════════════════════════════════════

Event: THEOREMX 2026 — National Research Expo
Date: June 24, 2026 (Tuesday)
Time: 09:00 AM - 05:30 PM IST
Venue: Dr. M.G.R. Educational and Research Institute, Periyar E.V.R. High Road, Maduravoyal, Chennai
Mode: Offline (previously described as hybrid)
Registration: FREE
Organizer: Department of Data Science
Eligibility: UG/PG students from any Indian college, School students (Class X, XI, XII)
Team Size: Individual or up to 3 members
Abstract: 250-400 words in IEEE format
Registration Link: https://forms.gle/HN2yXXsQz3uoho1w5
WhatsApp: +91 88856 80432
Email: ncyukti@drmgrdu.ac.in
Convenor: Dr. T. Kirubadevi
Coordinator: Dr. D. Usha (Professor)
Student Coordinators: K. Sivaram Varaputhra, K. Bala Bhaskar, Arrhat Nag, Subashini, K. Sai Teja, S K Rahul Ganesh, V Vinitha
```

---

## 📝 PART 3: QUICK-USE PROMPTS (VARIATIONS)

---

### 🔥 Prompt A — Three.js 3D Intro Only (Add to existing site)

```
Add a cinematic Three.js 3D intro animation to my existing THEOREMX 2026 website. 

The intro should:
1. Show a dark void with thousands of glowing particles (indigo/purple/cyan colors)
2. Particles converge to form "THEOREMX" in 3D metallic text
3. Camera orbits the text, then zooms through the glowing "X"
4. After 4 seconds, particles dissolve and transition seamlessly into the existing hero section
5. Include a "Skip Intro" button in the bottom-right corner
6. Use Three.js via CDN + GSAP for the timeline
7. The intro should only play once per session (use sessionStorage)
8. Ensure 60fps performance on mobile
```

---

### 🔥 Prompt B — GSAP Scroll Animations Only (Add to existing site)

```
Add GSAP ScrollTrigger animations to my existing THEOREMX 2026 static website.

Add these animations:
1. Hero text: Split "THEOREMX" into characters, animate each with staggered fadeIn + translateY
2. All section headings: Slide in from left with opacity 0→1
3. All cards (theme, stall, award): Reveal with translateY(60px)→0 + scale(0.9→1) with 50ms stagger
4. Countdown: 3D flip animation on number change
5. Timeline: Drawing line animation that follows scroll progress
6. Parallax: Background orbs move at 0.3x scroll speed
7. Scroll progress bar: Thin gradient line at the very top of the page
8. Navbar: Slides down with spring animation on load
9. Footer: Curtain reveal animation

Use GSAP + ScrollTrigger + SplitText via CDN.
Keep all existing functionality intact.
```

---

### 🔥 Prompt C — Full Dark Mode Redesign + 3D

```
Completely redesign my THEOREMX 2026 website with a dark space theme and 3D animations.

Theme: Deep space black (#0A0A0F) with indigo/purple/cyan accents.
Style: Premium glassmorphism, floating orbs, noise texture, aurora effects.
3D: Three.js particle intro, 3D carousel gallery, tilt effects on cards.
Animations: GSAP ScrollTrigger for all reveals, magnetic cursor, spring physics.
Keep all existing content, sections, images, and links exactly the same.
Make it look like an Apple product launch page meets a sci-fi movie.
```

---

### 🔥 Prompt D — Lightweight CSS-Only Animations (No JS libraries)

```
Add stunning CSS-only animations to my THEOREMX 2026 website without any JS libraries.

Include:
1. Keyframe intro: "THEOREMX" text glitch effect + scale-in animation on page load
2. Scroll-triggered reveals using IntersectionObserver (already exists, enhance it)
3. 3D CSS perspective tilt on card hover using transform: perspective() rotateX() rotateY()
4. Gradient border animation on glassmorphism cards (rotating conic-gradient border)
5. Shimmer/shine sweep on award cards
6. Floating animation on hero orbs with improved timing
7. Text gradient animation (colors shift slowly)
8. Button magnetic hover using CSS :hover + transform
9. Smooth page scroll with scroll-snap for sections
10. Loading screen with CSS-only morphing shapes
```

---

## 📌 IMPORTANT NOTES

1. **Image paths**: All images are in the root directory. Reference them as `./filename.ext`
2. **The site is ~13.5 MB** because CSS is inlined in the HTML. For a rebuild, keep CSS external.
3. **Google Form registration**: `https://forms.gle/HN2yXXsQz3uoho1w5`
4. **Countdown target**: June 24, 2026, 09:00 AM IST (`2026-06-24T09:00:00+05:30`)
5. **Mobile version exists separately** — a rebuild should be fully responsive instead.
6. **Submission tracker** connects to a Google Sheets API — preserve this functionality.
7. **Vercel deployment** — keep `vercel.json` for static hosting.

---

*Generated on: June 13, 2026*
*For: THEOREMX 2026 — Department of Data Science, Dr. M.G.R. Educational and Research Institute*
