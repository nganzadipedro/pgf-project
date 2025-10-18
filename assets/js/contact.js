(function(){
  function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    // simulate submit
    console.log('Contact submit', data);
    const lang = (window.i18n && window.i18n.getCurrentLanguage()) || 'pt';
    const msg = lang === 'en' ? 'Message sent successfully. Thank you!' : 'Mensagem enviada com sucesso. Obrigado pelo contacto!';
    const alert = document.getElementById('contactAlert');
    alert.classList.remove('d-none');
    alert.textContent = msg;
    form.reset();
  }

  function init(){
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', handleSubmit);
  }

  document.addEventListener('partials:loaded', init);
})();
