document.addEventListener("DOMContentLoaded", () => {
  const sitesData  = window.dataByPurpose?.land || [];
  const sitesBlock = document.getElementById("sitesBlock");
  const siteList   = document.getElementById("siteList");

  if (!sitesData.length || !sitesBlock || !siteList) {
    sitesBlock?.classList.add("hidden");
    return;
  }

  // ---------- ХЕЛПЕР ДЛЯ КАРТИНОК ----------
  const FALLBACK_IMG_SM = 'https://placehold.co/400x200?text=No+Image';
  const FALLBACK_IMG_LG = 'https://placehold.co/900x256?text=No+Image';
  const BASE = 'https://mo-grajdanka.github.io/RentEstate-v15';

  function normalizeImg(url) {
    if (!url) return null;
    // абсолютные http(s) — оставляем
    if (/^https?:\/\//i.test(url)) return url;
    // начинаются с / — считаем от корня gh-pages
    if (url.startsWith('/')) return `${BASE}${url}`;
    // относительный ../img/... → в абсолютный
    if (url.startsWith('../')) return `${BASE}/` + url.replace(/^\.\.\//, '');
    // просто img/... → тоже в абсолютный
    return `${BASE}/${url.replace(/^\.?\//, '')}`;
  }

  // ---------- РЕНДЕР КАРТОЧЕК ----------
  siteList.innerHTML = sitesData.slice(0, 4).map(site => {
    const imgRaw = site.images?.[0] || site.img || site.main_image || null;
    const img0 = normalizeImg(imgRaw);
    const area = Number.isFinite(site.area) ? site.area.toLocaleString("ru-RU") : (site.area ?? "—");

    // если нет картинки — сразу ставим fallback без onerror
    const imgTag = img0
      ? `<img src="${img0}" alt="${site.name || ""}"
              class="w-full h-full object-cover"
              referrerpolicy="no-referrer"
              onerror="this.onerror=null;this.src='${FALLBACK_IMG_SM}'">`
      : `<img src="${FALLBACK_IMG_SM}" alt="${site.name || ""}"
              class="w-full h-full object-cover">`;

    return `
      <div class="property-card relative bg-white rounded-lg overflow-hidden shadow-md h-64 flex flex-col cursor-pointer"
           data-id="${site.id}">
        <div class="h-40 w-full overflow-hidden bg-gray-100">
          ${imgTag}
        </div>
        <div class="p-4 flex flex-col">
          <h3 class="font-semibold leading-snug mb-1 line-clamp-2">${site.name || ""}</h3>
          <p class="text-gray-500 text-sm mb-1">${site.place || ""}</p>
          <p class="text-gray-600 text-sm mb-3">Площадь: ${area} м²</p>
          <div class="mt-auto"></div>
        </div>
      </div>
    `;
  }).join("");

  // === Оверлей по центру ===
  const overlay = document.createElement("div");
  overlay.id = "siteHoverPreview";
  overlay.className = `
    fixed inset-0 z-[7000] hidden opacity-0 transition
    bg-black/40 backdrop-blur-sm
    flex items-center justify-center p-4
  `;
  overlay.innerHTML = `
    <div class="relative bg-white rounded-2xl shadow-2xl ring-1 ring-black/10
                w-[min(92vw,900px)] overflow-hidden pointer-events-auto">
      <!-- крестик -->
      <button id="sitePreviewClose"
          class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center
                 rounded-full bg-white/80 shadow hover:bg-white text-gray-600 hover:text-gray-900
                 text-2xl font-bold leading-none">
        &times;
      </button>
      <a id="siteHoverCard" class="block w-full h-full"></a>
    </div>
  `;
  document.body.appendChild(overlay);

  const cardEl = overlay.querySelector("#siteHoverCard");
  const closeBtn = overlay.querySelector("#sitePreviewClose");

  function fillPreview(site) {
    const listUrl = `pages/list.html?place=${encodeURIComponent(site.place || "")}`;

    // особый случай для "Площадка B"
    if (site.name === "Площадка B") {
      cardEl.removeAttribute("href");
      cardEl.innerHTML = `
        <div class="p-8 space-y-6">
          <h3 class="text-2xl font-semibold mb-4">${site.name}</h3>
          ${site.hoverText ? `<p class="text-gray-700 leading-relaxed">${site.hoverText}</p>` : ""}
          <div>
            <a href="${listUrl}"
               class="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Перейти к объектам <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      `;
      return;
    }

    const imgRaw = site.images?.[0] || site.img || site.main_image || null;
    const img0 = normalizeImg(imgRaw);
    const area = Number.isFinite(site.area) ? site.area.toLocaleString("ru-RU") : (site.area ?? "—");

    const imgTag = img0
      ? `<img src="${img0}" alt="${site.name || ""}"
              class="w-full h-64 object-cover"
              referrerpolicy="no-referrer"
              onerror="this.onerror=null;this.src='${FALLBACK_IMG_LG}'">`
      : `<img src="${FALLBACK_IMG_LG}" alt="${site.name || ""}"
              class="w-full h-64 object-cover">`;

    cardEl.setAttribute("href", listUrl);
    cardEl.innerHTML = `
      ${imgTag}
      <div class="p-6 space-y-3">
        <h3 class="text-2xl font-semibold">${site.name || ""}</h3>
        ${site.place ? `<p class="text-gray-600">${site.place}</p>` : ""}
        <p class="text-gray-800">Площадь: ${area} м²</p>
        ${site.hoverText ? `<p class="text-gray-700 leading-relaxed">${site.hoverText}</p>` : ""}
        <div class="mt-2 inline-flex items-center text-indigo-600 font-medium">
          Перейти к объектам <i class="fas fa-arrow-right ml-2"></i>
        </div>
      </div>
    `;
  }

  function showPreview(site) {
    fillPreview(site);
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => overlay.classList.remove("opacity-0"));
    document.body.style.overflow = 'hidden';
  }
  function hidePreview() {
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 150);
    document.body.style.overflow = '';
  }

  document.querySelectorAll("#siteList .property-card").forEach(card => {
    const id   = Number(card.dataset.id);
    const site = (window.dataByPurpose?.land || []).find(s => s.id === id);
    if (!site) return;

    card.addEventListener("click", (e) => {
      if (e.target.closest('a, button')) return;
      showPreview(site);
    });
  });

  closeBtn.addEventListener("click", hidePreview);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) hidePreview(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hidePreview(); });
});

