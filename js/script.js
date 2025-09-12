document.addEventListener('DOMContentLoaded', () => {
    
    const filters = { place: null, purpose: null, minArea: null, maxArea: null };
    const defaultAreas = [0, 50, 100, 200, 500, 1000];
    const fmt = n => Number(n).toLocaleString('ru-RU');
    window.filters = filters;
    
    const wrappers = {};
    document.querySelectorAll('.relative[data-filter-key]')
        .forEach(w => wrappers[w.dataset.filterKey] = w);

function setAreaLabelCentering(key, centered) {
  const wrap  = wrappers[key];
  if (!wrap) return;
  const label = wrap.querySelector('.filter-label');
  if (!label) return;

  // центрируем только при выбранном значении
  label.classList.toggle('flex-1', centered);
  label.classList.toggle('text-center', centered);


  // label.classList.toggle('text-left', !centered);
}

    

    
function setFilterUI(key, text, value = null) {
  const wrap = wrappers[key];
  if (!wrap) return;
  const btn = wrap.querySelector('.filter-toggle');
  const labelEl = btn.querySelector('.filter-label');
  const items = wrap.querySelectorAll('.filter-options a');

  items.forEach(a => {
    const active = value !== null && String(a.dataset.value) === String(value);
    a.classList.toggle('bg-indigo-600', active);
    a.classList.toggle('text-white', active);
  });

  // если min/max и есть value — принудительно строим красивую подпись
  if ((key === 'minArea' || key === 'maxArea') && value !== null) {
    const num = Number(value);
    const prefix = key === 'minArea' ? 'От ' : 'До ';
    labelEl.textContent = Number.isFinite(num) ? `${prefix}${fmt(num)} м²` : text;
  } else {
    labelEl.textContent = text;
  }

  btn.classList.toggle('bg-indigo-600', value !== null);
  btn.classList.toggle('text-white', value !== null);

  // центрирование для min/max при выбранном значении
  if (key === 'minArea' || key === 'maxArea') {
    setAreaLabelCentering(key, value !== null);
  }
}


function rebuildAreaOptions(limitKey = null) {
  let uniq;

  if (!filters.purpose) {
    uniq = [...defaultAreas];
  } else {
    const src = (dataByPurpose[filters.purpose] || [])
      .map(o => Number(o.area))
      .filter(Number.isFinite);
    uniq = [...new Set(src)].sort((a, b) => a - b);

    // Фолбэк, если по назначению данных нет
    if (!uniq.length) uniq = [...defaultAreas];
  }

  if (limitKey !== 'minArea' && filters.minArea != null)
    uniq = uniq.filter(v => v >= +filters.minArea);
  if (limitKey !== 'maxArea' && filters.maxArea != null)
    uniq = uniq.filter(v => v <= +filters.maxArea);

  ['minArea', 'maxArea'].forEach(key => {
    const wrap = wrappers[key];
    if (!wrap) return;
    const menu = wrap.querySelector('.filter-options');

    menu.innerHTML = uniq.map(v => `
      <li>
        <a href="#" data-value="${v}"
           class="block px-4 py-2 hover:bg-indigo-600 hover:text-white">
          ${fmt(v)} м²
        </a>
      </li>
    `).join('');

    bindItemHandlers(menu, key);
  });
}



    function handleItemClick(e, key, a, menu) {
        e.preventDefault();

        const val = a.dataset.value;
        const label = a.textContent.trim();

       
        if (filters[key] === val) {
            filters[key] = null;
            setFilterUI(key, wrappers[key].querySelector('.filter-toggle').dataset.placeholder);
            rebuildAreaOptions();
            menu.classList.add('hidden');
            return;
        }

       
        filters[key] = val;
        setFilterUI(key, label, val);

       
        if (key === 'minArea' && filters.maxArea && +val > +filters.maxArea) {
            filters.maxArea = null;
            setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder);
        }
        if (key === 'maxArea' && filters.minArea && +val < +filters.minArea) {
            filters.minArea = null;
            setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder);
        }

        rebuildAreaOptions();
        menu.classList.add('hidden');
    }


    
    function bindItemHandlers(menu, key) {
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', e => handleItemClick(e, key, a, menu));
        });
    }

    
    function bindMenuHandlers(wrap) {
        const key = wrap.dataset.filterKey;
        const btn = wrap.querySelector('.filter-toggle');
        const menu = wrap.querySelector('.filter-options');

        
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const open = !menu.classList.contains('hidden');
            document.querySelectorAll('.filter-options')
                .forEach(m => m.classList.add('hidden'));
            if (!open) menu.classList.remove('hidden');
        });

        
        menu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const val = a.dataset.value;
                const label = a.textContent.trim();

                
                if (filters[key] === val) {
                    filters[key] = null;
                    setFilterUI(key, btn.dataset.placeholder);

                    if (key === 'purpose') {              
                        filters.minArea = filters.maxArea = null;
                        rebuildAreaOptions();
                        setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder);
                        setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder);
                    }
                    menu.classList.add('hidden');
                    return;
                }

                
                filters[key] = val;
                setFilterUI(key, label, val);

                
