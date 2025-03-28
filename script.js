document.addEventListener("DOMContentLoaded", function () {
    const shortsContainer = document.querySelector(".shorts-container");
    const shortsSlider = document.querySelector(".shorts-slider");
    const menuToggle = document.querySelector(".menu-toggle");
    const icons = document.querySelector(".icons");
    let isDown = false;
    let startX;
    let scrollLeft;

    shortsContainer.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - shortsContainer.offsetLeft;
        scrollLeft = shortsContainer.scrollLeft;
    });

    shortsContainer.addEventListener("mouseleave", () => {
        isDown = false;
    });

    shortsContainer.addEventListener("mouseup", () => {
        isDown = false;
    });

    shortsContainer.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - shortsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        shortsContainer.scrollLeft = scrollLeft - walk;
    });

    // Auto-hide leftmost shorts dynamically
    shortsContainer.addEventListener("scroll", () => {
        const shorts = document.querySelectorAll(".short");
        shorts.forEach((short, index) => {
            if (index === 0 && shortsContainer.scrollLeft > 50) {
                short.classList.add("hidden");
            } else {
                short.classList.remove("hidden");
            }
        });
    });

    // Touch support for mobile sliding
    let touchStartX = 0;
    let touchEndX = 0;
    
    shortsContainer.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    shortsContainer.addEventListener("touchmove", (e) => {
        touchEndX = e.touches[0].clientX;
        let swipeDistance = touchStartX - touchEndX;
        shortsContainer.scrollLeft += swipeDistance * 0.5;
    });

    // Mobile menu toggle functionality
    menuToggle.addEventListener("click", () => {
        icons.classList.toggle("show");
    });
});
