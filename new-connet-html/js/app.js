var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:"true",
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
//   document.querySelector(".popup .closed-btn").addEventListener('click',()=>{
//     document.querySelector('.popup').classList.remove('active')
//   })
//   setTimeout(()=>{
//     document.querySelector('.popup').classList.add('active')
//   },5000)
