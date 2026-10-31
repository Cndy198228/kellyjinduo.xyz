// Kelly English Class Website JavaScript

// Function to handle smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Button hover effects
function enhanceButtonInteractions() {
    const buttons = document.querySelectorAll('.hero-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Animation for cards on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .feature-desc, .testimonial, .course-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial animation state
function initializeAnimation() {
    const elements = document.querySelectorAll('.feature-card, .feature-desc, .testimonial, .course-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Cookie consent banner: show it until the user accepts, then remember the choice
function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    if (!banner || !acceptBtn) return;

    // Already accepted: keep it hidden (class was already set in <head>)
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        document.documentElement.classList.add('cookie-accepted');
        return;
    }

    // On accept: hide the banner and persist the choice
    acceptBtn.addEventListener('click', function () {
        document.documentElement.classList.add('cookie-accepted');
        localStorage.setItem('cookieConsent', 'accepted');
    });
}

// Initialize all features when page loads
function initializeWebsite() {
    enhanceButtonInteractions();
    initializeAnimation();
    animateOnScroll(); // Run once immediately
    initCookieBanner();
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        initializeAnimation();
        setTimeout(animateOnScroll, 100);
    });
}

// Run all initialization code when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);