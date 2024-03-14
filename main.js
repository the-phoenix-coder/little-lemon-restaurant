const prev = document.getElementById("prev");
const next = document.getElementById("next");
const reviews = Array.from(document.querySelectorAll(".review"));

let current = 1;

addActive();

next.addEventListener("click", () => {
  current += 1;
  addActive();
});

prev.addEventListener("click", () => {
  current -= 1;
  addActive();
});

function addActive() {
  removeActive();
  reviews[current - 1].classList.add("active");
  if (current == 1) {
    prev.classList.add("disabled");
  } else if (current == reviews.length) {
    next.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
  }
}

function removeActive() {
  reviews.forEach((review) => {
    review.classList.remove("active");
  });
}
