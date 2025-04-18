// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const blogForm = document.querySelector('.blog-form');
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    const subscribeForm = document.querySelector('.subscribe-form');

    // Contact Form Validation
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            let isValid = true;

            // Validate Name
            if (!name.value.trim()) {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                showSuccess(name);
            }

            // Validate Email
            if (!email.value.trim()) {
                showError(email, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                showSuccess(email);
            }

            // Validate Subject
            if (!subject.value.trim()) {
                showError(subject, 'Subject is required');
                isValid = false;
            } else {
                showSuccess(subject);
            }

            // Validate Message
            if (!message.value.trim()) {
                showError(message, 'Message is required');
                isValid = false;
            } else {
                showSuccess(message);
            }

            if (isValid) {
                // Simulate form submission
                alert('Form submitted successfully! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Helper Functions
    function showError(input, message) {
        const formGroup = input.parentElement;
        const small = formGroup.querySelector('small') || document.createElement('small');
        small.textContent = message;
        small.className = 'error-message';
        if (!formGroup.querySelector('small')) {
            formGroup.appendChild(small);
        }
        input.classList.add('error');
    }

    function showSuccess(input) {
        const formGroup = input.parentElement;
        const small = formGroup.querySelector('small');
        if (small) {
            small.remove();
        }
        input.classList.remove('error');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});