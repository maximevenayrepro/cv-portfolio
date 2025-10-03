// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
let originalNavParent = navLinks.parentElement;

function ensureMenuContainerForMobile() {
    if (window.innerWidth <= 768 && navLinks.parentElement !== document.body) {
        document.body.appendChild(navLinks);
    }
}

function ensureMenuContainerForDesktop() {
    if (window.innerWidth > 768 && navLinks.parentElement !== originalNavParent) {
        originalNavParent.appendChild(navLinks);
        navLinks.removeAttribute('style');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        ensureMenuContainerForMobile();
    } else {
        ensureMenuContainerForDesktop();
    }
});

burger.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        ensureMenuContainerForMobile();
    }

    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('menu-open');

    // Force dimensions in case CSS isn't working
    if (navLinks.classList.contains('active')) {
        navLinks.style.position = 'fixed';
        navLinks.style.inset = '70px 0 0 0';
        navLinks.style.width = '100vw';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.zIndex = '2147483647';
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = '#0f172a';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Typing animation
const typedTextElement = document.querySelector('.typed-text');
const cursorElement = document.querySelector('.cursor');

const textArray = [
    'Senior Software Engineer',
    'Ground Control Systems',
    'Embedded Systems',
    'Cloud Architecture',
    'Qt/QML Development',
    'Firmware & IoT'
];

let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function type() {
    const currentText = textArray[textArrayIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        typingDelay = 2000; // Wait before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        typingDelay = 500; // Wait before typing next text
    }
    
    setTimeout(type, typingDelay);
}

// Start typing animation after a small delay
setTimeout(type, 1000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Add animation to tech stack items
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in-up');
});

// Add intersection observer for counting animations (if needed in future)
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.skill-card, .project-card, .profil-card').forEach(card => {
    observer.observe(card);
});

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.timeline-dot').style.transform = 'scale(1.5)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('.timeline-dot').style.transform = 'scale(1)';
    });
});

// Add dynamic gradient animation to hero
const heroBackground = document.querySelector('.hero-background');
let hue = 0;

function animateGradient() {
    hue += 0.5;
    if (hue > 360) hue = 0;
    // This could be used for more dynamic effects if desired
    requestAnimationFrame(animateGradient);
}

animateGradient();

// Add particle effect to hero (lightweight version)
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(59, 130, 246, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.pointerEvents = 'none';
    
    const heroShapes = document.querySelector('.hero-shapes');
    if (heroShapes) {
        heroShapes.appendChild(particle);
        
        const duration = 3000 + Math.random() * 2000;
        const endY = -100 - Math.random() * 100;
        
        particle.animate([
            { transform: 'translateY(0px)', opacity: 0 },
            { transform: `translateY(${endY}px)`, opacity: 1 }
        ], {
            duration: duration,
            easing: 'linear'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Create particles periodically (but not too many for performance)
setInterval(createParticle, 200);

// Skills card hover effect enhancement
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        ripple.animate([
            { transform: 'scale(0)', opacity: 1 },
            { transform: 'scale(2)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => {
            ripple.remove();
        };
    });
});

// Timeline dot animation on scroll
const timelineDots = document.querySelectorAll('.timeline-dot');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'dotPulse 1s ease-out';
        }
    });
}, { threshold: 0.5 });

timelineDots.forEach(dot => {
    timelineObserver.observe(dot);
});

// Add CSS animation for dot pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes dotPulse {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if you add images later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Progress bar for page scroll
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createProgressBar();

// Add cursor trail effect (lightweight)
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    }
});

// Console easter egg
console.log('%c👋 Hello!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLike digging into code? Me too! 🚀', 'font-size: 14px; color: #8b5cf6;');
console.log('%cIf you\'re looking for a passionate developer, contact me!', 'font-size: 12px; color: #ec4899;');
console.log('%cmaxime.venayre.pro@gmail.com', 'font-size: 12px; font-weight: bold; color: #10b981;');

// Performance monitoring
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }, 0);
    });
}


