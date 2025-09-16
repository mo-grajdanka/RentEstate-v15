document.addEventListener('DOMContentLoaded', function () {
  // ================== state ==================
  const selectedServices = {};                // { "Категория-Сервис": {category, service} }
  window.selectedServices = selectedServices; // если нужно снаружи

  // ================== taxonomy ==================
  const BIZ_TAXONOMY = {
    "Ветеринария": ["Вет клиника", "Вет аптека", "Зоомагазин"],
    "Спорт": ["Киберспорт", "Фитнес", "Футбол", "Волейбол", "Картинг"],
    "Торговля": ["Магазин", "Павильоны"],
    "Автосервис": ["Автомойка", "Детейлинг", "Сервис", "Шоурум", "Магазин"],
    "Общепит": ["Ресторан", "Кафе", "Фудтрак"],
    "Медицина": ["Аптека", "Мед центр", "Реабилитационный центр"],
    "Бьюти сфера": ["Салон красоты", "Спа салон", "Банный комплекс"],
    "Досуговое пространство": ["Административное здание", "Офис", "Коворкинг"],    
    "Детское образование": ["Школа", "Детский сад", "Спорт", "Секции"],
  };

  // мультивыбор направлений
  const twoStep = { selectedCats: new Set() };

  // ================== DOM ==================
  const showResultsContainer = document.getElementById('show-results-container');
  const showResultsBtn       = document.getElementById('show-results-btn');
  const resultCountSpan      = document.getElementById('result-count');

  const $bizCats  = document.getElementById('bizTopCats');
  const $bizSubW  = document.getElementById('bizSubcatsWrap');
  const $bizSubs  = document.getElementById('bizSubcats');
  const $bizReset = document.getElementById('bizReset');

  // ================== helpers ==================
  function countMatchingItems() {
    const dbp = (window.dataByPurpose && typeof window.dataByPurpose === 'object') ? window.dataByPurpose : {};
    const names = Object.values(selectedServices).map(s => s.service);
    if (!names.length) return 0;

    let total = 0;
    for (const purpose in dbp) {
      (dbp[purpose] || []).forEach(item => {
        if (Array.isArray(item.suitableFor) && item.suitableFor.some(n => names.includes(n))) total++;
      });
    }
    return total;
  }

  // === image helpers ===
const FALLBACK_SM = 'https://placehold.co/400x200?text=Image+Not+Found';
const GH_BASE = 'https://mo-grajdanka.github.io/RentEstate-v15';

function normalizeImg(url) {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;             
  if (url.startsWith('/'))         return `${GH_BASE}${url}`;
  if (url.startsWith('../'))       return `${GH_BASE}/` + url.replace(/^\.\.\//, '');
  return `${GH_BASE}/${url.replace(/^\.?\//, '')}`;       // "img/..." или "./img/..."
}


  

  // Плавное появление из точки
function popIn(el) {
  if (!el) return;
  el.classList.add('opacity-0', 'scale-0');
  // базовые transition-классы
  el.classList.add('transition', 'duration-200', 'ease-out', 'origin-center', 'transform');
  requestAnimationFrame(() => {
    el.classList.remove('opacity-0', 'scale-0'); // → opacity-100 / scale-100 по умолчанию
  });
}
function tapPop(el) {
  if (!el) return;
  el.classList.add('transform', 'transition', 'duration-100', 'scale-95');
  requestAnimationFrame(() => {
    setTimeout(() => el.classList.remove('scale-95'), 100);
  });
}


function countForSubtype(subtype) {
  const dbp = (window.dataByPurpose && typeof window.dataByPurpose === 'object') ? window.dataByPurpose : {};
  let total = 0;
  for (const purpose in dbp) {
    (dbp[purpose] || []).forEach(item => {
      if (Array.isArray(item.suitableFor) && item.suitableFor.includes(subtype)) {
        total++;
      }
    });
  }
  return total;
}


  // Inline-плашки внутри текста: используем те же категории, что и в BIZ_TAXONOMY
const $inline = document.getElementById('bizInlineCats');
if ($inline) {
  $inline.classList.add('text-2xl', 'md:text-3xl', 'leading-tight'); // <- крупнее
}

function setInlineActive(btn, active) {
  const prefix = btn.querySelector('[data-prefix]');
  if (active) {
    btn.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-600 text-white text-lg md:text-xl shadow transition';
    if (prefix) prefix.textContent = '•';
  } else {
    btn.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-lg md:text-xl transition ring-1 ring-blue-200';
    if (prefix) prefix.textContent = '#';
  }
}

function renderInlineCats() {
  if (!$inline) return;
  $inline.innerHTML = '';

  const cats = Object.keys(BIZ_TAXONOMY); // берём из твоей таксономии
  cats.forEach((cat, idx) => {
    const wrap = document.createElement('span');
    wrap.className = 'inline-flex items-center';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `<span data-prefix class="font-semibold">#</span><span>${cat}</span>`;

    // активность = есть ли категория в twoStep.selectedCats
    setInlineActive(btn, twoStep.selectedCats.has(cat));

    btn.addEventListener('click', () => {
      if (twoStep.selectedCats.has(cat)) {
        twoStep.selectedCats.delete(cat);
        // снимаем выбранные подтипы этой категории
        Object.keys(selectedServices).forEach(k => {
          if (k.startsWith(cat + '-')) delete selectedServices[k];
        });
      } else {
        if (twoStep.selectedCats.size >= 5) return; // лимит 5
        twoStep.selectedCats.add(cat);
      }

      // синхронизация со «Шаг 1 / Шаг 2» и карточками
      renderTopCategories();
      renderSubcats();
      refreshVisibilityAndCards();
      refreshAfterSelectionChange();

      // обновить стили inline-кнопки
      setInlineActive(btn, twoStep.selectedCats.has(cat));
    });

    wrap.appendChild(btn);

    // запятая как в примере
    if (idx < cats.length - 1) {
      const comma = document.createElement('span');
      comma.textContent = ',';
      comma.className = 'mx-1 text-gray-400 select-none';
      wrap.appendChild(comma);
    }
    $inline.appendChild(wrap);
  });
}

// вызвать после инициализации твоего интерфейса
renderInlineCats();


  function updateShowResultsButton() {
    const count = countMatchingItems();
    if (resultCountSpan) resultCountSpan.textContent = String(count);
    if (!showResultsContainer) return;
    const hasSelection = Object.keys(selectedServices).length > 0;
    showResultsContainer.classList.toggle('opacity-0', !hasSelection);
    showResultsContainer.classList.toggle('pointer-events-none', !hasSelection);
  }

function refreshVisibilityAndCards() {
  const hasSelection = Object.keys(selectedServices).length > 0;

  const wrap  = document.getElementById('bizResultsWrap');
  const title = document.querySelector('[data-results-title]');
  const empty = document.getElementById('bizEmpty');
  const grid  = document.getElementById('matchingCards');

  if (!hasSelection) {
    // пока не выбрали подтип — вообще ничего не показываем
    empty?.classList.add('hidden');
    wrap?.classList.add('hidden');
    title?.classList.add('hidden');
    grid?.replaceChildren();
    return;
  }

  // есть выбор → рендерим карточки и решаем, что показывать
  const count = renderMatchingCards(); // вернём количество найденных

  if (count === 0) {
    // выбрано, но результатов нет → показываем пустое состояние
    empty?.classList.remove('hidden');
    wrap?.classList.add('hidden');
    title?.classList.remove('hidden');
  } else {
    // есть результаты
    empty?.classList.add('hidden');
    wrap?.classList.remove('hidden');
    title?.classList.remove('hidden');
  }
}


function setPillActive(btn, active) {
  if (!btn) return;
  const prefix  = btn.querySelector('[data-prefix]');
  const countEl = btn.querySelector('[data-count]');

  const baseBtn =
    'inline-flex items-center gap-2 px-3 py-1.5 rounded-md ' +
    'whitespace-nowrap transition ring-1 text-lg md:text-xl';

  if (active) {
    btn.className = `${baseBtn} bg-blue-600 text-white shadow hover:bg-blue-600 ring-0`;
    if (prefix)  prefix.textContent = '•';
    if (countEl) countEl.className  = 'ml-2 text-base md:text-lg text-white';
  } else {
    btn.className = `${baseBtn} bg-blue-100 text-blue-800 hover:bg-blue-100 ring-blue-200`;
    if (prefix)  prefix.textContent = '#';
    if (countEl) countEl.className  = 'ml-2 text-base md:text-lg text-gray-500';
  }
}




function getAvailableSubtypes() {
  // объединяем подтипы из всех выбранных направлений, убираем дубли
  const set = new Set();
  Array.from(twoStep.selectedCats).forEach(cat => {
    (BIZ_TAXONOMY[cat] || []).forEach(sub => set.add(sub));
  });
  return Array.from(set);
}

function pruneSelections() {
  // удаляем выбранные подтипы, которые больше недоступны
  const allowed = new Set(getAvailableSubtypes());
  Object.keys(selectedServices).forEach(key => {
    const { category, service } = selectedServices[key];
    if (!twoStep.selectedCats.has(category) || !allowed.has(service)) {
      delete selectedServices[key];
    }
  });
}



  function collectMatches() {
    const names = Object.values(selectedServices).map(s => s.service);
    if (!names.length) return [];
    const dbp = (window.dataByPurpose && typeof window.dataByPurpose === 'object') ? window.dataByPurpose : {};
    const matches = [];
    for (const purpose in dbp) {
      (dbp[purpose] || []).forEach(item => {
        if (Array.isArray(item.suitableFor) && item.suitableFor.some(n => names.includes(n))) {
          matches.push({ ...item, _purpose: purpose });
        }
      });
    }
    return matches;
  }

function renderMatchingCards() {
  const grid = document.getElementById('matchingCards');
  if (!grid) return 0;

  grid.innerHTML = '';
  const matches = collectMatches();
  if (!matches.length) return 0;

  grid.innerHTML = matches.map(m => {
    // берём первый доступный источник
    const raw = Array.isArray(m.images) ? m.images[0] : (m.images || m.img || m.main_image || null);
    const src = normalizeImg(raw);

    // если src есть — ставим его + onerror -> fallback
    // если src нет — сразу ставим fallback (без onerror)
    const imgTag = src
      ? `<img src="${src}" alt="${m.name || ''}"
              class="w-full h-32 object-cover"
              referrerpolicy="no-referrer"
              onerror="this.onerror=null;this.src='${FALLBACK_SM}'">`
      : `<img src="${FALLBACK_SM}" alt="${m.name || ''}" class="w-full h-32 object-cover">`;

    const href  = `pages/detail.html?purpose=${encodeURIComponent(m._purpose || 'land')}&id=${encodeURIComponent(m.id)}`;
    const area  = Number.isFinite(m.area) ? m.area.toLocaleString("ru-RU") : "—";
    const place = m.place ? `<p class="text-gray-500 text-xs mb-2">${m.place}</p>` : '';

    return `
      <a href="${href}" class="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        ${imgTag}
        <div class="p-4">
          <h3 class="font-semibold mb-1">${m.name || 'Объект'}</h3>
          <p class="text-gray-600 text-sm mb-2">Площадь: ${area} м²</p>
          ${place}
          <p class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            Подробнее <i class="fas fa-arrow-right ml-2"></i>
          </p>
        </div>
      </a>
    `;
  }).join('');

  return matches.length;
}


  function refreshAfterSelectionChange() {
    updateShowResultsButton();
    refreshVisibilityAndCards();
    window.dispatchEvent(new CustomEvent('filters:changed', {
      detail: { selectedServices: Object.values(selectedServices) }
    }));
  }

  // ================== Шаг 1: мультивыбор направлений ==================
function renderTopCategories() {
  if (!$bizCats) return;
  $bizCats.innerHTML = '';

  const cats = Object.keys(BIZ_TAXONOMY);
  cats.forEach((cat, idx) => {
    const wrap = document.createElement('span');
    wrap.className = 'inline-flex items-center';

    const b = document.createElement('button');
    b.type = 'button';
    b.innerHTML = `
      <span data-prefix class="font-semibold">#</span>
      <span>${cat}</span>
    `;
    setPillActive(b, twoStep.selectedCats.has(cat));

    b.addEventListener('click', () => {
      if (twoStep.selectedCats.has(cat)) {
        twoStep.selectedCats.delete(cat);
        Object.keys(selectedServices).forEach(k => {
          if (k.startsWith(cat + '-')) delete selectedServices[k];
        });
      } else {
        if (twoStep.selectedCats.size >= 5) return; // лимит 5
        twoStep.selectedCats.add(cat);
      }
      renderTopCategories();
      renderSubcats();
      refreshAfterSelectionChange();
      refreshVisibilityAndCards();
    });

    wrap.appendChild(b);

    // запятая, как в примере
    if (idx < cats.length - 1) {
      const comma = document.createElement('span');
      comma.textContent = ',';
      comma.className = 'mx-2 text-gray-400 select-none';
      wrap.appendChild(comma);
    }

    $bizCats.appendChild(wrap);
  });
}

  // ================== Шаг 2: подтипы выбранных направлений ==================
function renderSubcats() {
  if (!$bizSubs || !$bizSubW) return;
  $bizSubs.innerHTML = '';

  if (twoStep.selectedCats.size === 0) {
    $bizSubW.classList.add('hidden');
    return;
  }
  $bizSubW.classList.remove('hidden');

  const subtypes = getAvailableSubtypes();
  if (!subtypes.length) return;

  const row = document.createElement('div');
  row.className = 'flex flex-wrap gap-2';
  $bizSubs.appendChild(row);

  subtypes.forEach((sub, idx) => {
    const catForKey = Array.from(twoStep.selectedCats)
      .find(c => (BIZ_TAXONOMY[c] || []).includes(sub));
    const key = `${catForKey}-${sub}`;

    const wrap = document.createElement('span');
    wrap.className = 'inline-flex items-center';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.cat = catForKey;
    btn.dataset.sub = sub;

    const cnt = countForSubtype(sub);

    // крупнее текст и счётчик
    btn.innerHTML = `
      <span data-prefix class="font-semibold text-lg md:text-xl">#</span>
      <span class="text-lg md:text-xl">${sub}</span>
      <span data-count class="ml-2 text-base md:text-lg text-gray-500">${cnt}</span>
    `;

    // убрал text-sm, чтобы не занижать размер
    btn.className = [
      'inline-flex items-center gap-2 px-3 py-1.5 rounded-md',
      'whitespace-nowrap transition ring-1'
    ].join(' ');

    setPillActive(btn, !!selectedServices[key]);
    popIn(wrap);

    btn.addEventListener('click', () => {
      tapPop(btn);
      const wasSelected = !!selectedServices[key];
      if (wasSelected) {
        delete selectedServices[key];
      } else {
        selectedServices[key] = { category: catForKey, service: sub };
      }
      setPillActive(btn, !wasSelected);
      refreshVisibilityAndCards();
      refreshAfterSelectionChange();
    });

    wrap.appendChild(btn);

    if (idx < subtypes.length - 1) {
      const comma = document.createElement('span');
      comma.textContent = ',';
      comma.className = 'mx-2 text-gray-400 select-none';
      wrap.appendChild(comma);
    }

    row.appendChild(wrap);
  });
}




  // Сброс
  $bizReset?.addEventListener('click', () => {
   twoStep.selectedCats.clear();
Object.keys(selectedServices).forEach(k => delete selectedServices[k]);
renderTopCategories();
renderSubcats();
pruneSelections(); 
refreshVisibilityAndCards();
  });

  // ================== (необязательно) поддержка старых dropdown'ов ==================
  function toggleDropdown(button) {
    const dropdownMenu = button.nextElementSibling;
    const isOpen = !dropdownMenu.classList.contains('hidden');
    document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('hidden'));
    if (!isOpen) dropdownMenu.classList.remove('hidden');
  }
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function (e) { e.stopPropagation(); toggleDropdown(this); });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('hidden'));
  });
  document.querySelectorAll('.dropdown-menu').forEach(menu => menu.addEventListener('click', e => e.stopPropagation()));
  document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      const category = this.dataset.category;
      const service  = this.dataset.service;
      const key = `${category}-${service}`;
      if (selectedServices[key]) this.classList.remove('bg-blue-100','text-blue-700'), delete selectedServices[key];
      else this.classList.add('bg-blue-100','text-blue-700'), selectedServices[key] = { category, service };
      refreshAfterSelectionChange();
      this.closest('.dropdown-menu')?.classList.add('hidden');
    });
  });

  // Кнопка "Показать" (если используешь переход на list.html)
showResultsBtn?.addEventListener('click', () => {
  const names = Object.values(selectedServices).map(s => s.service);
  if (!names.length) return;

  const params = new URLSearchParams();
  names.forEach(n => params.append('suitableFor', n)); 
  window.location.href = `./pages/list.html?${params.toString()}`;
});

  // ================== init ==================
  renderTopCategories();
  renderSubcats();
  updateShowResultsButton();
  renderMatchingCards();
});





