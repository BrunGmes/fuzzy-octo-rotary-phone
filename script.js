document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel-button.next");
    const prevButton = document.querySelector(".carousel-button.prev");
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + "px";
    });

    let currentSlideIndex = 0;

    const moveToSlide = (targetIndex) => {
        track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
        currentSlideIndex = targetIndex;
    };

    nextButton.addEventListener("click", () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });

    prevButton.addEventListener("click", () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });

    // Newsletter Form
    const newsletterForm = document.getElementById("newsletter-form");

    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("newsletter-email").value;

        if (email) {
            alert(`Obrigado por subscrever à nossa newsletter, ${email}!`);
            newsletterForm.reset();
        }
    });
});

function scrollToSection(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
}
