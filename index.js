document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container-shi");
  const items = document.querySelectorAll(".hansi");
  const arrowLeft = document.querySelector(".reyt-left");
  const arrowRight = document.querySelector(".reyt-right");
  const totalItems = items.length;
  let index = 0;

  function updateSlider() {
    items.forEach((item, i) => {
      let offset = (i - index) * (180 + 15);
      item.style.transform = `translateX(${offset}px)`;

      if (i === index + 3) {
        item.style.opacity = "0.5";
      } else {
        item.style.opacity = "1";
      }
    });

    arrowLeft.style.display = index === 0 ? "none" : "block";
    arrowRight.style.display = index >= totalItems - 3 ? "none" : "block";
  }

  function slideNext() {
    if (index < totalItems - 3) {
      index++;
      updateSlider();
    }
  }

  function slidePrev() {
    if (index > 0) {
      index--;
      updateSlider();
    }
  }

  arrowRight.addEventListener("click", slideNext);
  arrowLeft.addEventListener("click", slidePrev);

  updateSlider();
});
