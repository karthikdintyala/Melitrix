// ═══════════════════════════════════════════════
// MELITRIX, Shared chrome (nav + footer + tweaks)
// Inject by ID: document.getElementById('site-nav') etc.
// ═══════════════════════════════════════════════

(function () {
  // Canonical Melitrix mark, inlined so every page carries the same art.
  // Wing lobes (#1E3A5F) + core M (#0A2540) + spine + antenna.
  const MARK_SVG = `<svg viewBox="0 0 200 200" aria-label="Melitrix" role="img">
    <path d="M 25 40 L 25 168 L 50 168 L 50 108 L 95 150 L 100 105 Z" fill="#1e3a5f"/>
    <path d="M 175 40 L 175 168 L 150 168 L 150 108 L 105 150 L 100 105 Z" fill="#1e3a5f"/>
    <path d="M 35 168 L 35 32 L 100 105 L 165 32 L 165 168 L 140 168 L 140 88 L 100 134 L 60 88 L 60 168 Z" fill="#0a2540"/>
    <rect x="98" y="30" width="4" height="140" rx="2" fill="#0a2540"/>
    <circle cx="100" cy="22" r="4" fill="#0a2540"/>
  </svg>`;

  // Inverse variant for dark surfaces (footer, hero inverse).
  const MARK_SVG_INVERSE = `<svg viewBox="0 0 200 200" aria-label="Melitrix" role="img">
    <path d="M 25 40 L 25 168 L 50 168 L 50 108 L 95 150 L 100 105 Z" fill="rgba(255,255,255,0.55)"/>
    <path d="M 175 40 L 175 168 L 150 168 L 150 108 L 105 150 L 100 105 Z" fill="rgba(255,255,255,0.55)"/>
    <path d="M 35 168 L 35 32 L 100 105 L 165 32 L 165 168 L 140 168 L 140 88 L 100 134 L 60 88 L 60 168 Z" fill="white"/>
    <rect x="98" y="30" width="4" height="140" rx="2" fill="white"/>
    <circle cx="100" cy="22" r="4" fill="white"/>
  </svg>`;

  function navHTML(active) {
    const is = (k) => (active === k ? ' class="active"' : '');
    return `
    <div class="top-utility">
      <a href="careers.html">Careers</a>
      <span class="utility-divider">|</span>
      <a href="contact.html">Contact</a>
    </div>
    <nav class="main-nav">
      <a href="index.html" class="nav-logo">
        <div class="logo-mark">${MARK_SVG}</div>
        <span class="logo-wordmark">Melitrix</span>
      </a>
      <ul class="nav-menu">
        <li>
          <a href="index.html"${is('home')}>Home</a>
        </li>
        <li>
          <a href="asset-classes.html"${is('assets')}>Asset Classes <span class="chev"></span></a>
          <div class="mega">
            <div>
              <div class="mega-col-title">Platform</div>
              <a href="asset-classes.html#pharmaceuticals">
                Pharmaceutical Products
                <span class="mega-desc">Generics and 505(b)(2) pathways</span>
              </a>
              <a href="asset-classes.html#cdmo">
                Investments & CDMO
                <span class="mega-desc">Capital deployment + manufacturing</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Services</div>
              <a href="asset-classes.html#consulting">
                Consulting Services
                <span class="mega-desc">Regulatory, market access, due diligence</span>
              </a>
            </div>
            <div class="mega-feature">
              <div class="mega-feature-text">
                <strong>MT-01</strong>, 505(b)(2) reformulation program now in development.
              </div>
              <a href="asset-classes.html#pipeline" class="mega-feature-link">View pipeline</a>
            </div>
          </div>
        </li>
        <li>
          <a href="about.html"${is('about')}>About <span class="chev"></span></a>
          <div class="mega" style="min-width: 520px;">
            <div>
              <div class="mega-col-title">Company</div>
              <a href="about.html#story">
                Our Story
                <span class="mega-desc">Founding premise and thesis</span>
              </a>
              <a href="about.html#values">
                Values
                <span class="mega-desc">Operating principles</span>
              </a>
            </div>
            <div>
              <div class="mega-col-title">Ecosystem</div>
              <a href="about.html#partners">
                Strategic Partners
                <span class="mega-desc">CDMO, Marketing, R&D network</span>
              </a>
              <a href="about.html#values">
                Values & Culture
                <span class="mega-desc">Science-forward principles</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <a href="careers.html"${is('careers')}>Careers</a>
        </li>
        <li>
          <a href="contact.html"${is('contact')}>Contact</a>
        </li>
        <li>
          <a href="contact.html" class="nav-cta">Get in Touch</a>
        </li>
      </ul>
    </nav>`;
  }

  function footerHTML() {
    return `
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" style="text-decoration:none; display:inline-flex; align-items:center; gap:12px; margin-bottom:18px;">
          <span style="width:44px; height:44px; display:inline-flex;">${MARK_SVG_INVERSE}</span>
          <span class="logo-wordmark" style="margin-bottom:0;">Melitrix</span>
        </a>
        <p>An integrated life science platform spanning pharmaceutical products, consulting services, and CDMO investments, advancing science to deliver meaningful value.</p>
        <div class="footer-badge">
          <div class="dot-live"></div>
          Actively Accepting Partners
        </div>
      </div>
      <div>
        <div class="footer-col-title">Asset Classes</div>
        <ul class="footer-links">
          <li><a href="asset-classes.html#pharmaceuticals">Generics</a></li>
          <li><a href="asset-classes.html#pharmaceuticals">505(b)(2)</a></li>
          <li><a href="asset-classes.html#consulting">Consulting</a></li>
          <li><a href="asset-classes.html#cdmo">CDMO & Investments</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="about.html">About Melitrix</a></li>
          <li><a href="about.html#values">Our Values</a></li>
          <li><a href="about.html#partners">Ecosystem</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Get in Touch</div>
        <ul class="footer-links">
          <li><a href="mailto:info@melitrix.net">info@melitrix.net</a></li>
          <li class="footer-addr">361 Newbury St, 5th Floor<br>Boston, MA 02115</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Melitrix. All rights reserved.</span>
      <span>Privacy Policy · Terms of Use · Regulatory Disclaimer</span>
    </div>`;
  }

  function tweaksHTML() {
    return `
    <div id="tweaks-panel">
      <h4>Tweaks</h4>
      <div class="tweak-group">
        <div class="tweak-label">Color treatment</div>
        <div class="tweak-options">
          <button class="tweak-btn" data-tweak-key="theme" data-tweak-value="default">Default</button>
          <button class="tweak-btn" data-tweak-key="theme" data-tweak-value="light-blue">Lighter</button>
          <button class="tweak-btn" data-tweak-key="theme" data-tweak-value="deep-navy">Deeper</button>
        </div>
      </div>
      <div class="tweak-group" data-hero-only>
        <div class="tweak-label">Hero layout (home)</div>
        <div class="tweak-options">
          <button class="tweak-btn" data-tweak-key="heroLayout" data-tweak-value="split">Split + stats</button>
          <button class="tweak-btn" data-tweak-key="heroLayout" data-tweak-value="fullbleed">Full-bleed image</button>
        </div>
      </div>
    </div>`;
  }

  window.MelitrixChrome = {
    mount(activeKey) {
      const nav = document.getElementById('site-nav');
      const footer = document.getElementById('site-footer');
      const tweaks = document.getElementById('site-tweaks');
      if (nav) nav.innerHTML = navHTML(activeKey);
      if (footer) footer.innerHTML = footerHTML();
      if (tweaks) tweaks.innerHTML = tweaksHTML();
    },
  };
})();
