document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.bubble-about .hover-word').forEach(word => {
        word.addEventListener('mouseenter', () => {
            createEmojiConfetti(word);
        });
    });
});

function createEmojiConfetti(element) {
    const emojiContainer = document.getElementById('emoji-container');
    if (!emojiContainer) {
        console.error("Emoji container not found in the DOM.");
        return;
    }

    // Create the emoji element
    const emoji = document.createElement('div');
    
    // Check the text of the hovered element to determine which emoji to use
    if (element.innerText === "Hey") {
        emoji.innerText = '👋'; // Wave emoji for "Hey"
        emoji.style.fontSize = '2rem'; // Increase the size of the emoji
            // Position the emoji near the word
        const { top, left, width } = element.getBoundingClientRect();
        emoji.style.top = `${top + window.scrollY}px`; // Adjust based on scroll position
        emoji.style.left = `${left + width / 2}px`;

        // Append the emoji to the container
        emojiContainer.appendChild(emoji);

        // Trigger the initial jump effect
        setTimeout(() => {
            emoji.classList.add('fade-in');
            emoji.style.transform = 'translate(-60px, -40px)'; // Jump up to the left (less on Y-axis)
        }, 50);

        // After the jump, rotate and then fall
        setTimeout(() => {
            emoji.style.transform += ' rotate(+150deg)'; // Append rotation to the existing transform
        }, 350); // Delay to let the jump animation finish

        // After the rotation, animate the fall
        setTimeout(() => {
            const offset = 120; // Adjust this value to control how far left it falls
            const finalX = left + width / 2 - offset; // Calculate final X position
            animateEmoji(emoji, finalX, top + window.scrollY); // Pass the new x position and original y position
        }, 500); // Delay to let the rotation finish
    } else if (element.innerText === "Python") {
        const pythonLogo = document.createElement('img'); // Create an img element for the Python logo
        pythonLogo.src = 'images/python-logo.svg'; // Set the source to the Python logo image
        pythonLogo.alt = 'Python Logo'; // Set alt text for accessibility
        pythonLogo.style.width = '50px'; // Increase the desired width
        pythonLogo.style.height = '50px'; // Increase the desired height
        emoji.appendChild(pythonLogo); // Append the image to the emoji div
    } else if (element.innerText === "student") {
        emoji.innerText = '🎓'; // Wave emoji for "Hey"
        emoji.style.fontSize = '2rem'; // Increase the size of the emoji
            // Position the emoji near the word
        const { top, left, width } = element.getBoundingClientRect();
        emoji.style.top = `${top + window.scrollY}px`; // Adjust based on scroll position
        emoji.style.left = `${left + width / 2}px`;

        // Append the emoji to the container
        emojiContainer.appendChild(emoji);

    }
    
    emoji.classList.add('emoji-confetti');

    // Position the emoji near the word
    const { top, left, width } = element.getBoundingClientRect();
    emoji.style.top = `${top + window.scrollY}px`; // Adjust based on scroll position
    emoji.style.left = `${left + width / 2}px`;

    // Append the emoji to the container
    emojiContainer.appendChild(emoji);

    // Trigger the initial jump effect
    setTimeout(() => {
        emoji.classList.add('fade-in');
        emoji.style.transform = 'translate(-60px, -40px)'; // Jump up to the left (less on Y-axis)
    }, 50);

    // After the rotation, animate the fall
    setTimeout(() => {
        const offset = 120; // Adjust this value to control how far left it falls
        const finalX = left + width / 2 - offset; // Calculate final X position
        animateEmoji(emoji, finalX, top + window.scrollY); // Pass the new x position and original y position
    }, 500); // Delay to let the rotation finish
}

function animateEmoji(emoji, finalX, startY) {
    let animationDuration = 1000;
    let maxFallDistance = 800;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;

        let percentage = progress / animationDuration;
        let yOffset = startY + (percentage * maxFallDistance); // Fall down from the original position
        let opacity = 1 - (percentage + 0.4);

        // Set the emoji's position based on finalX and yOffset
        emoji.style.transform = `translate(${finalX - parseInt(emoji.style.left)}px, ${yOffset - startY}px)`;
        emoji.style.opacity = opacity;

        if (progress < animationDuration) {
            requestAnimationFrame(step);
        } else {
            // Remove the emoji from the container after the animation is complete
            emoji.remove();
        }
    }

    requestAnimationFrame(step);
}