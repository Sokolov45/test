// гамбургер------------------------------------------------------------

(function() {

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

})();