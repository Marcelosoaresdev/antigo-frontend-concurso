let currentSlide = 0;
const slider = document.querySelector(".planos-slider");
const dots = document.querySelectorAll(".dot");

function moveSlide(index) {
  currentSlide = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// === Suporte a gesto de swipe (touch) ===
let startX = 0;
let isDragging = false;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const diffX = e.touches[0].clientX - startX;

  // Impede rolagem vertical enquanto desliza horizontalmente
  if (Math.abs(diffX) > 10) e.preventDefault();
});

slider.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50 && currentSlide < dots.length - 1) {
    moveSlide(currentSlide + 1);
  } else if (diff < -50 && currentSlide > 0) {
    moveSlide(currentSlide - 1);
  }
});
