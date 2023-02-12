const textareaEl = document.getElementById("textarea");

const totalCounter = document.getElementById("total-counter");

const remainingCounter = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounter.innerHTML = textareaEl.value.length;
  remainingCounter.innerHTML =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
