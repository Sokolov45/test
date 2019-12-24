
// аккордеон для меню-----------------------------------------------------------
(function() {
  
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


})();