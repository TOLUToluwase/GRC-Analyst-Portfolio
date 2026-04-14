document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('mobile-active');
            document.querySelector('.hamburger-btn').classList.remove('active');
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Hamburger menu toggle logic
    const hamburger = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('mobile-active');
        });
    }

    // Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    // Methodology Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => {
                p.classList.remove('active');
                p.style.display = 'none';
            });

            // Add active class to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            targetPane.style.display = 'block';
            
            // Trigger animation in next frame
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    targetPane.classList.add('active');
                });
            });
        });
    });



    // Click-to-copy phone number
    const phoneLinks = document.querySelectorAll('a[href="tel:+447453650987"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navigator.clipboard.writeText('+44 7453 650987').then(() => {
                // Show toast
                const toast = document.createElement('div');
                toast.textContent = '📋 Phone number copied!';
                toast.style.cssText = `
                    position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
                    background: #00ffaa; color: #0b0f13; padding: 12px 24px;
                    border-radius: 999px; font-weight: 600; font-size: 0.9rem;
                    z-index: 9999; box-shadow: 0 4px 20px rgba(0,255,170,0.3);
                    transition: opacity 0.5s ease;
                `;
                document.body.appendChild(toast);
                setTimeout(() => { toast.style.opacity = '0'; }, 1800);
                setTimeout(() => { toast.remove(); }, 2300);
            });
        });
    });

    // Apply fade-up class to elements dynamically and observe them
    const elementsToAnimate = document.querySelectorAll(
        '.card, .section-title, .hero-title, .hero-subtitle, .journey-text p, .stat, .avatar-wrapper, .status-badge'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
});
