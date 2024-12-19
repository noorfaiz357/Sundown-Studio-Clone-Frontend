// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

function pageAnimation() {
  let fixed = document.querySelector("#fixed-image");
  let elemContainer = document.querySelector("#elem-container");
  let elems = document.querySelectorAll(".elem");
  3;
  elemContainer.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
    fixed.addEventListener("mouseenter", () => {
      fixed.style.display = "block";
    });
  });
  elemContainer.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
  });

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      let img = elem.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${img})`;
      fixed.style.display = "block";
    });
  });
}

function swiperAnimation() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 50,
  });
}

function menuAnimation(){
    let line1 = document.querySelector(".line-1");
let line2 = document.querySelector(".line-2");
let full = document.querySelector("#full-scr");

let menu = document.querySelector(".menu");
let flag = 0;
menu.addEventListener("click", (e) => {
  if (flag == 0) {
    full.style.top = 0;
    document.querySelector("nav img").style.opacity = 0
    line1.style.transform = "rotate(45deg)";
    line1.style.marginBlock = "-2px";
    line2.style.transform = "rotate(135deg)";
    line2.style.marginBlock = "-2px";
    flag = 1;
  } else if (flag == 1) {
    document.querySelector("nav img").style.opacity = 1
    full.style.top = "-100%"
    line1.style.transform = "rotate(0deg)";
    line1.style.marginBlock = "4px";
    line2.style.transform = "rotate(0deg)";
    line2.style.marginBlock = "4px";
    flag = 0;
  }
});
}

function loader(){
    let loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"
},5500)
}

pageAnimation();
swiperAnimation();
menuAnimation()
loader()

