// Function to remove preloader
function hidePreloader() {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    document.body.style.overflow = 'visible'; 
}


setTimeout(hidePreloader, 3000);
