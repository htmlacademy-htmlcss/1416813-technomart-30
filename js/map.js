const mapModal = document.querySelector(".modal-map");
const mapShow = document.querySelector(".map-show");
const mapClose = document.querySelector(".close-map");

mapShow.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("hidden");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (!mapModal.classList.contains("hidden")) {
      mapModal.classList.add("hidden");
    }
  }
});
