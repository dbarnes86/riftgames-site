// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.content-card, .product-showcase, .cta-content');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Parallax effect for hero images
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImages = document.querySelectorAll('.hero-img');
    
    heroImages.forEach((img, index) => {
        const speed = 0.3 + (index * 0.1);
        img.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add shimmer effect to RIFT title
const riftText = document.querySelector('.rift-text');
if (riftText) {
    riftText.addEventListener('mouseenter', () => {
        riftText.style.animation = 'none';
        setTimeout(() => {
            riftText.style.animation = 'gradientShift 2s ease infinite';
        }, 10);
    });
}

// Cursor glow effect (optional - can be removed if too much)
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (hero && e.target.closest('.hero')) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        hero.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 136, 0.1), transparent 40%)`;
    }
});
