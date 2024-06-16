document.addEventListener('DOMContentLoaded', () => {
    const foodIcon = document.getElementById('food-icon');

    document.addEventListener('mousemove', (e) => {
        foodIcon.style.left = `${e.pageX - 20}px`;
        foodIcon.style.top = `${e.pageY - 13}px`;
        foodIcon.style.display = 'block'; // Show the icon when the mouse moves
    });

    document.addEventListener('mouseout', () => {
        foodIcon.style.display = 'none'; // Hide the icon when the mouse leaves the document
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const foodIcons = Array.from(document.getElementsByClassName('food-icon'));
    let isAnimating = false;

    document.addEventListener('mousemove', (e) => {
        if (isAnimating) return;

        const randomIndex = Math.floor(Math.random() * foodIcons.length);
        const selectedIcon = foodIcons[randomIndex].cloneNode(true);
        document.body.appendChild(selectedIcon);

        let x = e.clientX;
        let y = e.clientY;
        let scrollLeft = window.pageXOffset;
        let scrollTop = window.pageYOffset;
        let relativeX = x + scrollLeft;
        let relativeY = y + scrollTop;

        selectedIcon.style.left = `${relativeX}px`;
        selectedIcon.style.top = `${relativeY}px`;

        // Trigger the animation by adding the class after a short delay
        setTimeout(() => {
            selectedIcon.classList.add('active');
        }, 10);

        isAnimating = true;

        // Allow new animation after 0.5 seconds
        setTimeout(() => {
            isAnimating = false;
        }, 80);

        // Remove the icon element after the animation ends
        selectedIcon.addEventListener('transitionend', () => {
            selectedIcon.remove();
        });
    });
});

