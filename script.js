document.addEventListener("DOMContentLoaded", function () {
    const shortsContainer = document.querySelector(".shorts-container");
    const shortsSlider = document.querySelector(".shorts-slider");
    let isDragging = false;
    let startX, scrollLeft;

    shortsContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - shortsContainer.offsetLeft;
        scrollLeft = shortsContainer.scrollLeft;
    });

    shortsContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    shortsContainer.addEventListener("mouseup", () => {
        isDragging = false;
    });

    shortsContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - shortsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Speed factor
        shortsContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile devices
    let touchStartX;

    shortsContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    shortsContainer.addEventListener("touchmove", (e) => {
        const touchMoveX = e.touches[0].clientX;
        const moveDistance = touchStartX - touchMoveX;
        shortsContainer.scrollLeft += moveDistance * 2;
        touchStartX = touchMoveX;
    });
});
