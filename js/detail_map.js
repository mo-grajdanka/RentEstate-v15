document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const purpose = params.get('purpose') || 'land';
  const id = +params.get('id');
  const item = (dataByPurpose[purpose] || []).find(x => x.id === id);
  
ymaps.ready(function () {
  const mapEl = document.getElementById('detail-map');
  if (!mapEl || !item || !item.coordinates) return;

  const [lat, lng] = item.coordinates;
  const detailMap = new ymaps.Map(mapEl, {
    center: [lat, lng],
    zoom: 16,
    controls: ['zoomControl']
  });

  // Создаём макет с эмодзи
  const emojiLayout = ymaps.templateLayoutFactory.createClass(
    `<div style="font-size:32px; line-height:1; text-align:center;">📍</div>`
  );

  // Добавляем метку с этим макетом
  const placemark = new ymaps.Placemark(
    [lat, lng],
    {
      balloonContent: item.name
    },
    {
      iconLayout: 'default#imageWithContent',
      
      iconImageHref: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
      iconImageSize: [32, 32],
      iconImageOffset: [-16, -32],

      iconContentLayout: emojiLayout,
      iconContentOffset: [0, 0]
    }
  );

  detailMap.geoObjects.add(placemark);
});


});  
