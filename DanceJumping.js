// ---------------------------for header---------------------------------

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// -----------------------------for window scroLL- you can grap and move window content with mouse click----------------------------------

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// ---------------------------for home section--------------------------------

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

// -------------------------------for feature section----------------------------------

var swiper = new Swiper(".feature-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    1040: {
      slidesPerView: 2,
    },

    1345: {
      slidesPerView: 3,
    },
  },
});

// ---(1040--911--pixel size for responsive page - old)----------------------for blog section----------------------------------

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    1040: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },
});

// ----------------------------------------------------------for trainer section (Veronika Zilkova)-----------------------------------------------

// var swiper = new Swiper(".trainer-slider", {
//   spaceBetween: 20,
//   grabCursor: true,
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 9500,
//     disableOnInteraction: false,
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },

//     1040: {
//       slidesPerView: 2,
//     },

//     991: {
//       slidesPerView: 3,
//     },
//   },
// });

// komentovane pretoze I did not want to use this swapier slide effect for Veronikas profil
