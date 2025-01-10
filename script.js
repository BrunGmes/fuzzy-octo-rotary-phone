document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");
    const indicators = document.querySelectorAll(".carousel-indicators .dot");
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${slideWidth * index}px)`; // Corrigido para usar transform
    });

    let currentSlideIndex = 0;

    const moveToSlide = (targetIndex) => {
        track.style.transform = `translateX(-${slideWidth * targetIndex}px)`; // Movendo os slides
        currentSlideIndex = targetIndex;
        updateIndicators();
    };

    const updateIndicators = () => {
        indicators.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlideIndex) {
                dot.classList.add('active');
            }
        });
    };

    nextButton.addEventListener("click", () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });

    prevButton.addEventListener("click", () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });

    indicators.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            moveToSlide(index);
        });
    });
});