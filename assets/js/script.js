document.addEventListener("DOMContentLoaded", function () {
    const carSlideshow = document.getElementById("carSlideshow");

    let currentImage = 1;
    const totalImages = 9;

    function changeCarImage() {
        carSlideshow.style.opacity = "0";

        setTimeout(() => {
            currentImage++;
            if (currentImage > totalImages) {
                currentImage = 1;
            }
            carSlideshow.src = `assets/images/car-${currentImage}.jpg`;
            carSlideshow.style.opacity = "1";
        }, 1000);
    }

    setInterval(changeCarImage, 5000);
});
