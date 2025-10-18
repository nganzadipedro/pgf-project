(function(){
  const dictionaries = {
    pt: {
      'nav.home': 'Início',
      'nav.about': 'Sobre',
      'nav.news': 'Notícias',
      'nav.gallery': 'Galeria',
      'nav.events': 'Eventos',
      'nav.contact': 'Contacto',
      'hero.home.title': 'Servir e Proteger',
      'hero.home.lead': 'Unidade Policial comprometida com a segurança da comunidade.',
      'hero.about.title': 'Quem Somos',
      'hero.about.lead': 'Disciplina, integridade e serviço público.',
      'hero.news.title': 'Notícias',
      'hero.news.lead': 'Acompanhe as últimas operações e comunicados.',
      'hero.events.title': 'Eventos',
      'hero.events.lead': 'Formações, cerimónias e atividades comunitárias.',
      'hero.gallery.title': 'Galeria',
      'hero.gallery.lead': 'Momentos marcantes da nossa missão.',
      'hero.contact.title': 'Contacto',
      'hero.contact.lead': 'Estamos ao serviço. Fale connosco.',
      'btn.viewDetails': 'Ver detalhes',
      'btn.readMore': 'Ler mais',
      'btn.send': 'Enviar',
      'label.views': 'Visualizações',
      'contact.name': 'Nome Completo',
      'contact.email': 'Email',
      'contact.phone': 'Telefone',
      'contact.subject': 'Assunto',
      'contact.message': 'Mensagem',
      'contact.success': 'Mensagem enviada com sucesso. Obrigado pelo contacto!',
      'footer.rights': 'Todos os direitos reservados.'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.news': 'News',
      'nav.gallery': 'Gallery',
      'nav.events': 'Events',
      'nav.contact': 'Contact',
      'hero.home.title': 'Serve and Protect',
      'hero.home.lead': 'Police Unit committed to community safety.',
      'hero.about.title': 'About Us',
      'hero.about.lead': 'Discipline, integrity and public service.',
      'hero.news.title': 'News',
      'hero.news.lead': 'Follow our latest operations and releases.',
      'hero.events.title': 'Events',
      'hero.events.lead': 'Training, ceremonies and community activities.',
      'hero.gallery.title': 'Gallery',
      'hero.gallery.lead': 'Remarkable moments of our mission.',
      'hero.contact.title': 'Contact',
      'hero.contact.lead': 'We are at your service. Reach us.',
      'btn.viewDetails': 'View details',
      'btn.readMore': 'Read more',
      'btn.send': 'Send',
      'label.views': 'Views',
      'contact.name': 'Full Name',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.subject': 'Subject',
      'contact.message': 'Message',
      'contact.success': 'Message sent successfully. Thank you! ',
      'footer.rights': 'All rights reserved.'
    }
  };

  function getCurrentLanguage(){
    const stored = localStorage.getItem('lang');
    if (stored) return stored;
    const navLang = navigator.language || 'pt';
    return navLang.startsWith('pt') ? 'pt' : 'en';
  }

  function setLanguage(lang){
    const value = (lang === 'en') ? 'en' : 'pt';
    localStorage.setItem('lang', value);
    document.documentElement.setAttribute('lang', value);
    applyTranslations();
    // Update language toggle UI state
    const ptBtn = document.querySelector('[data-lang-select="pt"]');
    const enBtn = document.querySelector('[data-lang-select="en"]');
    if (ptBtn && enBtn) {
      if (value === 'pt') { ptBtn.classList.add('active'); enBtn.classList.remove('active'); }
      else { enBtn.classList.add('active'); ptBtn.classList.remove('active'); }
    }
  }

  function translateElement(el, dict) {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (!key) return;
    const text = dict[key];
    if (typeof text === 'undefined') return;
    if (attr) {
      el.setAttribute(attr, text);
    } else {
      el.textContent = text;
    }
  }

  function applyTranslations(){
    const lang = getCurrentLanguage();
    const dict = dictionaries[lang] || dictionaries.pt;
    document.querySelectorAll('[data-i18n]').forEach(el => translateElement(el, dict));
    document.querySelectorAll('[data-i18n-attr]').forEach(el => translateElement(el, dict));
  }

  window.i18n = { getCurrentLanguage, setLanguage, applyTranslations };
})();
