const footerCopyright = document.querySelector(".copyright");

// copyright - actual year
const thisYear = new Date().getFullYear();
footerCopyright.append(thisYear);
