// Smooth Scrolling
const smoothScroll = (target, duration) => {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, ease);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

// Setup smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'), 1000);
    });
});

// Hover animations
const addHoverEffect = () => {
    const elements = document.querySelectorAll('.hover-effect');
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('animated');
        });
        element.addEventListener('mouseleave', () => {
            element.classList.remove('animated');
        });
    });
};

addHoverEffect();

// Mobile navigation functionality
const mobileNavToggle = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
};

mobileNavToggle();