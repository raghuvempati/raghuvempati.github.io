// Portfolio JavaScript Functions

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Main initialization function
function initializePortfolio() {
    createParticles();
    setupNavigation();
    setupScrollAnimations();
    setupContactLinks();
    setupScrollNavigation();
}

// Create animated background particles
function createParticles() {
    const container = document.getElementById('bgAnimation');
    const particleCount = 50;
    
    // Clear existing particles
    container.innerHTML = '';
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const delay = Math.random() * 6;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = delay + 's';
        
        container.appendChild(particle);
    }
}

// Setup navigation functionality
function setupNavigation() {
    // Navigation background on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
            nav.style.background = 'rgba(15, 15, 35, 0.9)';
        }
    });
}

// Setup smooth scrolling for navigation links
function setupScrollNavigation() {
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
        });
    });
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Setup contact links from configuration
function setupContactLinks() {
    const contactLinksContainer = document.getElementById('contactLinks');
    if (!contactLinksContainer) return;
    
    // Clear existing content
    contactLinksContainer.innerHTML = '';
    
    // Add main social links
    Object.entries(portfolioConfig.social).forEach(([key, social]) => {
        const link = createContactLink(social.url, social.icon, social.label);
        contactLinksContainer.appendChild(link);
    });
    
    // Add additional social links if configured
    if (portfolioConfig.additionalSocial) {
        Object.entries(portfolioConfig.additionalSocial).forEach(([key, social]) => {
            const link = createContactLink(social.url, social.icon, social.label);
            contactLinksContainer.appendChild(link);
        });
    }
}

// Create individual contact link element
function createContactLink(url, icon, label) {
    const link = document.createElement('a');
    link.href = url;
    link.className = 'contact-link';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    const iconSpan = document.createElement('span');
    iconSpan.textContent = icon;
    
    const labelSpan = document.createElement('span');
    labelSpan.textContent = label;
    
    link.appendChild(iconSpan);
    link.appendChild(labelSpan);
    
    return link;
}

// Handle window resize events
window.addEventListener('resize', () => {
    // Recreate particles on window resize
    createParticles();
});

// Utility function to update page title
function updatePageTitle() {
    if (portfolioConfig.personal.name) {
        document.title = `${portfolioConfig.personal.name} - Portfolio`;
    }
}

// Call updatePageTitle on load
updatePageTitle();

// Export functions for potential external use
window.portfolioFunctions = {
    createParticles,
    setupContactLinks,
    updatePageTitle
};

document.addEventListener("DOMContentLoaded", function () {
    const contactLinks = document.getElementById("contactLinks");
    if (contactLinks && typeof portfolioConfig !== "undefined" && portfolioConfig.social) {
        Object.values(portfolioConfig.social).forEach(social => {
            const a = document.createElement("a");
            a.href = social.url;
            a.target = "_blank";
            a.rel = "noopener";
            a.className = "contact-link";
            a.innerHTML = `<i class="${social.icon}"></i> <span>${social.label}</span>`;
            contactLinks.appendChild(a);
        });
    }
});