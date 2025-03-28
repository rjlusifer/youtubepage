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

    shortsContainer.addEventListener("scroll", () => {
        const shorts = document.querySelectorAll(".short");
        shorts.forEach((short, index) => {
            if (index === 0 && shortsContainer.scrollLeft > 50) {
                short.style.opacity = "0";
            } else {
                short.style.opacity = "1";
            }
        });
    });

    // Hide scrollbar visually but keep functionality
    shortsContainer.style.scrollbarWidth = "none";
    shortsContainer.style.msOverflowStyle = "none";
    shortsContainer.classList.add("hide-scrollbar");

    // Ensure smooth scrolling
    shortsContainer.style.overflowX = "auto";
    shortsContainer.style.scrollBehavior = "smooth";
});