if (key === 'purpose') {
  rebuildAreaOptions();

  const arr = (dataByPurpose[val] || [])
    .map(o => Number(o.area))
    .filter(Number.isFinite);

  if (arr.length) {
    const minV = Math.min(...arr);
    const maxV = Math.max(...arr);

    filters.minArea = String(minV);
    filters.maxArea = String(maxV);

    setFilterUI('minArea', `${fmt(minV)} м²`, minV);
    setFilterUI('maxArea', `${fmt(maxV)} м²`, maxV);
  } else {
    // нет данных — очищаем значения и показываем плейсхолдеры
    filters.minArea = null;
    filters.maxArea = null;

    setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder, null);
    setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder, null);
  }
}


                
                if (key === 'minArea' && filters.maxArea && +val > +filters.maxArea) {
                    filters.maxArea = null;
                    setFilterUI('maxArea', wrappers.maxArea.querySelector('.filter-toggle').dataset.placeholder);
                }
                if (key === 'maxArea' && filters.minArea && +val < +filters.minArea) {
                    filters.minArea = null;
                    setFilterUI('minArea', wrappers.minArea.querySelector('.filter-toggle').dataset.placeholder);
                }

                menu.classList.add('hidden');
            });
        });
    }

    

    
    Object.values(wrappers).forEach(bindMenuHandlers);

    
    rebuildAreaOptions();

    
    const showBtn = document.querySelector('.show-results');
    if (showBtn) {
        showBtn.addEventListener('click', () => {
            const qs = new URLSearchParams();
            Object.entries(filters).forEach(([k, v]) => { if (v !== null) qs.set(k, v); });
            window.location.href = 'pages/list.html?' + qs.toString();
        });
    }

    
    document.addEventListener('click', () => {
        document.querySelectorAll('.filter-options:not(.hidden)')
            .forEach(m => m.classList.add('hidden'));
    });
});


document.addEventListener('DOMContentLoaded', () => {

  const form   = document.getElementById('contactForm');
  const fields = {
    name  : document.getElementById('name'),
    phone : document.getElementById('phone'),
    email : document.getElementById('email')
  };

  
  const isNameValid  = v => /^[\p{L}\s'-]+$/u.test(v.trim());
  const isPhoneValid = v => /^(\+?\d[\d\s\-]{7,})$/.test(v.trim());
  const isEmailValid = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  
  function showError(input, message) {
    clearError(input);
    input.classList.add('border-red-500', 'ring-2', 'ring-red-500');

    const p = document.createElement('p');
    p.className = 'mt-1 text-sm text-red-500';
    p.textContent = message;
    input.parentNode.appendChild(p);
  }

  function clearError(input) {
    input.classList.remove('border-red-500', 'ring-2', 'ring-red-500');
    input.parentNode.querySelectorAll('p.mt-1.text-sm.text-red-500')
         .forEach(el => el.remove());
  }

  
  function validateField(input) {
    const val = input.value.trim();
    clearError(input);

    switch (input.id) {
      case 'name':
        if (!val)           { showError(input, 'Поле обязательно для заполнения'); return false; }
        if (!isNameValid(val)) { showError(input, 'Имя должно содержать только буквы'); return false; }
        break;

      case 'phone':
        if (!val)             { showError(input, 'Поле обязательно'); return false; }
        if (!isPhoneValid(val)) { showError(input, 'Введите корректный телефон'); return false; }
        break;

      case 'email':
        if (val && !isEmailValid(val)) {
          showError(input, 'Введите корректный e-mail'); return false;
        }
        break;
    }
    return true;
  }

  
  Object.values(fields).forEach(input => {
    input.addEventListener('blur',  () => validateField(input));
    input.addEventListener('input', () => validateField(input));
  });

  
  form.addEventListener('submit', e => {
    const invalid = Object.values(fields).some(f => !validateField(f));
    if (invalid) {
      e.preventDefault();
      form.querySelector('.border-red-500')?.scrollIntoView({
        behavior:'smooth', block:'center'
      });
    }
  });

});

