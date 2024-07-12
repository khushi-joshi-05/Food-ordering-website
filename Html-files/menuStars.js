function rateItem(button, rating) {
    const starButtons = button.parentElement.querySelectorAll('.star-button');
    starButtons.forEach((starButton, index) => {
        if (index < rating) {
            starButton.classList.add('rated');
        } else {
            starButton.classList.remove('rated');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const starButtons = document.querySelectorAll('.star-button');
    starButtons.forEach((starButton, index) => {
        //Adding event listener for all stars
        starButton.addEventListener('mouseover', (e) => {
            highlightStars(e.target, (index)%5);
        });
        starButton.addEventListener('mouseout', (e) => {
            removeHoverStars(e.target);
        });
    });

    function highlightStars(target, rating) {
        //Finding the parent container of the current star
        const starRating = target.closest('.star-rating');
        const starChildren = Array.from(starRating.children);

        starChildren.forEach((starButton, index) => {
            if (index <= rating) {
                //glowing up all stars before current index
                starButton.classList.add('hover');
            } else {
                //(supressing the effect of rated class)
                starButton.classList.add('greyed');
            }
        });
    }
    function removeHoverStars(target) {
        const starRating = target.closest('.star-rating');
        const starButtons = Array.from(starRating.children);
        starButtons.forEach(starButton => {
            //removing both hover and greyed classes in order to make 'rated' class stand out
            starButton.classList.remove('hover');
            starButton.classList.remove('greyed');
        });
    }
});

function handleSubmit(event) 
{
    event.preventDefault();
    
    const feedbackMessage = document.getElementById('feedback-message');
    feedbackMessage.style.display = 'block';

    setTimeout(() => 
    {
        feedbackMessage.style.display = 'none';
        document.getElementById('survey-form').reset();
    }, 3000);
}