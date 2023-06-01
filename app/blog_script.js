let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar-after');

menu.onclick = () =>{
  navbar.classList.toggle('open');
  if (navbar.classList.contains('open')) {
    document.body.style.backgroundColor = 'gray';
  } else {
    document.body.style.backgroundColor = ''; 
  }
};


window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 0) {
        document.querySelector('header').classList.add('fixed-header');
    } else {
        document.querySelector('header').classList.remove('fixed-header');
    }
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });