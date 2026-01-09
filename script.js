// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const body = document.body;

function toggleMenu() {
    const isActive = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (!isActive) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

function closeMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    body.style.overflow = '';
}

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close menu when clicking outside or on backdrop
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
        // Check if click is outside menu and hamburger
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
        // Check if click is on the backdrop (first child pseudo-element area)
        // We'll handle this by checking if click is on body when menu is open
        if (e.target === document.body || e.target === document.documentElement) {
            closeMenu();
        }
    }
});

// Handle window resize with debounce
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close menu on resize to desktop if menu is open
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            closeMenu();
        }
    }, 250);
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Handle dropdown menus on mobile
document.querySelectorAll('.dropdown > .nav-link').forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (e) => {
        // On mobile, allow dropdown to toggle
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = dropdownLink.parentElement;
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdown.classList.toggle('open');
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    closeMenu();
                }
                
                // Calculate offset based on screen size
                const headerOffset = window.innerWidth <= 768 ? 80 : 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Set minimum date to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('appointmentDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Form Validation and Submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    // Clear error messages on input
    const formInputs = appointmentForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            clearError(this.id);
            const formMessage = document.getElementById('formMessage');
            if (formMessage) {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }
        });
    });

    // Phone number validation
    const phoneInput = document.getElementById('appointmentPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, ''); // Only numbers
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }

    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Log to console for debugging
        console.log('📋 Appointment Form Submission:', data);
        
        // Show loading state
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        if (btnText) btnText.style.display = 'none';
        if (btnLoader) btnLoader.style.display = 'inline-block';
        submitBtn.disabled = true;
        
        const phoneNumber = '7200603928';
        const email = 'suri1154@gmail.com';
        const whatsappNumber = '917200603928';
        
        // Format service name
        const serviceNames = {
            'asthma': 'Asthma',
            'tuberculosis': 'Tuberculosis',
            'sleep-disorders': 'Sleep Disorders',
            'chronic-cough': 'Chronic Cough',
            'breathlessness': 'Breathlessness',
            'general': 'General Consultation'
        };
        const serviceName = serviceNames[data.service] || data.service;
        
        // Create formatted message
        let message = `*Appointment Request*\n\n`;
        message += `*Name:* ${data.name}\n`;
        message += `*Phone:* ${data.phone}\n`;
        if (data.email) message += `*Email:* ${data.email}\n`;
        message += `*Service:* ${serviceName}\n`;
        if (data.preferredDate) {
            const date = new Date(data.preferredDate);
            message += `*Preferred Date:* ${date.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\n`;
        }
        if (data.preferredTime) message += `*Preferred Time:* ${data.preferredTime}\n`;
        if (data.message) message += `*Message:* ${data.message}\n`;
        message += `\nPlease contact me to schedule an appointment.`;
        
        // Create mailto link
        const subject = encodeURIComponent(`Appointment Request - ${serviceName}`);
        const emailBody = encodeURIComponent(message.replace(/\*/g, ''));
        
        // Google Sheets/Drive Configuration
        // IMPORTANT: To enable Google Drive storage:
        // 1. Follow instructions in GOOGLE_DRIVE_SETUP.md
        // 2. Create Google Apps Script and get Web App URL
        // 3. Replace the empty string below with your URL
        // Example: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
        const GOOGLE_SCRIPT_URL = ''; // <-- Add your Google Apps Script URL here (see GOOGLE_DRIVE_SETUP.md)
        
        // Create WhatsApp link (for backup notification)
        const whatsappMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        
        // Function to send data to Google Sheets
        function sendToGoogleSheets(formData, scriptUrl) {
            return new Promise((resolve, reject) => {
                // Create a hidden form and submit it
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = scriptUrl;
                form.style.display = 'none';
                
                // Create hidden input fields with the data
                const dataJson = JSON.stringify(formData);
                const dataInput = document.createElement('input');
                dataInput.type = 'hidden';
                dataInput.name = 'data';
                dataInput.value = dataJson;
                form.appendChild(dataInput);
                
                // Add form to body, submit, then remove
                document.body.appendChild(form);
                
                // Create iframe for form submission (avoids page reload)
                const iframe = document.createElement('iframe');
                iframe.name = 'hidden_iframe_' + Date.now();
                iframe.style.display = 'none';
                form.target = iframe.name;
                document.body.appendChild(iframe);
                
                // Submit form
                form.submit();
                
                // Clean up after a delay
                setTimeout(() => {
                    document.body.removeChild(form);
                    document.body.removeChild(iframe);
                    resolve({ success: true });
                }, 1000);
            });
        }
        
        // If Google Script URL is configured, send to Google Sheets first
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.trim() !== '') {
            // Prepare data for Google Sheets
            const sheetData = {
                name: data.name,
                phone: data.phone,
                email: data.email || '',
                service: serviceName,
                preferredDate: data.preferredDate || '',
                preferredTime: data.preferredTime || '',
                message: data.message || ''
            };
            
                // Send to Google Sheets
                sendToGoogleSheets(sheetData, GOOGLE_SCRIPT_URL)
                .then(() => {
                    console.log('✅ Data sent to Google Drive/Sheets');
                    console.log('📧 Preparing email notification...');
                    console.log('📱 Preparing WhatsApp notification...');
                    
                    // Show success message - data saved to Google Drive
                    showFormMessage(`✅ Thank you ${data.name}! Your appointment request has been saved to Google Drive/Sheets. Sending notifications...`, 'success');
                    
                    // Also send email/WhatsApp notifications (data stored in both places)
                    setTimeout(() => {
                        window.location.href = `mailto:${email}?subject=${subject}&body=${emailBody}`;
                        console.log('📧 Email notification sent to:', email);
                        
                        setTimeout(() => {
                            window.open(whatsappUrl, '_blank');
                            console.log('📱 WhatsApp notification sent to:', whatsappNumber);
                            
                            // Update success message
                            showFormMessage(`✅ Perfect! Your appointment request has been saved to Google Drive and sent via email & WhatsApp. We will contact you at ${data.phone} soon.`, 'success');
                        }, 500);
                    }, 500);
                    
                    // Reset form
                    this.reset();
                    
                    // Reset button
                    if (btnText) btnText.style.display = 'inline-block';
                    if (btnLoader) btnLoader.style.display = 'none';
                    submitBtn.disabled = false;
                })
                .catch((error) => {
                    console.error('❌ Error sending to Google Sheets:', error);
                    // Fallback to email/WhatsApp if Google Sheets fails
                    showFormMessage('⚠️ There was an issue saving to Google Drive. Sending via email/WhatsApp instead...', 'error');
                    
                    setTimeout(() => {
                        window.location.href = `mailto:${email}?subject=${subject}&body=${emailBody}`;
                        setTimeout(() => {
                            window.open(whatsappUrl, '_blank');
                            showFormMessage(`✅ Thank you ${data.name}! Your appointment request has been sent via email and WhatsApp. We will contact you soon.`, 'success');
                        }, 500);
                        
                        this.reset();
                        if (btnText) btnText.style.display = 'inline-block';
                        if (btnLoader) btnLoader.style.display = 'none';
                        submitBtn.disabled = false;
                    }, 1000);
                });
        } else {
            // No Google Script URL configured, use email/WhatsApp only
            console.log('📝 Google Drive not configured. Using email/WhatsApp only.');
            console.log('💡 To enable Google Drive storage, see GOOGLE_DRIVE_SETUP.md');
            
            // Send via Email and WhatsApp
            window.location.href = `mailto:${email}?subject=${subject}&body=${emailBody}`;
            
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 500);
            
            // Show success message
            setTimeout(() => {
                showFormMessage(`✅ Thank you ${data.name}! Your appointment request has been sent to ${email} and WhatsApp (7200603928). We will contact you at ${data.phone} soon.`, 'success');
                
                console.log('📧 Email sent to:', email);
                console.log('📱 WhatsApp message prepared for:', whatsappNumber);
                console.log('📋 Submission details:', {
                    Name: data.name,
                    Phone: data.phone,
                    Email: data.email || 'Not provided',
                    Service: serviceName,
                    Date: data.preferredDate || 'Not specified',
                    Time: data.preferredTime || 'Not specified'
                });
                
                this.reset();
                
                // Reset button
                if (btnText) btnText.style.display = 'inline-block';
                if (btnLoader) btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }, 1000);
        }
    });
}


function validateForm() {
    let isValid = true;
    
    // Validate Name
    const name = document.getElementById('appointmentName');
    if (!name.value.trim() || name.value.trim().length < 2) {
        showError('nameError', 'Please enter your full name (at least 2 characters)');
        isValid = false;
    }
    
    // Validate Phone
    const phone = document.getElementById('appointmentPhone');
    if (!phone.value.trim() || phone.value.length !== 10) {
        showError('phoneError', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    // Validate Email (optional but if provided, should be valid)
    const email = document.getElementById('appointmentEmail');
    if (email.value && !isValidEmail(email.value)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate Service
    const service = document.getElementById('appointmentService');
    if (!service.value) {
        showError('serviceError', 'Please select a service');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

function clearError(errorId) {
    const inputId = errorId.replace('Error', '');
    const errorElement = document.getElementById(inputId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        if (type === 'success' || type === 'info') {
            setTimeout(() => {
                formMessage.style.opacity = '0';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.style.opacity = '1';
                }, 300);
            }, 5000);
        }
    }
}

// Navbar scroll effect
let scrollTicking = false;
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
            
            lastScroll = currentScroll;
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});


// Active navigation link highlighting
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            let current = '';
            const sections = document.querySelectorAll('section[id]');
            const scrollOffset = window.innerWidth <= 768 ? 120 : 150;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - scrollOffset) {
                    current = section.getAttribute('id');
                }
            });
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.treatment-card, .service-card, .why-choose-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

