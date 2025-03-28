document.addEventListener("DOMContentLoaded", function () {
    const shortsContainer = document.querySelector(".shorts-container");
    const shortsSlider = document.querySelector(".shorts-slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    shortsContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        shortsContainer.classList.add("active");
        startX = e.pageX - shortsContainer.offsetLeft;
        scrollLeft = shortsContainer.scrollLeft;
    });

    shortsContainer.addEventListener("mouseleave", () => {
        isDown = false;
        shortsContainer.classList.remove("active");
    });

    shortsContainer.addEventListener("mouseup", () => {
        isDown = false;
        shortsContainer.classList.remove("active");
    });

    shortsContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - shortsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Speed factor
        shortsContainer.scrollLeft = scrollLeft - walk;
    });

    // Auto-hide shorts on the left when scrolling
    shortsContainer.addEventListener("scroll", () => {
        const shorts = document.querySelectorAll(".short");
        shorts.forEach((short, index) => {
            if (index === 0 && shortsContainer.scrollLeft > 50) {
                short.style.opacity = "0";
                short.style.pointerEvents = "none";
            } else {
                short.style.opacity = "1";
                short.style.pointerEvents = "auto";
            }
        });
    });

    // Hide scrollbar visually but keep functionality
    shortsContainer.classList.add("hide-scrollbar");
    shortsContainer.style.overflowX = "auto";
    shortsContainer.style.scrollBehavior = "smooth";

    // Touch support for sliding
    let touchStartX = 0;
    let touchEndX = 0;
    
    shortsContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    shortsContainer.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
        let swipeDistance = touchStartX - touchEndX;
        shortsContainer.scrollLeft += swipeDistance * 0.5; // Adjust speed factor
    });
});
