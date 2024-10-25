const root = document.documentElement;

const setHeaderHeight = (newValue) => {
  root.style.setProperty("--header-height", newValue);
};

const changeNavBarSize = () => {
  const screenWidth = window.innerWidth;
  const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition > 20) {
    setHeaderHeight(screenWidth <= 1065 ? "60px" : "80px");
  } else {
    setHeaderHeight(screenWidth <= 1065 ? "80px" : "100px");
  }
};

window.addEventListener("scroll", () => {
  changeNavBarSize();
});

window.addEventListener("resize", () => {
  changeNavBarSize();
});
