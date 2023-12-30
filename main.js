import "./style.css";

// DOM elements
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const navCategory = document.querySelectorAll(".nav-category");
const navLinks = document.querySelector(".nav-links");

// functions
function init() {
  hamburgerIcon.classList.add("block");
  closeIcon.classList.add("hidden");
}

function openMenu() {
  hamburgerIcon.classList.replace("block", "hidden");
  closeIcon.classList.replace("hidden", "block");
  navLinks.classList.replace("hidden", "block");
}

function closeMenu() {
  hamburgerIcon.classList.replace("hidden", "block");
  closeIcon.classList.replace("block", "hidden");
  navLinks.classList.replace("block", "hidden");
}

// event listeners
hamburgerIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);

navCategory.forEach((category) => {
  category.addEventListener("click", (event) => {
    let clickedCategory = event.target;
    if (
      clickedCategory.text === "Product" ||
      clickedCategory.text === "Company" ||
      clickedCategory.text === "Connect"
    ) {
      clickedCategory.classList.toggle("text-slate-500");
      clickedCategory.classList.toggle("lg:text-white");
      let chosenNavList = document.querySelector(
        `.${clickedCategory.text.toLowerCase()}`,
      );
      chosenNavList.classList.toggle("grid");
      chosenNavList.classList.toggle("hidden");
      clickedCategory.classList.toggle("after:translate-y-0.5");
      clickedCategory.classList.toggle("after:rotate-180");
    }
  });
});

// init
init();
