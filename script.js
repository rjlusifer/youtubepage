document.addEventListener("DOMContentLoaded", function () {
    // Scroll shorts horizontally
    const shortsContainer = document.querySelector(".shorts-container");
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
        const walk = (x - startX) * 2; // Scroll speed
        shortsContainer.scrollLeft = scrollLeft - walk;
    });

    // Search functionality (dummy feature)
    document.querySelector(".search-box button").addEventListener("click", function() {
        const query = document.querySelector(".search-box input").value;
        alert("Search feature is under development: " + query);
    });
});
