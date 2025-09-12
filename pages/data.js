const placeDescriptions = {
  'Кушелевская дорога': 'Крупный квартал с развитой инфраструктурой: магазины, кафе и рекреационные зоны.',
  'Лабораторный проспект': 'Тихий проспект в пешей доступности от метро и большого городского парка — идеально для утренних пробежек.',
  'Бестужевская': 'Уютный жилой район с хорошей транспортной доступностью и большим выбором коммерческой недвижимости.',
  'АО «Сестрорецкий инструментальный»': 'Промышленная зона с развитой инженерной инфраструктурой и выходом к Сестрорецкому каналу.',
};



var dataByPurpose = {
  land: [
    {
      id: 1,
      name: "Площадка A",
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
address: "Санкт-Петербург, Кушелевская дорога, 1А", 

  transport: [                                              
    { line: "Лесная", icon: "🚇", time: "16–20 мин" },
    { line: "Площадь Мужества", icon: "🚊", time: "21–30 мин" },
    { line: "Выборгская", icon: "🚇", time: "от 31 мин" }
  ],
ecosystemLogos: [
  { src: "../img/brand1.png", href: "https://brand1.com" },
  { src: "../img/brand1.png", href: "https://brand2.com" },
  { src: "../img/brand1.png", href: "https://brand3.com" },
  { src: "../img/brand1.png", href: "https://brand4.com" }
],
      area: 3000,
      mainSlider: true,
      adSlider: true,
            suitableFor: ["Кафе", "Футбол", "Вет клиника"],
      internalTerritory: [
  "ресторанный дворик с разнообразной кухней",
  "детский картинг и школа безопасности на дороге",
  "крытые игровые и спортивные зоны",
  "центр единоборств и танцевальная студия",
  "уютные зоны отдыха с зелёными насаждениями"
],
      description:
        "Просторный земельный участок в живописном районе Кушелевской дороги, идеально подходит для строительства загородного дома или дачи. Участок ровный, правильной формы, с легким уклоном. Развитая инфраструктура: рядом остановка общественного транспорта, магазины, школа и детский сад.",
            characteristics: [
        {  value: "уже заселены ЖК «Кирилл и Дарья», ЖК «Калейдоскоп», ЖК «Дом на Блюхера», ЖК «БелАрт», ЖК «Калина парк», ЖК «Калина-Парк 2»" },
        {  value: "в 2026 году сдается ЖК Rеsресt" },
        {  value: "более 7 общеобразовательных и частных школ" },
        {  value: "8 детских садов" },
        {  value: "взрослые и детские поликлиники" },
        {  value: "есть проход из жилого квартала" },
        {  value: "более 200 000 человек численность населения" },
        
      ],
      panoramaUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%2C_%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D0%9D%D0%B5%D0%B2%D0%B0_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83_%D0%B2%D0%B5%D1%80%D1%84%D1%8F%D0%BC%D0%B8_%D1%81%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0.jpg",

      technicalCharacteristics: [
        {
          label: "Коммуникации",
          value: "❗️Есть точки подключения электроснабжения, водоснабжения и водоотведения.",
        },
        
      ],
  transportCharacteristics: [
    {  value: "в 1 минуте 4 остановки автобусов и троллейбусов" },
    {  value: "в 5 минутах ж/д станция Кушелевка" },
    {  value: "в 10 минутах м. Лесная" },
    {  value: "в 15 минутах м. Площадь Мужества" },
    {  value: "в 20 минутах центр города" },
    {  value: "более 3 000 м/ч транспортный поток" },
  ],
        images: [
        "https://50.img.avito.st/image/1/1.xaTRFLa5aU3no-tA13Pt7qW1a0tvtetb57hrT2OhbU8.E2Y6tPb0gXT8NIOJkDPJ4pwYTTByJjHAfbyY6tBok1I",
        "https://90.img.avito.st/image/1/1.FRgVLra5ufEjmTv8MwJ_e3GPu_erjzvnI4K786ebvfM.cnPwHM7OnpJATxfrH52vG__h3s-OI2EC4bH3D-nbh5Y",
        "https://90.img.avito.st/image/1/1.TEBU3ba54KliamKkQOh8Hi184q_qfGK_YnHiq-Zo5Ks.wAp4Zovc3KR2D9acs7JHz-jRCj_EkNGWHIlFXuC26c4",
        "https://50.img.avito.st/image/1/1.Av7lWLa5rhfT7ywa7XBMz_n5rBFb-SwB0_SsFVftqhU.fwP5qi9R_TV8bEPnxBszE-26bRstKaMs8QTE9oWbMtQ",
        "https://60.img.avito.st/image/1/1.gmCj77a5LomVWKyEq5nDUb9OLI8dTqyflUMsixFaKos.MDY6AO-GEl24pnPxIYiHfmaZ2W0xdP23YR5WPa36tqg",
      ],
       polygons: [
    {
      name: "Граница участка",
      area: 350000,
      color: "#3b82f6",
      points: [
        { x: '55%', y: '35%' },
        { x: '65%', y: '35%' },
        { x: '68%', y: '45%' },
        { x: '58%', y: '50%' },
        { x: '52%', y: '43%' }
      ]
    }
  ],
  markers: [
    { left: '60%', top: '40%', label: 'Участок A: 30 м²', color: '#ef4444' },
    { left: '30%', top: '60%', label: 'Метро «Лесная»', color: '#10b981' },
    { left: '35%', top: '25%', label: 'Остановка автобуса', color: '#f59e0b' }
  ],
panoHotspots: [
  { yaw: 95,  pitch: -4, title: 'Набережная', text: 'Прогулочная зона, доступ к воде.' },
  { yaw: 60,  pitch: -2, title: 'Мост',       text: 'Транспортная артерия.' },
  { yaw: -15, pitch: -3, title: 'Верфи',      text: 'Промышленная зона, ограниченный доступ.' }
],
panoAreas: [
  {
    yaw: 35, pitch: -6,      // «где» повесить прямоугольник в сцене
    width: 240, height: 150, // размер прямоугольника
    clipPath: 'polygon(10% 15%, 95% 10%, 88% 85%, 14% 90%)', // опционально форма
    title: 'Площадь застройки',
    text: 'Ориентировочно 2 500–3 000 м². Возможна фрагментация.'
  }
]


    },
    {
      id: 2,
      name: "Площадка B",
      place: "Лабораторный проспект",
coordinates: [59.982286, 30.382180],
      area: 80000,
      mainSlider: true,
      images: [
        "https://images.unsplash.com/photo-1637603933595-2233155a67eb?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1451440063999-77a8b2960d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1548941489-3e64750ebbaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbmR8ZW58MHx8MHx8fDA%3D",
      ],
       hoverText: "Земельный участок площадью 80 000 м², расположенный на Лабораторном проспекте. Подходит для различных видов коммерческой застройки. Отличная транспортная доступность и развитая инфраструктура поблизости."
    },
    {
      id: 3,
      name: "Площадка C",
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      area: 65,
      images: [
        "https://images.unsplash.com/photo-1640881100814-453f76b431be?w=400&h=200&fit=crop",
        "https://plus.unsplash.com/premium_photo-1661963324980-5a3a9ca16b4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbmR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1583699998579-5872a2117151?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxhbmR8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: 4,
      name: "Площадка D",
      place: "АО «Сестрорецкий инструментальный»",
coordinates: [60.092746, 29.958752],
      area: 60050,
      mainSlider: true,
      adSlider: true,
      suitableFor: ["Кафе", "Футбол", "Магазин"],
      description:
        "Просторный земельный участок в живописном районе Сестрорецка, идеально подходит для строительства загородного дома или дачи. Участок ровный, правильной формы, с легким уклоном. Развитая инфраструктура: рядом остановка общественного транспорта, магазины, школа и детский сад.",
      characteristics: [
        { label: "Назначение", value: "ИЖС" },
        { label: "Кадастровый номер", value: "78:18:0000000:8888" },
        { label: "Форма участка", value: "Прямоугольная" },
        { label: "Рельеф", value: "Плоский с легким уклоном" },
      ],
      technicalCharacteristics: [
        {
          label: "Коммуникации",
          value: "Электричество (15 кВт), Вода (скважина)",
        },
        { label: "Подъездные пути", value: "Асфальт" },
        { label: "Охрана", value: "Есть (поселковая)" },
        {
          label: "Дополнительно",
          value: "Газ по границе, возможность подключения",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1527506620952-3309b8ed6a1b?w=400&h=200&fit=crop",
        "https://images.unsplash.com/photo-1518655513281-e90740bd56b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661899405263-a0bee333068e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  ],

  office: [
    {
      id: 1,
      name: "Офис A",
      floor: 3,
      area: 80,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Офис B",
      floor: 1,
      area: 120,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 3,
      name: "Офис C",
      floor: 5,
      area: 200,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 4,
      name: "Офис D",
      floor: 7,
      area: 150,
      place: "Лабораторный проспект",
coordinates: [59.982286, 30.382180],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 5,
      name: "Офис E",
      floor: 2,
      area: 100,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      adSlider: true,
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
  ],

  warehouse: [
    {
      id: 1,
      name: "Склад A",
      area: 2000,
      place: "Лабораторный проспект",
coordinates: [59.982286, 30.382180],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Склад B",
      area: 5000,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 3,
      name: "Склад C",
      area: 3000,
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 4,
      name: "Склад D",
      area: 8000,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 5,
      name: "Склад E",
      area: 10000,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=cropПроизводство &q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
  ],

  production: [
    {
      id: 1,
      name: "Произв. A",
      area: 250,
      address: "Санкт-Петербург, Бестужевская ул., 2к4Б", 
  transport: [                                              
    { line: "Площадь Мужества", icon: "🚇", time: "21–30 мин" },
    { line: "Политехническая", icon: "🚊", time: "от 31 мин" },
    { line: "Академическая", icon: "🚇", time: "от 31 мин" }
  ],
  suitableFor: ["Кафе", "Футбол", "Вет клиника"],
    transportCharacteristics: [
    {  value: "5 минут до 2 остановок автобуса" },
    {  value: "10 минут от станции м. Лесная" },
    {  value: "15 минут до КАД" },
    {  value: "20 минут до центра города" },
    {  value: "более 3 000 м/ч транспортный поток" }
  ],
    

  characteristics: [
        {  value: "рядом ЖК «Cinema», ЖК «Кантемировский», ЖК «Суворов», ЖК «Полюстрово Парк»" },
        {  value: "более 100 000 человек численность населения" },
        {  value: "2 000 м/ч транспортный поток" },
        
      ],

  technicalCharacteristics: [
        {
          
          value: "1 этаж",
        },
        {
          
          value: "высота потолков 4-5м",
        },
        {
          
          value: "высокие въездные ворота",
        },
        {
          
          value: "полностью готовы к заезду",
        },
        
      ],

  
    internalTerritory: [
  "на территории работают рестораны и кофейни",
  "есть картинг-центр для взрослых и детей",
  "закрытые спортивные площадки для футбола и баскетбола",
  "фитнес-зал с бассейном",
  "зоны отдыха и прогулочные аллеи"
],
        description:"⚡️ ПOMЕЩEHИЯ В OTДЕЛЬНОСTОЯЩEМ ЗДАНИИ HAПPЯMУЮ ОT COБCTBЕННИKА! Возмoжнa aрeндa пoмещeния от 100 до 400 кв.м.",
      place: "Бестужевская",
coordinates: [59.986111, 30.368838],
      images: [
        "../img/collage_final.jpg",
        "https://00.img.avito.st/image/1/1.azT43ba5x93OakXQosRff4x8xdtGfEXLznHF30pow98.xwLL--AQhFyteFjO3UTo13uxYYBlP-0BKjulVYLRWkY?cqp=2.u3NCSNufGJscbkbcTnB31iWF9mNdkZV17CfHaAg72eFO7oRH9LnvmRn80XUuwm6DChCt8IaEfKU2EJELfVQEoXVU2aPjLQ==",
        "https://90.img.avito.st/image/1/1.cEnqJLa53KDck16thjlcBcOF3qZUhV623IjeoliR2KI.CTlUhQXZ0xZUlyZ-FiDr4ervUMt2l43cZXz4ZDXoDio",
        "https://90.img.avito.st/image/1/1.jmERyLa5Iognf6CFAYK8fRZpII6vaaCeJ2QgiqN9Joo.G1ECs2X3i0bEa-ULdTk7eHJoXmam2HYY1Xh9ESWjHLA",
        "https://20.img.avito.st/image/1/1.OlK4xba5lruOchS2wIlaT79klL0GZBStjmmUuQpwkrk.4H8kG0NSxaWWNRgdHzYKU40OUXZgGqRHP2n3-TOBWMA?cqp=2.u3NCSNufGJscbkbcTnB31iWF9mNdkZV17CfHaAg72eFO7oRH9LnvmRn80XUuwm6DChCt8IaEfKU2EJELfVQEoXVU2aPjLQ==",
        "https://10.img.avito.st/image/1/1.WoF8ura59mhKDXRlROtYz2Qb9G7CG3R-Shb0as4P8mo.hBtJFHLJ_rGrh4up0AGIt5tR8OJDGKFNAgUWxbRE6jM?cqp=2.u3NCSNufGJscbkbcTnB31iWF9mNdkZV17CfHaAg72eFO7oRH9LnvmRn80XUuwm6DChCt8IaEfKU2EJELfVQEoXVU2aPjLQ==",
      ],
    },
    {
      id: 2,
      name: "Произв. B",
      area: 450,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 3,
      name: "Произв. C",
      area: 600,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 4,
      name: "Произв. D",
      area: 800,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 5,
      name: "Произв. E",
      area: 1000,
      place: "АО «Сестрорецкий инструментальный»",
coordinates: [60.092746, 29.958752],
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
  ],

  retail: [
    {
      id: 1,
      name: "Торг. площадь A",
      area: 50,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      adSlider: true,
      
      images: [
        "https://images.unsplash.com/photo-1526152505827-d2f3b5b4a52a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1511317559916-56d5ddb62563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/36/yJl7OB3sSpOdEIpHhZhd_DSC_1929_1.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0YWlsfGVufDB8fDB8fHww",
      ],
    },
    {
      id: 2,
      name: "Торг. площадь B",
      area: 75,
      place: "АО «Сестрорецкий инструментальный»",
coordinates: [60.092746, 29.958752],
      images: [
        "https://plus.unsplash.com/premium_photo-1683133261283-78fe47339160?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmV0YWlsfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmV0YWlsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 3,
      name: "Торг. площадь C",
      area: 100,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 4,
      name: "Торг. площадь D",
      area: 150,
      place: "Бестужевская",
coordinates: [59.990552, 30.383626],
      images: [
        "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1661661903883-6d0d444ace70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1518797814703-ed31ee241ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
    {
      id: 5,
      name: "Торг. площадь E",
      area: 200,
      place: "Кушелевская дорога",
coordinates: [59.986111, 30.368838],
      images: [
        "https://images.unsplash.com/photo-1584194655379-ff80a8fec339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1700824490100-f82146b2441f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1555529771-122e5d9f2341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHJldGFpbHxlbnwwfHwwfHx8MA%3D%3D",
      ],
    },
  ],
};
