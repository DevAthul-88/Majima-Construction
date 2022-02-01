const navbar = document.querySelector(".navbar");
const navbarBtn = document.querySelector(".navbar-burger");
const navbarMenu = document.querySelector("#navbarBasicExample");

window.addEventListener("scroll", (e) => {
  if (window.scrollY && window.scrollY > 50) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});

navbarBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
