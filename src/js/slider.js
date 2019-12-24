// ==========================слайдер =======================================================

;(function() {


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


var nextBurger = document.getElementById('nextBurger');
var prevBurger = document.getElementById('prevBurger');
nextBurger.addEventListener('click', function(e){
  e.preventDefault();
  nextSlide();
});
prevBurger.addEventListener('click', function(e){
  e.preventDefault();
  prevSlide();
});

})();