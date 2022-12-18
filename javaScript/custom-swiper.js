
// swiper
// 顧客評價
const swiperFeedback = new Swiper(".swiper-feedback", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grid: {
    rows: 1,
    fill: 'row',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,

    },
    768: {
      slidesPerView: 2,

    },
  }
});


// 推薦課程
const swiperRecommend = new Swiper(".swiper-recommend-course", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grid: {
    rows: 1,
    fill: 'row',
  },
  breakpoints: {
    992: {
      slidesPerView: 4,

    },
    768: {
      slidesPerView: 2,

    },
  }
});
