(function(){
  function createGalleryCard(idx){
    const placeholders = [
      '/assets/img/placeholders/news.svg',
      '/assets/img/placeholders/event.svg',
      '/assets/img/hero-bg.svg'
    ];
    const images = [1,2,3].map(n => placeholders[(idx + n) % placeholders.length]);
    return `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card gallery-card h-100 reveal">
        <div id="carousel-${idx}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${images.map((src, i) => `
              <div class="carousel-item ${i===0?'active':''}">
                <img src="${src}" class="d-block w-100" alt="Galeria ${idx}-${i+1}">
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${idx}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-${idx}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body">
          <h5 class="card-title">Operações em foco #${idx}</h5>
          <p class="card-text text-muted">Registos fotográficos de ações policiais e atividades comunitárias.</p>
        </div>
      </div>
    </div>`;
  }

  function renderGallery(){
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = Array.from({length: 6}).map((_,i) => createGalleryCard(i+1)).join('');
  }

  function setupLightbox(){
    // Ensure a single lightbox modal exists
    if (!document.getElementById('galleryLightbox')){
      const modalWrapper = document.createElement('div');
      modalWrapper.innerHTML = `
      <div class="modal fade" id="galleryLightbox" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content bg-black">
            <div class="modal-body p-0">
              <img id="galleryLightboxImg" class="img-fluid w-100" alt="Preview"/>
            </div>
          </div>
        </div>
      </div>`;
      document.body.appendChild(modalWrapper.firstElementChild);
    }

    const modalEl = document.getElementById('galleryLightbox');
    const imgEl = document.getElementById('galleryLightboxImg');
    const bootstrapModal = () => window.bootstrap && new window.bootstrap.Modal(modalEl);

    // Delegate click handlers to gallery images
    document.querySelectorAll('.gallery-card .carousel-item img').forEach(img => {
      img.addEventListener('click', () => {
        if (!imgEl || !modalEl) return;
        imgEl.src = img.getAttribute('src');
        const instance = bootstrapModal();
        if (instance) instance.show();
      });
    });
  }

  document.addEventListener('partials:loaded', () => {
    renderGallery();
    // Setup lightbox after DOM is populated
    setupLightbox();
  });
})();
