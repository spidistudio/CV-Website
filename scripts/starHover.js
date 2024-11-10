document.addEventListener("DOMContentLoaded", function() {
    const starContainer = document.querySelector('.star-container');

    const mainStar = starContainer.querySelector('.main-star');
    if (mainStar) {
        mainStar.style.opacity = '1';
        mainStar.style.transform = 'scale(1)';
    } else {
        console.error("Element with class 'main-star' not found.");
    }

    // Show stars on hover
    starContainer.addEventListener('mouseenter', () => {
        starContainer.classList.add('active'); // Add active class
        starContainer.querySelectorAll('.star-svg').forEach(star => {
            star.style.opacity = '1'; // Show all stars
            star.style.transform = 'scale(1)';
            // Ensure the main star is always visible
            if (star.classList.contains('main-star')) {
                star.style.opacity = '1'; // Keep main star visible
                star.style.transform = 'scale(1)';
            }
            // Trigger reflow to apply transition
            void star.offsetWidth; // This line forces a reflow
        });
    });

    // Hide stars when mouse leaves
    starContainer.addEventListener('mouseleave', () => {
        starContainer.classList.remove('active'); // Remove active class
        starContainer.querySelectorAll('.star-svg').forEach(star => {
            if (!star.classList.contains('main-star')) {
                star.style.opacity = '0'; // Hide other stars
                star.style.transform = 'scale(1)';
            }
            // Ensure the main star remains visible
            mainStar.style.opacity = '1'; // Keep main star visible
            mainStar.style.transform = 'scale(1)';
        });
    });
});