
function openModal() {
  document.getElementById('modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModalBtn');
  const contactBtn = document.getElementById('contactManagerBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const overlay = document.querySelector('#modal .modal-overlay');

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (contactBtn) contactBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });






  })



  

// function openMapModal() {
//   document.getElementById('mapModal').classList.remove('hidden');
//   document.body.style.overflow = 'hidden';
//   // дать браузеру отрисовать модалку, затем инициализировать/пересчитать карту
//   requestAnimationFrame(() => {
//     if (!window._mapInited) initModalMap();
//     else if (window._ymap) window._ymap.container.fitToViewport();
//   });
// }
// function closeMapModal() {
//   document.getElementById('mapModal').classList.add('hidden');
//   document.body.style.overflow = 'auto';
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const openMapBtn  = document.getElementById('openMapBtn');
//   const closeMapBtn = document.getElementById('closeMapBtn');
//   const mapOverlay  = document.querySelector('#mapModal .modal-overlay');

//   openMapBtn?.addEventListener('click', e => { e.preventDefault(); openMapModal(); });
//   closeMapBtn?.addEventListener('click', closeMapModal);
//   mapOverlay?.addEventListener('click', closeMapModal);
//   document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMapModal(); });
// });

// // ===== Инициализация карты в модалке =====
// function initModalMap() {
//   ymaps.ready(function () {
//     const containerId = 'modalMap';
//     const map = new ymaps.Map(containerId, {
//       center: [59.982286, 30.382180],
//       zoom: 12
//     });
//     window._ymap = map;
//     window._mapInited = true;

//     // Собираем объекты по координатам
//     const objectsByCoords = new Map();
//     Object.values(window.dataByPurpose || {}).forEach(arr => {
//       (arr || []).forEach(item => {
//         if (!item.coordinates) return;
//         const key = item.coordinates.join(',');
//         if (!objectsByCoords.has(key)) objectsByCoords.set(key, []);
//         objectsByCoords.get(key).push(item);
//       });
//     });

//     function createBalloonContent(items) {
//       const first = items[0];
//       const place = first.place;
//       const desc  = (window.placeDescriptions && window.placeDescriptions[place]) || 'Описание временно отсутствует.';
//       const total = items.reduce((sum, o) => sum + Number(o.area || 0), 0);
//       const listUrl = `pages/list.html?place=${encodeURIComponent(place)}`;

//       if (items.length === 1) {
//         const detailUrl = `pages/detail.html?purpose=${encodeURIComponent(first._purpose || '')}&id=${first.id}`;
//         return `
//           <div style="padding:12px;max-width:280px">
//             <h4 style="margin:0 0 8px">${first.name}</h4>
//             <div style="margin-bottom:8px">${desc}</div>
//             <div><b>Площадь:</b> ${item.area.toLocaleString("ru-RU")} м²</div>
//             <div style="margin-top:10px"><a href="${detailUrl}" style="color:#2563eb;font-weight:600">Подробнее →</a></div>
//           </div>`;
//       } else {
//         return `
//           <div style="padding:12px;max-width:280px">
//             <h4 style="margin:0 0 8px">${place}</h4>
//             <div style="margin-bottom:8px">${desc}</div>
//             <div><b>Участков:</b> ${items.length}</div>
//             <div><b>Общая площадь:</b> ${total} м²</div>
//             <div style="margin-top:10px"><a href="${listUrl}" style="color:#2563eb;font-weight:600">Показать все →</a></div>
//           </div>`;
//       }
//     }

//     const placemarks = [];
//     objectsByCoords.forEach((items, key) => {
//       // добавим _purpose (если нужен в деталке)
//       items.forEach(it => {
//         if (!it._purpose) {
//           // пытаемся понять по dataByPurpose
//           for (const [p, arr] of Object.entries(window.dataByPurpose || {})) {
//             if (arr && arr.some(a => a === it)) { it._purpose = p; break; }
//           }
//         }
//       });

//       const coords = key.split(',').map(Number);
//       const place  = items[0].place;

//       const pm = new ymaps.Placemark(
//         coords,
//         {
//           hintContent: `📍 ${place}`,
//           balloonContent: createBalloonContent(items),
//           placeName: place
//         },
//         {
//           iconLayout: 'default#imageWithContent',
//           iconImageHref: '',
//           iconImageSize: [60, 60],
//           iconImageOffset: [-30, -60],
//           iconContentLayout: ymaps.templateLayoutFactory.createClass(
//             `<div style="font-size:40px;line-height:1;">📍</div>`
//           ),
//           iconContentOffset: [0, 0]
//         }
//       );

//       placemarks.push(pm);
//       map.geoObjects.add(pm);
//     });

//     function fitBounds() {
//       const bounds = map.geoObjects.getBounds();
//       if (bounds) {
//         map.setBounds(bounds, { checkZoomRange: true, zoomMargin: 30 });
//       }
//     }
//     fitBounds();

//     // Если используете window.filters.place — можно фильтровать:
//     function applyFilter() {
//       const filterPlace = (window.filters && window.filters.place) || null;
//       placemarks.forEach(pm => {
//         const pmPlace = pm.properties.get('placeName');
//         pm.options.set('visible', !filterPlace || pmPlace === filterPlace);
//       });
//       fitBounds();
//     }
//     // Вызов при открытии модалки
//     applyFilter();

//     // Пересчёт вьюпорта после открытия (на всякий случай)
//     setTimeout(() => map.container.fitToViewport(), 200);
//   });
// }

