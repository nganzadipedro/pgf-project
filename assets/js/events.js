(function(){
  function renderEvents(){
    const grid = document.getElementById('eventsGrid');
    if (!grid || !window.siteData) return;
    const items = window.siteData.eventItems.slice(0, 6);

    grid.innerHTML = items.map(item => `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card event h-100 reveal">
          <img src="/${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex gap-2 mb-2">
              <span class="badge">${new Date(item.date).toLocaleDateString()}</span>
              <span class="badge"><i class="bi bi-geo-alt me-1"></i>${item.place}</span>
            </div>
            <h5 class="card-title mb-2">${item.title}</h5>
            <p class="card-text text-muted">${item.description}</p>
            <div class="mt-auto d-flex justify-content-end">
              <a href="#" class="btn btn-sm btn-outline-dark disabled">Detalhes em breve</a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  document.addEventListener('partials:loaded', renderEvents);
})();
