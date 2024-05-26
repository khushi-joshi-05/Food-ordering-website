function rateItem(button, rating) {
    const starButtons = button.parentElement.querySelectorAll('.starbtn');

    starButtons.forEach((starButton, index) => {
        if (index < rating) {
            starButton.classList.add('rated');
        } else {
            starButton.classList.remove('rated');
        }
    });
