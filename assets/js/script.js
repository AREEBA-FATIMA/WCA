let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let autoSlide;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.opacity = "0";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  slides[index].classList.add("active");
  setTimeout(() => {
    slides[index].style.opacity = "1";
  }, 10);
};

showSlide(currentIndex);

const startAutoSlide = () => {
  autoSlide = setInterval(() => {
    nextSlide();
  }, 5000);
};

const resetAutoSlide = () => {
  clearInterval(autoSlide);
  startAutoSlide();
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
};

prevButton.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

nextButton.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
    resetAutoSlide();
  });
});

const goToSlide = (index) => {
  currentIndex = index;
  showSlide(currentIndex);
};

startAutoSlide();
