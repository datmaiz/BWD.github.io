window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 0) {
        document.querySelector('header').classList.add('fixed-header');
    } else {
        document.querySelector('header').classList.remove('fixed-header');
    }
});

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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 9000, 
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20, 
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30, 
    },
  },
});