
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Close mobile menu if open
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        
        // Smooth scroll with easing
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typing animation
const text = "Fullstack Developer";
let index = 0;
let isDeleting = false;
let typingDelay = 200;

function typeEffect() {
    const currentText = text.substring(0, index);
    const targetElement = document.querySelector('.animate-up');
    
    if (targetElement) {
        targetElement.textContent = currentText;
        targetElement.style.borderRight = isDeleting ? 'none' : '2px solid #64ffda';
        
        if (!isDeleting && index <= text.length) {
            index++;
            setTimeout(typeEffect, typingDelay);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(typeEffect, typingDelay / 2);
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeEffect, 1000);
        }
    }
}

// Start the typing animation after a delay
setTimeout(typeEffect, 1500);

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 25, 47, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 25, 47, 0.9)';
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll(
        '.skill-progress-item, .timeline-item, .about-image, .project-card, .education-item, .section-title'
    );
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            
            // Animate progress bars
            if (element.classList.contains('skill-progress-item')) {
                const progressBar = element.querySelector('.progress');
                const targetWidth = progressBar.style.width;
                progressBar.style.width = '0';
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
            }
            
            // Add shine effect to section titles
            if (element.classList.contains('section-title')) {
                element.classList.add('shine');
            }
        }
    });
}

// Initialize animation styles
document.querySelectorAll(
    '.skill-progress-item, .timeline-item, .about-image, .project-card, .education-item, .section-title'
).forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    animateOnScroll();
    setTimeout(typeEffect, 1500);
    setTimeout(animateOnScroll, 100);
});

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    const speed = 5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    
    hero.style.backgroundPosition = `${x}px ${y}px`;
});

// Animate profile image on hover
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = profileImage.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        profileImage.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg) scale(1.05)`;
    });
    
    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
    });



} 