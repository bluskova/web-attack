const heroSection = document.querySelector(".hero-section");
const dots = document.querySelectorAll(".dot");

const heroImageSources = [
  "../img/hero-img/futsal-playground-002.jpg",
  "../img/hero-img/futsal-playground-003.jpg",
  "../img/hero-img/futsal-playground-004.jpg",
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
