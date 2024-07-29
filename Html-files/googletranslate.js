document.addEventListener('DOMContentLoaded', function() {
    // Get the popup
    var popup = document.getElementById('translatePopup');

    // Get the button that opens the popup
    var btn = document.getElementById('translateButton');

    // Get the <span> element that closes the popup
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the popup 
    btn.onclick = function() {
        popup.style.display = 'block';
    }

    // When the user clicks on <span> (x), close the popup
    span.onclick = function() {
        popup.style.display = 'none';
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});