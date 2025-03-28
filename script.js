document.addEventListener('DOMContentLoaded', function () {
    const shortsContainer = document.querySelector('.shorts-container');
    const shortsSlider = document.querySelector('.shorts-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    shortsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        shortsContainer.classList.add('active');
        startX = e.pageX - shortsContainer.offsetLeft;
        scrollLeft = shortsContainer.scrollLeft;
    });

    shortsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        shortsContainer.classList.remove('active');
    });

    shortsContainer.addEventListener('mouseup', () => {
        isDown = false;
        shortsContainer.classList.remove('active');
    });

    shortsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - shortsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        shortsContainer.scrollLeft = scrollLeft - walk;
    });

    // Hide scrollbar
    shortsContainer.style.overflowX = 'hidden';
    shortsContainer.style.scrollbarWidth = 'none'; // Firefox
    shortsContainer.style.msOverflowStyle = 'none'; // IE & Edge
});
