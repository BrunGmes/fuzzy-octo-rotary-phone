document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    let currentSlideIndex = 0;

    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlideIndex = slides.indexOf(targetSlide);
    };

    nextButton.addEventListener("click", () => {
        const currentSlide = slides[currentSlideIndex];
        const nextSlide = slides[(currentSlideIndex + 1) % slides.length];
        moveToSlide(currentSlide, nextSlide);
    });

    prevButton.addEventListener("click", () => {
        const currentSlide = slides[currentSlideIndex];
        const prevSlide = slides[(currentSlideIndex - 1 + slides.length) % slides.length];
        moveToSlide(currentSlide, prevSlide);
    });
});
