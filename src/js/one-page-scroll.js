// one page scroll--------------------------------------------------------------
function ready() {
  $('#fullpage').fullpage({
    menu: '#menu',
  });
};

document.addEventListener("DOMContentLoaded", ready);



// (function() {


// const sections = $('.section');
// const display = $('.maincontent');
// let inScroll = false;

// const performTransition = sectionEq => {
//   if(inScroll === false) {
//     inScroll = true;
//     const position = sectionEq * -100;
//     // eq - метод в jquery
//     sections
//     .eq(sectionEq)
//     .addClass('active')
//     .siblings()
//     .removeClass('active');
    
//     display.css({
//       //тут ковычка вот нихуя не одинарная ---- внимание!!!!!!!!!!
//     transform: `translateY(${position}%)`
//     });

//     setTimeout(() => {
//       inScroll = false;
//     }, 800);

//     $('.dotnav__item')
//     .eq(sectionEq)
//     .addClass('dotnav__item--active')
//     .siblings()
//     .removeClass('dotnav__item--active');

//   }
// };

// const scrollToSection = direction => {
//   const activeSection = sections.filter('.active');
//   const nextSection = activeSection.next();
//   const prevSection = activeSection.prev();

//   if (direction === "next" && nextSection.length) {
//     performTransition(nextSection.index());
//   }
//   if (direction === "prev" && prevSection.length) {
//     performTransition(prevSection.index());
//   }

// }

// $(window).on("wheel", e => {
//   const deltaY = e.originalEvent.deltaY;
//   console.log("wheel");
//   if (deltaY > 0) {
//     // console.log('prev');
//     scrollToSection('next');
//   }
//   if (deltaY < 0) {
//     scrollToSection('prev');
//   }
// });

// $(window).on("keydown", e => {
//   const tagName = e.target.tagName.toLowerCase();
  
//   if(tagName !== 'input' && tagName !== 'textarea'){
//     switch(e.keyCode) {
//       case 38:
//         scrollToSection('prev');
//         break;
//       case 40:
//         scrollToSection('next');
//         break;
//     }
//   }
// });


// $("[data-scroll-to]").on('click', e => {
//   e.preventDefault();
//   const $this = $(e.currentTarget);
//   const target = $this.attr("data-scroll-to");

//   performTransition(target);
// });

// const mobileDetect = new MobileDetect(window.navigator.userAgent);
// const isMobile = mobileDetect.mobile();


// if (isMobile) {
//   window.addEventListener(
//     "touchmove",
//     e => {
//       e.preventDefault();
//     },
//     { passive: false }
//   );

//   $("body").swipe({
//     swipe: (event, direction) => {
//       let scrollDirecrion;
//       if (direction === "up") scrollDirecrion = "next";
//       if (direction === "down") scrollDirecrion = "prev";
//       scrollViewport(scrollDirecrion);
//     }
//   });
// }

// })();