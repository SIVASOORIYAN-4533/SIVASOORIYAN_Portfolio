const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

// ─── 1. CSS to inject ────────────────────────────────────────────────────────
const contactCSS = `
    /* ─── Contact Section ───────────────────────────────────────────── */
    .contact-section {
      position: relative;
      z-index: 10;
      padding: 120px 60px 80px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .contact-header {
      text-align: center;
      margin-bottom: 72px;
    }
    .contact-subtitle {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ff5e36;
      margin-bottom: 18px;
    }
    .contact-title {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 700;
      color: #fff;
      line-height: 1.15;
      margin: 0 0 20px;
      text-shadow: 0 2px 24px rgba(0,0,0,0.35);
    }
    .contact-desc {
      font-size: 1rem;
      color: rgba(255,255,255,0.65);
      max-width: 520px;
      margin: 0 auto;
      line-height: 1.7;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 40px;
    }
    .contact-card {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 28px 26px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px;
      background: rgba(255,255,255,0.04);
      text-decoration: none;
      color: #fff;
      transition: background 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
    }
    .contact-card:hover {
      background: rgba(255, 94, 54, 0.1);
      border-color: rgba(255, 94, 54, 0.45);
      transform: translateY(-4px);
    }
    .contact-card-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 94, 54, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #ff5e36;
    }
    .contact-card-body { display: flex; flex-direction: column; gap: 4px; }
    .contact-card-label {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.45);
    }
    .contact-card-value {
      font-size: 0.95rem;
      font-weight: 500;
      color: #fff;
      word-break: break-word;
    }
    /* Resume Banner */
    .resume-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      padding: 36px 44px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      margin-top: 16px;
    }
    .resume-info h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
      margin: 0 0 6px;
    }
    .resume-info p {
      font-size: 0.9rem;
      color: rgba(255,255,255,0.55);
      margin: 0;
    }
    .resume-actions { display: flex; gap: 14px; flex-wrap: wrap; }
    @media (max-width: 1024px) {
      .contact-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .contact-section { padding: 80px 24px 60px; }
      .contact-grid { grid-template-columns: 1fr; }
      .resume-banner { flex-direction: column; align-items: flex-start; padding: 28px 24px; }
    }
`;

// ─── 2. HTML to inject ───────────────────────────────────────────────────────
const contactHTML = `
    <!-- ─── Contact Section ──────────────────────────────────────────── -->
    <section class="contact-section" id="contact">
      <div class="contact-header">
        <div class="contact-subtitle">Get In Touch</div>
        <h2 class="contact-title">Let's Connect &amp;<br>Build Impactful Solutions</h2>
        <p class="contact-desc">Open to discussing software development opportunities, ServiceNow projects, and technical collaborations.</p>
      </div>

      <div class="contact-grid">

        <!-- Email -->
        <a href="mailto:sivasooriyanveerappan@gmail.com" class="contact-card">
          <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">Email</span>
            <span class="contact-card-value">sivasooriyanveerappan@gmail.com</span>
          </div>
        </a>

        <!-- Phone -->
        <a href="tel:9025265091" class="contact-card">
          <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.43h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z"></path>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">Phone</span>
            <span class="contact-card-value">+91 9025265091</span>
          </div>
        </a>

        <!-- Location -->
        <div class="contact-card">
          <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">Location</span>
            <span class="contact-card-value">Tamil Nadu, India</span>
          </div>
        </div>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/sivasooriyan-v-216181293/" target="_blank" rel="noopener" class="contact-card">
          <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">LinkedIn</span>
            <span class="contact-card-value">sivasooriyan-v-216181293</span>
          </div>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/SIVASOORIYAN-4533" target="_blank" rel="noopener" class="contact-card">
          <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">GitHub</span>
            <span class="contact-card-value">SIVASOORIYAN-4533</span>
          </div>
        </a>

        <!-- Education -->
        <div class="contact-card">
          <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div class="contact-card-body">
            <span class="contact-card-label">Education</span>
            <span class="contact-card-value">Bannari Amman Institute of Technology</span>
          </div>
        </div>

      </div><!-- /.contact-grid -->

      <!-- Resume Banner -->
      <div class="resume-banner">
        <div class="resume-info">
          <h3>Curriculum Vitae / Resume</h3>
          <p>ServiceNow certifications, technical skills, academic projects &amp; more.</p>
        </div>
        <div class="resume-actions">
          <a href="assets/Sivasooriyan_V_Resume.pdf" download="Sivasooriyan_V_Resume.pdf" class="btn-pill btn-orange">
            <span>Download Resume</span>
            <span class="btn-arrow-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </span>
          </a>
          <a href="assets/Sivasooriyan_V_Resume.pdf" target="_blank" class="btn-pill btn-white">
            <span>View Online</span>
            <span class="btn-arrow-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

`;

// ─── 3. Inject CSS before the .scroll-spacer rule ────────────────────────────
const cssAnchor = '    .scroll-spacer {';
if (!html.includes(cssAnchor)) {
  console.error('CSS anchor not found!');
  process.exit(1);
}
html = html.replace(cssAnchor, contactCSS + '\n' + cssAnchor);

// ─── 4. Inject HTML before the Bottom Spacing comment ────────────────────────
const htmlAnchor = '    <!-- Bottom Spacing for smooth end scrubbing -->';
if (!html.includes(htmlAnchor)) {
  console.error('HTML anchor not found!');
  process.exit(1);
}
html = html.replace(htmlAnchor, contactHTML + '\n' + htmlAnchor);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Contact section successfully injected into index.html');

