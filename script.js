document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'cursor-custom';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const speed = 0.1;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('.main-text, .status, .countdown-number, .social-link');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    // Social links interaction
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.dataset.platform;
            
            // Add click animation
            link.style.transform = 'scale(0.9)';
            setTimeout(() => {
                link.style.transform = '';
            }, 200);
            
            // You can add actual URLs here
            const urls = {
                instagram: 'https://instagram.com/yourusername',
                facebook: 'https://facebook.com/yourusername',
                email: 'mailto:your.email@shurovtech.com',
                discord: 'https://discord.gg/yourserver'
            };
            
            // For now, just log to console
            console.log(`Clicked ${platform}: ${urls[platform]}`);
            
            // Uncomment this to actually open the links:
            // window.open(urls[platform], '_blank');
        });
    });
    
    // Countdown timer
    function updateCountdown() {
        // Set launch date (30 days from now - you can change this)
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);
        
        const now = new Date();
        const difference = launchDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Simple hover effect
    const mainText = document.querySelector('.main-text');
    const status = document.querySelector('.status');
    
    // Add subtle animation on load
    setTimeout(() => {
        mainText.style.opacity = '0';
        mainText.style.transform = 'translateY(20px)';
        mainText.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            mainText.style.opacity = '1';
            mainText.style.transform = 'translateY(0)';
        }, 100);
    }, 100);
    
    // Console easter egg
    console.log('%c COMING SOON', 'color: #003566; font-size: 30px; font-weight: bold;');
    console.log('%c Minimal brutalist design', 'color: #ffffff; font-size: 16px;');
    console.log('%c Countdown active', 'color: #ffd60a; font-size: 14px;');
});
