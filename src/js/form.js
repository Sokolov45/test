// форма

(function() {
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
})();
