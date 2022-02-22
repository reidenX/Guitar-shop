const button = document.querySelector(".hamburger");
const filter = document.querySelector(".filter");
const filterHide = document.querySelector(".filterHide");
const patties = document.querySelector(".patties");
const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const sectionOne = document.querySelector(".section1");
const footerOne = document.querySelector(".footer1");

const options = {
  threshold: 0,
  rootMargin: "-20px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting)
      return button.classList.remove("newHamburgerColor");
    return button.classList.add("newHamburgerColor");
  });
}, options);

observer.observe(footerOne);
observer.observe(sectionOne);

button.addEventListener("click", () => {
  filter.classList.toggle("filterHide");
  patties.classList.toggle("xburger");
  nav.classList.toggle("nav-open");
  ul.classList.toggle("nav-open");
});
