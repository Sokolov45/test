// яндекс карты--------------------------------------------------------------------------


(function() {


  ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
  var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
  function init () { // функция - собиралка карты и фигни
      myMap = new ymaps.Map("map", { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
              center: [59.90999, 30.358478], // ну тут центр
              behaviors: ['default', 'scrollZoom'], // скроллинг колесом
              zoom: 12, // тут масштаб
              controls: []
          });
      // myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
      // .add('zoomControl', { left: 5, top: 5 }) //Масштаб
      // .add('typeSelector') //Список типов карты
      // .add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
      // .add('searchControl'); // Строка с поиском
      myMap.behaviors.disable('scrollZoom'); 
    /* Создаем кастомные метки */
    var myPlacemark0 = new ymaps.Placemark([59.90999, 30.358478], { // Создаем метку с такими координатами и суем в переменную
            // balloonContent: '<div class="ballon"><img src="img/hh.jpg" class="ll"/><span>Заголовок метки 1</span><br/><p>Немного инфы о том, о сем. Лорем ипсум чото там.</p><img class="close" onclick="myMap.balloon.close()" src="img/close.png"/></div>' // сдесь содержимое балуна в формате html, все стили в css
          }, {
          iconLayout: 'default#image',
          iconImageHref: 'images/icons/map-marker.svg', // картинка иконки
          iconImageSize: [40, 40], // размер иконки
          iconImageOffset: [-32, -64], // позиция иконки
            balloonContentSize: [270, 99],
            layout: 'default#image' // размер нашего кастомного балуна в пикселях
          //   balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
          //  // balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
          //   balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
          //   balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
          //   balloonShadow: false,
          //   balloonAutoPan: false // для фикса кривого выравнивания
            });
        /* тоже самое для других меток */
    /* Добавляем */
    myMap.geoObjects
      .add(myPlacemark0);


      // 2 метка--------------------------------------------------------------------------------------------------------------------
      myPlacemark1 = new ymaps.Placemark([59.88999, 30.358478], { // Создаем метку с такими координатами и суем в переменную
        balloonContent: '<div class="ballon"><img src="img/hh.jpg" class="ll"/><span>Заголовок метки 1</span><br/><p>Немного инфы о том, о сем. Лорем ипсум чото там.</p><img class="close" onclick="myMap.balloon.close()" src="img/close.png"/></div>' // сдесь содержимое балуна в формате html, все стили в css
      }, {
        iconLayout: 'default#image',
      iconImageHref: 'images/icons/map-marker.svg', // картинка иконки
      iconImageSize: [40, 40], // размер иконки
      iconImageOffset: [-32, -64], // позиция иконки
        balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
      //   balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
      //  // balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
      //   balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
      //   balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
      //   balloonShadow: false,
      //   balloonAutoPan: false // для фикса кривого выравнивания
        });
    /* тоже самое для других меток */
/* Добавляем */
myMap.geoObjects
  .add(myPlacemark1);


  // 3 метка------------------------------------------------------------------------------------------------
  myPlacemark2 = new ymaps.Placemark([59.950000, 30.241119], { // Создаем метку с такими координатами и суем в переменную
    balloonContent: '<div class="ballon"><img src="img/hh.jpg" class="ll"/><span>Заголовок метки 1</span><br/><p>Немного инфы о том, о сем. Лорем ипсум чото там.</p><img class="close" onclick="myMap.balloon.close()" src="img/close.png"/></div>' // сдесь содержимое балуна в формате html, все стили в css
  }, {
    iconLayout: 'default#image',
  iconImageHref: 'images/icons/map-marker.svg', // картинка иконки
  iconImageSize: [40, 40], // размер иконки
  iconImageOffset: [-32, -64], // позиция иконки
    balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
    balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
   // balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
    balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
    balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
    balloonShadow: false,
    balloonAutoPan: false // для фикса кривого выравнивания
    });
/* тоже самое для других меток */
/* Добавляем */
myMap.geoObjects
.add(myPlacemark2);


// 4 метка ------------------------------------------------------------------------------------------------------------
myPlacemark3 = new ymaps.Placemark([59.951100, 30.311119], { // Создаем метку с такими координатами и суем в переменную
  balloonContent: '<div class="ballon"><img src="img/hh.jpg" class="ll"/><span>Заголовок метки 1</span><br/><p>Немного инфы о том, о сем. Лорем ипсум чото там.</p><img class="close" onclick="myMap.balloon.close()" src="img/close.png"/></div>' // сдесь содержимое балуна в формате html, все стили в css
}, {
  iconLayout: 'default#image',
iconImageHref: 'images/icons/map-marker.svg', // картинка иконки
iconImageSize: [40, 40], // размер иконки
iconImageOffset: [-32, -64], // позиция иконки
  balloonContentSize: [270, 99], // размер нашего кастомного балуна в пикселях
  balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
 // balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
  balloonImageOffset: [-65, -89], // смещание балуна, надо подогнать под стрелочку
  balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
  balloonShadow: false,
  balloonAutoPan: false // для фикса кривого выравнивания
  });
/* тоже самое для других меток */
/* Добавляем */
myMap.geoObjects
.add(myPlacemark3);


    /* Фикс кривого выравнивания кастомных балунов */
myMap.geoObjects.events.add([
      'balloonopen'
  ], function (e) {
      var geoObject = e.get('target');
      myMap.panTo(geoObject.geometry.getCoordinates(), {
                                  delay: 0
                              });
  });
}






})();