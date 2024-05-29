// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR_TRACKING_ID');

// Smooth Scroll Function
function smoothScroll(event, targetId) {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 70; // adjust for fixed navbar height
    const duration = 700; // duur in milliseconden (aanpasbaar)
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        const ease = progressPercentage < 0.5 
            ? 2 * progressPercentage * progressPercentage 
            : 1 - Math.pow(-2 * progressPercentage + 2, 2) / 2;
        window.scrollTo(0, startPosition + distance * ease);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    });
}
