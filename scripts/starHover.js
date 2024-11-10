document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector('.star-container');
    const ratingClass = document.querySelector('.rating');
    const stars = starContainer.querySelectorAll('.star-svg');
    const mainStar = starContainer.querySelector('.main-star');
    const text = ratingClass.querySelector('.rating-text');

    if (!mainStar) {
        console.error("Element with class 'main-star' not found.");
        return;
    } else {
        mainStar.style.opacity = '1';
    }

    // Define spread positions for each star by index
    const spreadPositions = [
        { x: 0, y: 0 },      // Main star position
        { x: -86, y: 0 },    // First left star
        { x: -43, y: 0 },  // Second left star, slightly above
        { x: 43, y: 0 },   // First right star, slightly above
        { x: 86, y: 0 }      // Second right star
    ];

    // Show stars and spread out with scale-up on hover
    starContainer.addEventListener('mouseenter', () => {
        stars.forEach((star, index) => {
            // Set the spread position and apply the scale-up effect
            star.style.opacity = '1';
            star.style.transform = `translate(${spreadPositions[index].x}px, ${spreadPositions[index].y}px) scale(${star.classList.contains('main-star') ? 1.6 : 1.4})`;
            star.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
            // Move the text element up
            text.style.transform = 'translateY(20%)';
            text.style.transition = 'transform 0.4s ease';

            // Fill the main star with color on hover
            if (star.classList.contains('main-star')) {
                star.style.fill = '#e8eaeb'; // Adjust color as needed
            }
        });
    });

    // Hide stars and reset positions on mouse leave
    starContainer.addEventListener('mouseleave', () => {
        stars.forEach((star) => {
            if (!star.classList.contains('main-star')) {
                star.style.opacity = '0'; // Hide other stars
            }
            star.style.transform = 'translate(0, 0) scale(1)'; // Reset position and scale
            star.style.fill = ''; // Reset fill color
            mainStar.style.fill = ''; // Reset main star fill color smoothly
            text.style.transform = 'translateY(0%)'; // Reset the text element position
        });
    });
});
