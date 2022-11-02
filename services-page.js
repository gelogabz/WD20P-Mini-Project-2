// NAVBAR 
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
    } else {
        nav.classList.remove('bg-light', 'shadow',);
    }

})
// EFFECT IN TEXT
