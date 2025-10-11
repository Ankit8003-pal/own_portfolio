var typed = new Typed(".text",{
    strings:["Web Developer","Designer","Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Hamburger Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
navbar.addEventListener('click', () => {
    navbar.classList.remove('active');
});

// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        navbar.classList.remove('active');
    });
});

// Scroll-to-Top Button Functionality
const topBtn = document.querySelector('.top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Skills Bar Animations on Scroll
const skillsSection = document.querySelector('#Skills');
const progressBars = document.querySelectorAll('.progress-line span');
const radialBars = document.querySelectorAll('.path');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate linear progress bars
            progressBars.forEach(bar => {
                bar.style.animationPlayState = 'running';
            });
            // Animate radial bars
            radialBars.forEach(bar => {
                bar.style.animationPlayState = 'running';
            });
            // Animate info spans
            document.querySelectorAll('.info span').forEach(span => {
                span.style.animationPlayState = 'running';
            });
            // Animate percentage and text
            document.querySelectorAll('.percentage, .text').forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });
}, observerOptions);

if (skillsSection) {
    observer.observe(skillsSection);
}

// Section Animations on Scroll
const sections = document.querySelectorAll('section');
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(section);
});

// Basic Form Validation and Submission
const contactForm = document.querySelector('.contact-form form');
const sendBtn = document.querySelector('.send');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const subject = contactForm.querySelector('input[placeholder="enter your subject"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
    
    if (name && email && message) {
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill in all required fields (Name, Email, Message).');
    }
});
