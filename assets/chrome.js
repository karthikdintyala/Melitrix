// ═══════════════════════════════════════════════
// MELITRIX, Shared chrome (nav + footer + tweaks)
// Inject by ID: document.getElementById('site-nav') etc.
// ═══════════════════════════════════════════════

(function () {
  // Single source of truth for the Platform sub-navigation.
  const PLATFORM_LINKS = [
    { href: 'asset-classes.html#specialty', title: 'Specialty Pharmaceuticals', desc: 'Innovation programs and 505(b)(2) development' },
    { href: 'asset-classes.html#generics', title: 'Generics', desc: 'Sterile injectables, liquids, and oral solids' },
    { href: 'asset-classes.html#consumer-health', title: 'Consumer Health', desc: 'Color cosmetics and nutraceuticals' },
    { href: 'asset-classes.html#consulting', title: 'Development & Consulting', desc: 'Regulatory, formulation, and market access' },
    { href: 'asset-classes.html#cdmo', title: 'CDMO & Manufacturing', desc: 'European capacity and a global partner network' },
  ];

  const MAIN_LINKS = [
    { key: 'home', href: 'index.html', label: 'Home' },
    { key: 'assets', href: 'asset-classes.html', label: 'Platform', children: PLATFORM_LINKS },
    { key: 'pipeline', href: 'asset-classes.html#pipeline', label: 'Pipeline' },
    { key: 'about', href: 'about.html', label: 'About' },
    { key: 'careers', href: 'careers.html', label: 'Careers' },
    { key: 'contact', href: 'contact.html', label: 'Contact' },
  ];

  function navHTML(active) {
    const is = (k) => (active === k ? ' class="active"' : '');

    const megaCols = PLATFORM_LINKS.map(
      (l) => `<a href="${l.href}">${l.title}<span class="mega-desc">${l.desc}</span></a>`
    );

    const desktopItems = MAIN_LINKS.map((l) => {
      if (l.children) {
        return `
        <li>
          <a href="${l.href}"${is(l.key)}>${l.label} <span class="chev"></span></a>
          <div class="mega">
            <div>
              <div class="mega-col-title">Products</div>
              ${megaCols.slice(0, 3).join('\n              ')}
            </div>
            <div>
              <div class="mega-col-title">Services</div>
              ${megaCols.slice(3).join('\n              ')}
            </div>
            <div class="mega-feature">
              <div class="mega-feature-text">
                <strong>MT-01</strong> is in stability studies, with first data expected in 2027.
              </div>
              <a href="asset-classes.html#pipeline" class="mega-feature-link">View pipeline</a>
            </div>
          </div>
        </li>`;
      }
      return `<li><a href="${l.href}"${is(l.key)}>${l.label}</a></li>`;
    }).join('\n        ');

    // Flat mobile list: top-level links, with Platform children indented beneath.
    const mobileItems = MAIN_LINKS.map((l) => {
      const top = `<a href="${l.href}" class="mobile-link${active === l.key ? ' active' : ''}">${l.label}</a>`;
      if (!l.children) return top;
      const subs = l.children
        .map((c) => `<a href="${c.href}" class="mobile-sublink">${c.title}</a>`)
        .join('\n          ');
      return `${top}\n          ${subs}`;
    }).join('\n          ');

    return `
    <div class="top-utility">
      <a href="careers.html">Careers</a>
      <span class="utility-divider">|</span>
      <a href="contact.html">Contact</a>
    </div>
    <nav class="main-nav">
      <a href="index.html" class="nav-logo" aria-label="Melitrix, home">
        <img src="assets/melitrix-wordmark.png" alt="Melitrix" class="nav-logo-img">
      </a>
      <ul class="nav-menu">
        ${desktopItems}
        <li>
          <a href="contact.html" class="nav-cta">Get in Touch</a>
        </li>
      </ul>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <div class="mobile-menu-inner">
        ${mobileItems}
        <a href="contact.html" class="btn btn-primary mobile-cta">Get in Touch</a>
      </div>
    </div>`;
  }

  function footerHTML() {
    const footerPlatform = PLATFORM_LINKS.map(
      (l) => `<li><a href="${l.href}">${l.title}</a></li>`
    ).join('\n          ');

    return `
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo" aria-label="Melitrix, home">
          <img src="assets/melitrix-wordmark.png" alt="Melitrix" class="footer-logo-img">
        </a>
        <p>A specialty pharmaceutical company and development partner, building its own innovation and generic portfolio and helping others develop, manufacture, and launch across new markets.</p>
        <div class="footer-badge">
          <div class="dot-live"></div>
          Open to development and distribution partnerships
        </div>
      </div>
      <div>
        <div class="footer-col-title">Platform</div>
        <ul class="footer-links">
          ${footerPlatform}
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <ul class="footer-links">
          <li><a href="about.html">About Melitrix</a></li>
          <li><a href="about.html#values">Our Values</a></li>
          <li><a href="about.html#partners">Partner Network</a></li>
          <li><a href="asset-classes.html#pipeline">Pipeline</a></li>
          <li><a href="careers.html">Careers</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Get in Touch</div>
        <ul class="footer-links">
          <li><a href="mailto:info@melitrix.net">info@melitrix.net</a></li>
          <li class="footer-addr">361 Newbury Street, 5th Floor<br>Boston, MA 02115</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Melitrix. All rights reserved.</span>
      <span>Information on this site is provided for general purposes and does not constitute an offer of any product or security.</span>
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
    </div>`;
  }

  function wireMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      toggle.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    };

    toggle.addEventListener('click', () => setOpen(menu.hidden));
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) setOpen(false);
    });
    // Reset if the viewport grows back to desktop width.
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && !menu.hidden) setOpen(false);
    });
  }

  window.MelitrixChrome = {
    mount(activeKey) {
      const nav = document.getElementById('site-nav');
      const footer = document.getElementById('site-footer');
      const tweaks = document.getElementById('site-tweaks');
      if (nav) nav.innerHTML = navHTML(activeKey);
      if (footer) footer.innerHTML = footerHTML();
      if (tweaks) tweaks.innerHTML = tweaksHTML();
      wireMobileMenu();
    },
  };
})();
