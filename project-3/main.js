

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line")
})


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header__image img",{
    ...scrollRevealOption,
    origin: "right"
})
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header__content p",{
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".header__image__content p",{
    duration: 1000,
    delay: 1500,
})

// ScrollReveal().reveal(".header__container p",{
//     ...scrollRevealOption,
//     delay: 800,
// })


ScrollReveal().reveal(".product__image img",{
    ...scrollRevealOption,
    origin: "left"
})

ScrollReveal().reveal(".product__card",{
    ...scrollRevealOption,
    delay:500,
    interval: 500
})

// const swiper = new Swiper(".swiper",{
//     loop: true,
//     effect:"coverfloe",
//     grabCursor:true,
//     centerSlides:true,
//     slidePerview: "auto",
//     coverflowEffect: {
//         rotate:0,
//         depth:250,
//         modifier:1,
//         scale:0.75,
//         slideShadows:false,
//         stretch:-100,
//     },

//     pagination:{
//         el:".swiper-pagination",
//     },
// });
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centerSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 250,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },
  
    pagination: {
      el: ".swiper-pagination",
    },
  });