const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const stepBar = document.getElementById("step-bar");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((item, indx) => {
    if (indx < currentActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  const activeItems = document.querySelectorAll(".circle.active");
  stepBar.style.width =
    ((activeItems.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (currentActive === 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
