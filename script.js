const submitBtn = document.querySelector(".submit-btn");
const flipContainer = document.querySelector("main");
const ratingButtons = document.querySelectorAll(".rating-btn");
const userRating = document.querySelector("#user-rating");

let rating = null;

function onRatingClick(e) {
  ratingButtons.forEach((btn) => {
    btn.classList.remove("selected");
  });
  rating = e.target.value;
  this.classList.add("selected");
}

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", onRatingClick);
});

submitBtn.addEventListener("click", () => {
  if (!rating) return;
  userRating.innerHTML = rating;
  flipContainer.classList.add("flipped");
  ratingButtons.forEach((btn) => {
    btn.classList.add("disabled");
    btn.removeEventListener("click", onRatingClick);
  });
});
