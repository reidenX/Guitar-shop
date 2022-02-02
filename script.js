const button = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const patties = document.querySelector(".patties");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

const options = {
  threshold: 0,
  rootMargin: "-100px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      button.classList.add("newHamburgerColor");
    } else {
      button.classList.remove("newHamburgerColor");
    }
  });
}, options);

const sectionOne = document.querySelector(".section1");
observer.observe(sectionOne);

button.addEventListener("click", () => {
  header.classList.toggle("filter");
  patties.classList.toggle("xburger");
  nav.classList.toggle("nav-open");
  ul.classList.toggle("nav-open");
});
