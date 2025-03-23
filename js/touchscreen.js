// Implement focus, active, hover on touchscreen
const links = document.querySelectorAll('.links > a');

links.forEach(link => {
    // Handle hover(touch) active(click) focus start/end
    link.addEventListener('touchstart', function () {
        link.classList.add('hover');
        link.classList.add('active');
        link.classList.add('focus');
    }, { passive: true });

    link.addEventListener('touchend', function () {
        link.classList.remove('hover');
        link.classList.remove('active');
    }, { passive: true });

    // Handle "focused" events listeners
    link.addEventListener('focus', function () {
        link.classList.add('focus');
    });
    link.addEventListener('blur', function () {
        link.classList.remove('focus');
    });
});

const clicklink = document.querySelectorAll('.clicklink');
