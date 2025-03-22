// Detect touch support
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (!isTouchDevice) {
    document.body.classList.add('no-touch-device');
}

// Implement focus, active, hover on touchscreen
const links = document.querySelectorAll('.links > a');

links.forEach(link => {
    // Handle hover(touch) active(click) focus start/end
    link.addEventListener('touchstart', function () {
        link.classList.add('hover');
        link.classList.add('active');
        link.classList.add('focus');
    });
    link.addEventListener('touchend', function () {
        link.classList.remove('hover');
        link.classList.remove('active');
    });

    // Handle "focused" events listeners
    link.addEventListener('focus', function () {
        link.classList.add('focus');
    });
    link.addEventListener('blur', function () {
        link.classList.remove('focus');
    });
});

const clicklink = document.querySelectorAll('.clicklink');
