document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle Functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const icons = document.querySelector(".icons");

    if (menuToggle && icons) {
        menuToggle.addEventListener("click", function () {
            icons.classList.toggle("show");
        });
    }

    // Shorts Scrolling Functionality
    const shortsContainer = document.querySelector(".shorts-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    if (shortsContainer) {
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

        // Hide the leftmost short when scrolling
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

        // Mobile touch scrolling
        let touchStartX = 0;
        shortsContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
        });

        shortsContainer.addEventListener("touchmove", (e) => {
            let touchEndX = e.touches[0].clientX;
            let swipeDistance = touchStartX - touchEndX;
            shortsContainer.scrollLeft += swipeDistance * 0.5;
        });
    }
});
