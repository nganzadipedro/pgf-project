(function(){
  function includePartials(){
    const includeEls = Array.from(document.querySelectorAll('[data-include]'));
    if (includeEls.length === 0) return Promise.resolve();
    return Promise.all(includeEls.map(el => {
      const url = el.getAttribute('data-include');
      return fetch(url).then(r => r.text()).then(html => { el.innerHTML = html; }).catch(() => {});
    }));
  }

  function setActiveNav(){
    const current = location.pathname.replace(/\/$/, '/index.html');
    document.querySelectorAll('.navbar a.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const absolute = new URL(href, location.origin).pathname.replace(/\/$/, '/index.html');
      if (absolute === current) link.classList.add('active');
    });
  }

  function setupLanguageToggle(){
    document.querySelectorAll('[data-lang-select]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang-select');
        if (window.i18n) window.i18n.setLanguage(lang);
      });
    });
    if (window.i18n) window.i18n.setLanguage(window.i18n.getCurrentLanguage());
  }

  function setupReveal(){
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries){
        if (entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); }
      }
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function setupBackToTop(){
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btn.classList.remove('d-none'); else btn.classList.add('d-none');
    });
    btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  function init(){
    includePartials().then(() => {
      setActiveNav();
      setupLanguageToggle();
      if (window.i18n) window.i18n.applyTranslations();
      setupReveal();
      setupBackToTop();
      document.dispatchEvent(new CustomEvent('partials:loaded'));
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
