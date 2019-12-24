// ==========================слайдер =======================================================

var slides = document.getElementsByClassName("slide");
var currentSlide = 0;
function show(currentSlide) {
  for (var i=0; i < slides.length; i++){
    slides[i].className = 'slide';
  }
  slides[currentSlide].className = 'slide visible';
};

function nextSlide() {
  if (currentSlide == 4) {
    currentSlide = 0;
    show(currentSlide);
    return currentSlide;
  } else{
    ++currentSlide;
    show(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
    show(currentSlide);
    return currentSlide;
  }else{
    --currentSlide;
    show(currentSlide);
  }
}

show(currentSlide);


var t = document.getElementById('test');
t.addEventListener('click', function(e){
  e.preventDefault();
  nextSlide();
});


// аккордеон для меню-----------------------------------------------------------

var listMenu = document.getElementsByClassName("menu__item");
for (var i = 0; i < listMenu.length; i++) {
  listMenu[i].addEventListener("click", function(){
    for (var i=0; i < 3; i++){
      if(this.classList.contains('menu__item--active') ) {
        continue}else{
          listMenu[i].classList.remove("menu__item--active");
        };
    };
    this.classList.toggle("menu__item--active");
});
} ;

var sectionMenu = document.querySelector('.menu');
var titleMenu = document.querySelector('.title--menu');
sectionMenu.addEventListener("click", function(e) {
  if (e.target === sectionMenu || e.target === titleMenu) {
  for (var i = 0; i < listMenu.length; i++) {
    listMenu[i].classList.remove("menu__item--active");
    };
  };
});


// аккордеон для команды ----------------------------------------------------

var listTeam = document.getElementsByClassName("team-description__item");
for (var i = 0; i < listTeam.length; i++) {
  listTeam[i].addEventListener("click", function() {
    for (var i=0; i < 4; i++){
      if(this.classList.contains('team-description__item--active') ) {
        continue}else{
          listTeam[i].classList.remove("team-description__item--active");
        };
    };
    this.classList.toggle("team-description__item--active");
  });
};

  var team = document.querySelector('.team');
  var teamList = document.querySelector('.team-description__list');
  var teamDescript = document.querySelector('.team-description');
  team.addEventListener("click", function(e) {
    if (e.target === team || e.target === teamDescript) {
      for (var i = 0; i < listTeam.length; i++) {
        listTeam[i].classList.remove("team-description__item--active");
          };
    };
  });

// всплывашка состав бургера ----------------------------------------------------

var iconBurg = document.getElementById('icon-burger');
var compBurg = document.getElementById('composition');
iconBurg.addEventListener("click", function(){
    compBurg.classList.toggle("composition--visible");
});

// гамбургер------------------------------------------------------------

var hamburger = document.getElementById('hamburger');
var sectMenu = document.getElementById('hamburger-menu');
var hamburgerOpen = document.getElementById('hamburger-open');
var html = document.querySelector('html');

hamburger.addEventListener("click", function(){
    sectMenu.style.top = 0;
    html.style.overflowY = 'hidden';
});
hamburgerOpen.addEventListener("click", function(){
    sectMenu.style.top = 100 + 'rem';
    html.style.overflowY = 'auto';
});


// форма
var myForm = document.querySelector('#myForm');
var laodButton = document.querySelector('#loadButton');
var overlayElement = document.querySelector(".overlay");
var orerlayMessage = document.querySelector('.overlay__content');
var closeElement = overlayElement.querySelector(".close");

closeElement.addEventListener("click", function(e) {
  e.preventDefault();
  overlayElement.style.display = "none";
});

// эта штука для того чтобы не закрывалось когда на контент кликаешь
overlayElement.addEventListener("click", function(e) {
  if (e.target === overlayElement) {
    closeElement.click();
  }
});

myForm.addEventListener('submit', event => {
  event.preventDefault();
  var formData = new FormData(myForm);
  // formData.append("name", myForm.elements.name.value);
  // formData.append("phone", myForm.elements.phone.value);
  // formData.append("comment", myForm.elements.comment.value);
  formData.append("to", 'mail@mail.com');
  
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData); 
  
  xhr.addEventListener('load', () => {
    if(xhr.status){
      overlayElement.style.display = "flex";

      console.log(xhr.status);
      console.log(typeof xhr.response );
      orerlayMessage.innerHTML = xhr.response.message;
    }else{
      alert( xhr.status + ': ' + xhr.statusText )
    }
  });
  });


  // модалка у отзывов---------------------------------------------------------------------------
  var modalReviewBtn = document.querySelectorAll(".review__btn");
  var modalReviewDiv = document.querySelector(".reviews__modal");
  var modalReviewBtn480 = document.querySelectorAll(".review__btn-480");
  for (let i = 0; i < modalReviewBtn.length; i++) {
        
    modalReviewBtn[i].addEventListener("click", function(e) {
      e.preventDefault();
      modalReviewDiv.style.display = "flex";
      var closeReview = document.querySelector(".revies-close");
      closeReview.addEventListener("click", function(e) {
        e.preventDefault();
        modalReviewDiv.style.display = "none";
    });
    modalReviewDiv.addEventListener("click", function(e) {
        if (e.target === modalReviewDiv) {
          closeElement.click();
        }
      });
  });

  modalReviewBtn480[i].addEventListener("click", function(e) {
    e.preventDefault();
    modalReviewDiv.style.display = "flex";
    var closeReview = document.querySelector(".revies-close");
    closeReview.addEventListener("click", function(e) {
      e.preventDefault();
      modalReviewDiv.style.display = "none";
  });
  modalReviewDiv.addEventListener("click", function(e) {
      if (e.target === modalReviewDiv) {
        closeElement.click();
      }
    });
});

};

