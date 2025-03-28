document.addEventListener("DOMContentLoaded", function () {
    const shortsContainer = document.querySelector(".shorts-container");
    const shortsSlider = document.querySelector(".shorts-slider");
    let isDragging = false;
    let startX, scrollLeft;

    // Hide scrollbar
    shortsContainer.style.overflowX = "hidden";
    shortsContainer.style.scrollbarWidth = "none"; // Firefox
    shortsContainer.style.msOverflowStyle = "none"; // IE/Edge

    shortsContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - shortsContainer.offsetLeft;
        scrollLeft = shortsContainer.scrollLeft;
        shortsContainer.style.cursor = "grabbing";
    });

    shortsContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        shortsContainer.style.cursor = "grab";
    });

    shortsContainer.addEventListener("mouseup", () => {
        isDragging = false;
        shortsContainer.style.cursor = "grab";
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
