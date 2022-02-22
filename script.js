const button = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const patties = document.querySelector(".patties");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");

const options = {
  threshold: 0,
  rootMargin: "-20px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return button.classList.add("newHamburgerColor");
    return button.classList.remove("newHamburgerColor");
  });
}, options);

const sectionOne = document.querySelector(".section1");
observer.observe(sectionOne);
const footerOne = document.querySelector(".footer1");
observer.observe(footerOne);

button.addEventListener("click", () => {
  header.classList.toggle("filter");
  patties.classList.toggle("xburger");
  nav.classList.toggle("nav-open");
  ul.classList.toggle("nav-open");
});
