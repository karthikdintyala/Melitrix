// ═══════════════════════════════════════════════
// MELITRIX, Shared JS
// ═══════════════════════════════════════════════

// Scroll reveal
(function () {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
})();

// ── Tweaks (Edit Mode) ──
(function () {
  const TWEAKS = /*EDITMODE-BEGIN*/ {
    "theme": "default",
    "heroLayout": "split"
  } /*EDITMODE-END*/;

  // Apply on load
  function apply(state) {
    document.body.setAttribute('data-theme', state.theme || 'default');
    document.body.setAttribute('data-hero', state.heroLayout || 'split');
    // Sync buttons in panel if present
    document.querySelectorAll('[data-tweak-key]').forEach((btn) => {
      const k = btn.dataset.tweakKey;
      const v = btn.dataset.tweakValue;
      btn.classList.toggle('active', String(state[k]) === String(v));
    });
  }

  // Listen for host edit-mode activation
  window.addEventListener('message', (ev) => {
    if (!ev.data || !ev.data.type) return;
    if (ev.data.type === '__activate_edit_mode') {
      const p = document.getElementById('tweaks-panel');
      if (p) p.classList.add('open');
    }
    if (ev.data.type === '__deactivate_edit_mode') {
      const p = document.getElementById('tweaks-panel');
      if (p) p.classList.remove('open');
    }
  });

  // Build panel wiring (delegated)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-tweak-key]');
    if (!btn) return;
    const key = btn.dataset.tweakKey;
    const value = btn.dataset.tweakValue;
    const next = { ...window.__TWEAKS, [key]: value };
    window.__TWEAKS = next;
    apply(next);
    try {
      window.parent.postMessage(
        { type: '__edit_mode_set_keys', edits: { [key]: value } },
        '*'
      );
    } catch (err) {}
  });

  window.__TWEAKS = TWEAKS;
  apply(TWEAKS);

  // Announce availability AFTER listener is registered
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch (err) {}
})();
