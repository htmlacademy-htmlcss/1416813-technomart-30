const cartButtons = document.querySelectorAll(".button-cart");
const cart = document.querySelector(".cart-link");
const cartCounterText = document.querySelector(".cart-counter");
const addCart = document.querySelector(".modal-add-cart");
const addCartClose = document.querySelector(".close-add-cart");
let cartCounter = 0;

cartButtons.forEach(function (cartButton) {
  cartButton.addEventListener("click", function () {
    cart.classList.add("full");
    cartCounter++;
    cartCounterText.textContent = cartCounter;
    addCart.classList.remove("hidden")
  })
})

addCartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addCart.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (!addCart.classList.contains("hidden")) {
      addCart.classList.add("hidden");
    }
  }
});
