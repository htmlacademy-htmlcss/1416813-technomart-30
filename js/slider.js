const sliders = document.querySelectorAll(".slider");
const arrows = document.querySelectorAll(".control-arrow");
const radioSliders = document.querySelectorAll(".btn-slider");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    sliders.forEach(function (slider) {
      slider.classList.toggle("hidden");
    });
    radioSliders.forEach(function (radioSlider) {
      radioSlider.classList.toggle("active-radio");
    })
  })
})
