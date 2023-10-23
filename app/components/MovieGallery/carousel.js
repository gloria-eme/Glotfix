export const Scroll = () => {

const nextButtons = document.querySelectorAll(".next-button");
const prevButtons = document.querySelectorAll(".prev-button");

prevButtons.forEach((prevButton) => {
    prevButton.addEventListener("click", () => {
        const carousel = prevButton.parentElement.querySelector(".carousel");
        const scrollAmount = -50; // Ajusta el valor según la preferencia
        carousel.scrollLeft += scrollAmount;
    });
});

nextButtons.forEach((nextButton) => {
    nextButton.addEventListener("click", () => {
        const carousel = nextButton.parentElement.querySelector(".carousel");
        const scrollAmount = 50; 
        carousel.scrollLeft += scrollAmount;
    });
});

const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
    carousel.addEventListener("scroll", () => {
        carousel.style.scrollbarWidth = "none";
        carousel.style.msOverflowStyle = "none";
    });
});
};