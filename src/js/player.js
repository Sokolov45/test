// / плеер------------------------------------------------------------------------
;(function() {

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
  
  pause = document.querySelector(".video__icon-pause");
  panelPlay = document.querySelector(".video__playpause-btn");
  

  function clickPlayButton(){
    $(".video__player-btn").toggleClass("video__player-btn--active");
    $(".video__icon--on").toggleClass("video__player-btn--active");
    $(".video__icon-pause").toggleClass("video__icon-pause--active");
    
    video.muted = false;
    volumeCurrent.style.width = `100%`;

    if(video.paused){
      // alert('werw');
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

})();