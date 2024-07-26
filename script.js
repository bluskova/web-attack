/////////////////////////// select from html /////////////////////////////////
// navigation
const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav li a");
// hero images
const heroSection = document.querySelector(".hero-section");
const dots = document.querySelectorAll(".dot");
// popup gallery
const allImages = document.querySelectorAll(".image-container img");
const popupImage = document.querySelector(".popup-image");
const popupImageImg = document.querySelector(".popup-image img");
const popupImageClose = document.querySelector(".popup-image .close");
const popupImageLeft = document.querySelector(".popup-image .left");
const popupImageRight = document.querySelector(".popup-image .right");
// footer
const footerCopyright = document.querySelector(".copyright");

/////////////////////////// navigation /////////////////////////////////

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

/////////////////////////// hero images /////////////////////////////////

const heroImageSources = [
  "./img/hero-img/peter-glaser-UVWULib2OHM-unsplash.jpg",
  "./img/hero-img/chaos-soccer-gear-Cjfl8r_eYxY-unsplash.jpg",
  "./img/hero-img/vikram-tkv-JO19K0HDDXI-unsplash.jpg",
];

// change hero image
let heroImageIndex = 0;
const changePhotos = () => {
  dots[heroImageIndex].classList.remove("active");
  heroImageIndex = (heroImageIndex + 1) % heroImageSources.length;
  dots[heroImageIndex].classList.add("active");
  heroSection.style.backgroundImage = `url(${heroImageSources[heroImageIndex]})`;
};

// call function 'changePhotos' at specified intervals - 5 sec
const timerID = setInterval(changePhotos, 5000);

/////////////////////////// popup gallery /////////////////////////////////

// number of all images in the gallery
const numberOfAllImages = allImages.length;

// inicialize 'gallerySlideIndex'
let gallerySlideIndex = 0;

// function which find the index of next or previous image
// and change source of popup image (depend on this index)
const changePopupImage = (leftRight) => {
  if (leftRight === "left") {
    shift = -1;
  } else if (leftRight === "right") {
    shift = 1;
  } else {
    throw new Error("Parameter can be 'left' or 'right'.");
  }

  gallerySlideIndex =
    (gallerySlideIndex + numberOfAllImages + shift) % numberOfAllImages;

  popupImageImg.src = allImages[gallerySlideIndex].getAttribute("src");
};

// popup photo -> on click any image
allImages.forEach((oneImage, index) => {
  oneImage.addEventListener("click", () => {
    popupImage.style.display = "block";
    popupImageImg.src = oneImage.getAttribute("src");
    gallerySlideIndex = index;
  });
});

// close popup image - click on photo
popupImageImg.addEventListener("click", () => {
  popupImage.style.display = "none";
});

// close popup image - click on cross
popupImageClose.addEventListener("click", () => {
  popupImage.style.display = "none";
});

// previous popup image - click on '<'
popupImageLeft.addEventListener("click", () => {
  changePopupImage("left");
});

// next popup image - click on '>'
popupImageRight.addEventListener("click", () => {
  changePopupImage("right");
});

// close or shift popup image - press the key on keyboard
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    popupImage.style.display = "none";
  } else if (event.code === "Numpad4" || event.code === "ArrowLeft") {
    changePopupImage("left");
  } else if (event.code === "Numpad6" || event.code === "ArrowRight") {
    changePopupImage("right");
  }
});

// swipe photos left and right on touchpad
let touchstartX = 0;
let touchendX = 0;

const checkDirection = () => {
  if (touchendX > touchstartX) changePopupImage("left");
  if (touchendX < touchstartX) changePopupImage("right");
};

document.addEventListener("touchstart", (event) => {
  touchstartX = event.changedTouches[0].screenX;
});

document.addEventListener("touchend", (event) => {
  touchendX = event.changedTouches[0].screenX;
  checkDirection();
});

/////////////////////////// footer  /////////////////////////////////

// copyright - actual year
const thisYear = new Date().getFullYear();
footerCopyright.append(thisYear);
