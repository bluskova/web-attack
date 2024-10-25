const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav li a");

// function which replace the hamburger and cross icon
const replaceClass = (element, oldClass, newClass) => {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
};

// function which open navigation
const openNav = () => {
  navigation.style.display = "block";
  replaceClass(menuIcon, "fa-bars", "fa-xmark");
  hiddenNav = false;
};

// function which close navigation
const closeNav = () => {
  navigation.style.display = "none";
  replaceClass(menuIcon, "fa-xmark", "fa-bars");
  hiddenNav = true;
};

// open and close navigation
let hiddenNav = true;
menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    openNav();
  } else {
    closeNav();
  }
});

// close the navigation after click anywhere (include 'navLinks', exclude 'menuIcon')
document.body.addEventListener("click", (event) => {
  if (!hiddenNav && event.target.id !== "menu-icon") {
    closeNav();
  }
});

// active navbar links on scroll
addEventListener("scroll", () => {
  sections.forEach((oneSection, index) => {
    const top = window.scrollY;
    const offset = oneSection.offsetTop - 150;
    const height = oneSection.offsetHeight;
    const id = oneSection.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((oneLink) => {
        oneLink.classList.remove("active");
        if (oneLink.getAttribute("href") === `#${id}`) {
          oneLink.classList.add("active");
        }
      });
    }
  });
});
