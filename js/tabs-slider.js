let tabService = document.querySelectorAll(".service-item");
let tabContent = document.querySelectorAll(".desk-service-item");

let currentRemove = function () {
  tabService.forEach(function (tabServiceItem) {
    tabServiceItem.classList.remove("current-service");
  })
};
tabService.forEach(function (tabServiceItem, Index) {
  tabServiceItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    tabContent.forEach(function (tabContentItem) {
      tabContentItem.classList.add("hidden");
    });
    currentRemove();
    tabServiceItem.classList.remove("current-service");
    tabContent[Index].classList.remove("hidden");
    tabService[Index].classList.add("current-service");
  })
})
