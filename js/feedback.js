const feedbackButton = document.querySelector(".feedback-button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackClose = document.querySelector(".close-button");
const feedbackName = document.querySelector(".feedback-name");
const feedbackEmail = document.querySelector(".feedback-email");
const feedbackText = document.querySelector(".feedback-text");
const feedbackForm = document.querySelector(".feedback-form");
let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storageText = "";

try {
  storageName = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}
try {
  storageText = localStorage.getItem("text");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.remove("hidden");
  if (storageName) {
    feedbackName.value = storageName;
    if (storageEmail) {
      feedbackEmail.value = storageEmail;
      if (storageText) {
        feedbackText.value = storageText;
      } else {
        feedbackText.focus();
      }
    } else {
      feedbackEmail.focus();
    }
  } else {
    feedbackName.focus();
  }
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
      localStorage.setItem("text", feedbackText.value);
    }
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("hidden");
  feedbackModal.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.code === "Escape") {
    if (!feedbackModal.classList.contains("hidden")) {
      feedbackModal.classList.add("hidden");
      feedbackModal.classList.remove("modal-error");
    }
  }
});
