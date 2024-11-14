document.addEventListener('DOMContentLoaded', () => {
    const bubbleImage = document.querySelector('.bubble-image');
    const mainContent = document.querySelector('.main-content');
    const mainContent2 = document.querySelector('.main-content-2');
    const body = document.querySelector('body');

    if (bubbleImage && mainContent && mainContent2) {
        // Add blur effect smoothly on hover
        bubbleImage.addEventListener('mouseenter', () => {
            mainContent.classList.add('blur-background');
            mainContent2.classList.add('blur-background');
            body.style.overflow = 'hidden';
        });

        // Remove blur effect smoothly when hover ends
        bubbleImage.addEventListener('mouseleave', () => {
            mainContent.classList.remove('blur-background');
            mainContent2.classList.remove('blur-background');
            body.style.overflow = '';
        });
    } else {
        console.error("Bubble image container not found!");
    }
});