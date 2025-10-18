(function(){
  function renderNewsList(){
    const grid = document.getElementById('newsGrid');
    if (!grid || !window.siteData) return;
    const items = window.siteData.newsItems.slice(0, 6);
    const lang = (window.i18n && window.i18n.getCurrentLanguage()) || 'pt';
    const labelViews = lang === 'en' ? 'Views' : 'Visualizações';
    grid.innerHTML = items.map(item => {
      const views = window.siteData.getViews('news:'+item.id);
      return `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 reveal">
          <img src="/${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body d-flex flex-column">
            <span class="badge badge-accent mb-2">${new Date(item.date).toLocaleDateString()}</span>
            <h5 class="card-title mb-2">${item.title}</h5>
            <p class="card-text text-muted">${item.description}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="views"><i class="bi bi-eye me-1"></i>${views} ${labelViews}</span>
              <a href="/noticia.html?id=${item.id}" class="btn btn-sm btn-accent" data-i18n="btn.viewDetails">Ver detalhes</a>
            </div>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  function renderNewsDetail(){
    const container = document.getElementById('newsDetail');
    if (!container || !window.siteData) return;
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get('id'), 10);
    const item = window.siteData.newsItems.find(n => n.id === id) || window.siteData.newsItems[0];
    const key = 'news:'+item.id;
    const currentViews = window.siteData.incrementViews(key);
    const lang = (window.i18n && window.i18n.getCurrentLanguage()) || 'pt';
    const labelViews = lang === 'en' ? 'Views' : 'Visualizações';

    container.innerHTML = `
      <div class="row g-4">
        <div class="col-12 col-lg-7">
          <img class="rounded-3 shadow" src="/${item.image}" alt="${item.title}">
        </div>
        <div class="col-12 col-lg-5">
          <span class="badge badge-accent">${new Date(item.date).toLocaleDateString()}</span>
          <h2 class="mt-3">${item.title}</h2>
          <div class="text-muted mb-3"><i class="bi bi-eye me-1"></i>${currentViews} ${labelViews}</div>
          <p class="lead">${item.description}</p>
          <p>${item.content}</p>
          <a href="/noticias.html" class="btn btn-outline-dark"><i class="bi bi-arrow-left me-1"></i>Voltar</a>
        </div>
      </div>`;
  }

  document.addEventListener('partials:loaded', () => {
    renderNewsList();
    renderNewsDetail();
  });
})();
