let rating = null;

function handleRatingChange(value) {
    rating = value;
    const buttons = document.querySelectorAll('.rating-btn');
    buttons.forEach((btn, index) => {
        if (index < value) {
            btn.style.transform = 'scale(1.2)';
        } else {
            btn.style.transform = 'scale(1)';
        }
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (!rating) {
        alert('Please select a rating.');
        return;
    }

    showModal();
    showResetConfirmation();
}

function showModal() {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'none';
}

function showResetConfirmation() {
 
    resetForm();
}

function resetForm() {
    document.getElementById('feedback-form').reset();

    rating = null;
    const buttons = document.querySelectorAll('.rating-btn');
    buttons.forEach(btn => {
        btn.style.transform = 'scale(1)';
    });
}

window.onclick = function(event) {
    const modal = document.getElementById('feedback-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
