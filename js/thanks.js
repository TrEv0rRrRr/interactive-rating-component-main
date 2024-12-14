const headerDivSpan = document.querySelector(".header__div-span");

const rate = sessionStorage.getItem("rate");

headerDivSpan.textContent = rate;
