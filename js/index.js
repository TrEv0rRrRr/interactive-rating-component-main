const rateButtons = document.querySelectorAll(".main_div-button");
const submitButton = document.getElementById("submit");
sessionStorage.setItem("rate", "");

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("active");
    if (isActive) {
      submitButton.setAttribute("href", "./thankyou-page/index.html");
      sessionStorage.setItem("rate", button.id);
    } else {
      submitButton.removeAttribute("href");
      sessionStorage.setItem("rate", "");
    }
    rateButtons.forEach((otherButton) => {
      if (otherButton != button) otherButton.classList.remove("active");
    });
  });
});
