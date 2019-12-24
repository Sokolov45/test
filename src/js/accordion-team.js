

// аккордеон для команды ----------------------------------------------------
(function() {
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


})();