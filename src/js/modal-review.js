// модалка у отзывов---------------------------------------------------------------------------

(function() {

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

})();