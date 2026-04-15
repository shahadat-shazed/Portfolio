document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.querySelector('.cursor-glow');

    // Follow mouse for the interactive glow background effect
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle scroll animations for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply starting styles and observe
    const animatedElements = document.querySelectorAll('.expertise-card, .stat-card, .about-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const formData = new FormData(contactForm);
            const name = formData.get('first_name');

            // Change button to loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    contactForm.reset();
                    formResponse.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
                    formResponse.className = 'form-response-message success';
                    formResponse.style.display = 'block';
                } else {
                    // Error response from server
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        formResponse.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formResponse.textContent = "Oops! There was a problem submitting your form.";
                    }
                    formResponse.className = 'form-response-message error';
                    formResponse.style.display = 'block';
                }
            } catch (error) {
                // Network error
                formResponse.textContent = "Oops! There was a network problem. Please try again later.";
                formResponse.className = 'form-response-message error';
                formResponse.style.display = 'block';
            } finally {
                // Reset button state
                submitBtn.textContent = 'Submit Message';
                submitBtn.disabled = false;

                // Hide message after 8 seconds
                setTimeout(() => {
                    formResponse.style.opacity = '0';
                    setTimeout(() => {
                        formResponse.style.display = 'none';
                        formResponse.style.opacity = '1';
                    }, 500);
                }, 8000);
            }
        });
    }
});
