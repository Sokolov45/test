(function() {

var fullMenuLink = document.getElementsByClassName('full-menu-link');
var hamburgerMenu = document.getElementById('hamburger-menu');

for (let index = 0; index < fullMenuLink.length; index++) {

    fullMenuLink[index].addEventListener('click', () => {
        hamburgerMenu.style.top = 100 +'rem';
    })
    
}

})();