// яндекс карты--------------------------------------------------------------------------
//  var myMap;
//   ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
//   function init () {
//     myMap = new ymaps.Map("map", {
//       center: [55.76, 37.64], // Координаты центра карты
//       zoom: 10 // Zoom
//     });
//   }





  ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
  var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
  function init () { // функция - собиралка карты и фигни
      myMap = new ymaps.Map("map", { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
              center: [59.90999, 30.358478], // ну тут центр
              behaviors: ['default', 'scrollZoom'], // скроллинг колесом
              zoom: 12, // тут масштаб
              controls: []
          });
      myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
      // .add('zoomControl', { left: 5, top: 5 }) //Масштаб
      // .add('typeSelector') //Список типов карты
      // .add('mapTools', { left: 35, top: 5 }) // Стандартный набор кнопок
      // .add('searchControl'); // Строка с поиском
    /* Создаем кастомные метки */
    var myPlacemark0 = new ymaps.Placemark([59.90999, 30.358478], { // Создаем метку с такими координатами и суем в переменную
            // balloonContent: '<div class="ballon"><img src="img/hh.jpg" class="ll"/><span>Заголовок метки 1</span><br/><p>Немного инфы о том, о сем. Лорем ипсум чото там.</p><img class="close" onclick="myMap.balloon.close()" src="img/close.png"/></div>' // сдесь содержимое балуна в формате html, все стили в css
          }, {
          iconLayout: 'default#image',
          iconImageHref: './icons/map-marker.svg', // картинка иконки
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
      iconImageHref: '../icons/map-marker.svg', // картинка иконки
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
  iconImageHref: './icons/map-marker.svg', // картинка иконки
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
iconImageHref: './icons/map-marker.svg', // картинка иконки
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
// ymaps.ready(init);
// one page scroll--------------------------------------------------------------











// плеер------------------------------------------------------------------------
$(document).ready(function(){
  
  let interval;
  video = document.querySelector(".video-target"); 
  video.addEventListener('click', clickPlayButton);
  
  bigVideoButton = document.querySelector(".video__player-btn");
  smallVideoButton = document.querySelector(".video__playpause-btn");
  bigVideoButton.addEventListener('click', clickPlayButton);
  smallVideoButton.addEventListener('click', clickPlayButton);
  
  progressBar = document.querySelector(".video__progress-bar");
  progressCurrent = progressBar.querySelector(".video__progress-current");

  video.addEventListener('timeupdate', updateProgressBar, false);
  progressBar.addEventListener('click', setCurrentTime);

  volumeButton = document.querySelector(".video__volume-btn");
  volumeButton.addEventListener('click', clickOnVolumeBtn);
  
  volumeBar = document.querySelector(".video__volume-bar");
  volumeCurrent = document.querySelector(".video__volume-current");
  video.addEventListener('volumechange', updateVolumeControls);
  volumeBar.addEventListener('click', setCurrentVolume);
  

  function clickPlayButton(){
    $(".video__player-btn").toggleClass("video__player-btn--active");
    
    video.muted = false;
    volumeCurrent.style.width = `100%`;

    if(video.paused){

      video.play();
      interval = setInterval(() => {
          const percents = video.currentTime / video.duration * 100;
          changeBarPosition(percents);
      }, 1000);

    } else {
      video.pause();
      clearInterval(interval);
    }
  }

  function changeBarPosition(percents) {
    progressBar = document.querySelector(".video__progress-current");
    progressBar.style.width = `${percents}%`;
  }

  function updateProgressBar() {
    let progress = Math.floor(video.currentTime / video.duration * 100);
    progressCurrent.style.width = `${progress}%`;
  }

  function setCurrentTime(evt) {
      let offset = evt.layerX / evt.currentTarget.offsetWidth;
      video.currentTime = Math.floor(offset * video.duration);
  }

  function clickOnVolumeBtn(){
    if(!video.muted){
      video.volume = 0;
      volumeButton.classList.add("video__volume-btn--muted");
      video.muted = true;
      volumeCurrent.style.width = `0%`;
    } else {
      video.volume = 1;
      volumeButton.classList.remove("video__volume-btn--muted");
      video.muted = false;
      volumeCurrent.style.width = `100%`;
    }
  }

  function updateVolumeControls() {
    let progress = Math.floor(video.volume * 100);
    volumeCurrent.style.width = `${progress}%`;
  }

  function setCurrentVolume(evt) {
    let offset = evt.layerX / evt.currentTarget.offsetWidth;
    video.volume = Math.round(offset * 10) / 10;
    video.muted = false;
  }

});

