const priceButton = document.querySelector("#price-button");
const priceSlider = document.querySelector(
  ".price-range-slider input[type=range]"
);
const priceOutput = document.querySelector("#price-output");

priceButton.addEventListener("click", () => {
  const priceRangeSlider = document.querySelector(".price-range-slider");
  if (priceRangeSlider.style.display === "none") {
    priceRangeSlider.style.display = "block";
  } else {
    priceRangeSlider.style.display = "none";
  }
});

priceSlider &&
  priceSlider.addEventListener("input", () => {
    priceOutput.innerHTML = priceSlider.value;
  });

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
 
  if (window.scrollY > 0) {
    const modal = document.querySelector(".modal");
   

    if(modal.classList.contains('active')) {
      return;
    }

    navbar.style.position = 'fixed';

    navbar.classList.add("scrolled");
    navbar.classList.remove("no-scroll");
  } else {
    navbar.classList.add("no-scroll");
    navbar.classList.remove("scrolled");
  }
});

const links = document.querySelectorAll(".wd-nav-link span");

links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove "active" class from all links
    links.forEach((l) => {
      l.classList.remove("active");
    });

    // Add "active" class to clicked link
    link.classList.add("active");
  });
});

// responsive
const navButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".header-top");

navButton.addEventListener("click", function () {
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "false" ? "true" : "false"
  );
  navMenu.classList.toggle("active");
});

const iconBar = document.querySelector(".icon-bar");
const modal = document.querySelector(".modal");

iconBar.addEventListener("click", function () {
  if (modal) {
    modal.style.display = "none";
    modal.classList.toggle('active');
    navbar.classList.toggle("no-scroll");
    navbar.classList.toggle("scrolled");
    navbar.style.position = 'unset';
  }
});

const navLinks = document.querySelectorAll(".nav.nav-mobile li");

if (navLinks.length > 0) {
  navLinks.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      if (modal) {
        modal.style.display = "none";
      }
    });
  });
}

const btnPrice = document.querySelector(".price--select");
const btnDropDownPrice = document.querySelector(".price--select__dropdown");

if (btnPrice) {
  btnPrice.addEventListener("click", (ev) => {
    btnDropDownPrice.classList.toggle("active");
  });
}

const priceInput = document.querySelector("input[type='range']");

if (priceInput) {
  priceInput.addEventListener("change", (ev) => {
    console.log(ev.target.value);

    const textPrice = document.querySelector(".price--select__dropdown-show p");
    textPrice.textContent = `$${ev.target.value}`;
  });
}

let menuButton = document.getElementById('menu-toggle-button');
menuButton.addEventListener('click', () => {
  console.log('click');
})