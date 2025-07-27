// ==================== INITIALIZATION ==================== //
document.addEventListener('DOMContentLoaded', function() {
    console.log('Atlas Community - Garry\'s Mod Loading Screen Initialized');
    
    // Initialize all components
    initializeLoadingScreen();
    initializeParticles();
    initializeLoadingBar();
    startBackgroundAnimation();
});

// ==================== LOADING SCREEN CONTROLLER ==================== //
function initializeLoadingScreen() {
    const loadingSteps = [
        'Sunucuya bağlanılıyor...',
        'Oyuncu verisi doğrulanıyor...',
        'Harita yükleniyor...',
        'Modlar senkronize ediliyor...',
        'Varlıklar indiriliyor...',
        'Sunucu kuralları yükleniyor...',
        'Karakter verisi hazırlanıyor...',
        'Roleplay ortamı kuruluyor...',
        'Atlas Community\'ye hoşgeldin!'
    ];
    
    let currentStep = 0;
    const loadingText = document.querySelector('.loading-text');
    
    function updateLoadingText() {
        if (currentStep < loadingSteps.length) {
            loadingText.textContent = loadingSteps[currentStep];
            currentStep++;
            
            // Update loading text every 3.3 seconds (30s / 9 steps)
            setTimeout(updateLoadingText, 3300);
        } else {
            // Loop back to first step
            currentStep = 0;
            setTimeout(updateLoadingText, 3000);
        }
    }
    
    // Start updating loading text
    updateLoadingText();
}

// ==================== PARTICLE SYSTEM ==================== //
function initializeParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration between 8s and 15s
        particle.style.animationDuration = (Math.random() * 7 + 8) + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Add to container
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 20000);
    }
    
    // Create initial particles
    for (let i = 0; i < 15; i++) {
        setTimeout(() => createParticle(), i * 200);
    }
    
    // Continue creating particles
    setInterval(createParticle, 800);
}

// ==================== LOADING BAR ANIMATION ==================== //
function initializeLoadingBar() {
    const loadingFill = document.querySelector('.loading-fill');
    let progress = 0;
    const targetProgress = 100;
    const duration = 30000; // 30 seconds
    const interval = 50; // Update every 50ms
    const increment = (targetProgress / duration) * interval;
    
    function updateProgress() {
        if (progress < targetProgress) {
            progress += increment + (Math.random() * 0.5); // Add slight randomness
            progress = Math.min(progress, targetProgress);
            loadingFill.style.width = progress + '%';
            
            setTimeout(updateProgress, interval);
        } else {
            // Reset and restart
            setTimeout(() => {
                progress = 0;
                loadingFill.style.width = '0%';
                setTimeout(updateProgress, 500);
            }, 2000);
        }
    }
    
    updateProgress();
}

// ==================== BACKGROUND ANIMATION ==================== //
function startBackgroundAnimation() {
    const backgroundAnimation = document.querySelector('.background-animation');
    
    if (!backgroundAnimation) {
        const bgDiv = document.createElement('div');
        bgDiv.className = 'background-animation';
        document.body.appendChild(bgDiv);
    }
    
    // Add floating animation
    let animationStep = 0;
    
    function animateBackground() {
        animationStep += 0.01;
        
        const x1 = 30 + Math.sin(animationStep) * 20;
        const y1 = 40 + Math.cos(animationStep * 0.8) * 15;
        
        const x2 = 70 + Math.sin(animationStep * 1.2) * 25;
        const y2 = 80 + Math.cos(animationStep * 0.6) * 20;
        
        const x3 = 80 + Math.sin(animationStep * 0.9) * 15;
        const y3 = 20 + Math.cos(animationStep * 1.1) * 10;
        
        const gradientBackground = `
            radial-gradient(circle 600px at ${x1}% ${y1}%, rgba(0, 180, 216, 0.15) 0%, transparent 50%),
            radial-gradient(circle 800px at ${x2}% ${y2}%, rgba(24, 90, 219, 0.1) 0%, transparent 50%),
            radial-gradient(circle 400px at ${x3}% ${y3}%, rgba(30, 144, 255, 0.08) 0%, transparent 50%)
        `;
        
        if (backgroundAnimation) {
            backgroundAnimation.style.background = gradientBackground;
        }
        
        requestAnimationFrame(animateBackground);
    }
    
    animateBackground();
}

// ==================== UTILITY FUNCTIONS ==================== //
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

function getRandomLoadingMessage() {
    const messages = [
        'Loading awesome content...',
        'Preparing your adventure...',
        'Connecting to the community...',
        'Syncing your progress...',
        'Loading game world...',
        'Preparing multiplayer experience...'
    ];
    
    return messages[Math.floor(Math.random() * messages.length)];
}

// ==================== PERFORMANCE OPTIMIZATION ==================== //
// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ==================== ERROR HANDLING ==================== //
window.addEventListener('error', function(event) {
    console.log('Loading screen error:', event.error);
});

// ==================== CLEANUP ==================== //
window.addEventListener('beforeunload', function() {
    // Clean up any running intervals or animations
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    });
});
