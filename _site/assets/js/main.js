
// Align Chronicles - Terminal Blog JavaScript
// Handles interactive terminal effects and functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize terminal effects
    initializeTerminalEffects();
    initializeUptime();
    initializeTypingEffect();
    initializeMatrixEffect();
});

function initializeTerminalEffects() {
    // Add terminal cursor effect
    const commands = document.querySelectorAll('.terminal-command');
    commands.forEach(command => {
        // Add typing effect to commands
        const text = command.textContent;
        command.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                command.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 30);
            } else {
                // Add blinking cursor
                const cursor = document.createElement('span');
                cursor.className = 'terminal-cursor-blink';
                cursor.textContent = '_';
                command.appendChild(cursor);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, Math.random() * 1000 + 500);
    });
}

function initializeUptime() {
    const uptimeElement = document.getElementById('uptime');
    if (!uptimeElement) return;
    
    const startTime = Date.now();
    
    function updateUptime() {
        const currentTime = Date.now();
        const uptime = Math.floor((currentTime - startTime) / 1000);
        
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = uptime % 60;
        
        uptimeElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Update every second
    setInterval(updateUptime, 1000);
    updateUptime();
}

function initializeTypingEffect() {
    // Add typing effect to post titles when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                typeText(entry.target);
                entry.target.classList.add('typed');
            }
        });
    });
    
    const postTitles = document.querySelectorAll('.terminal-post-title, .terminal-page-title');
    postTitles.forEach(title => {
        observer.observe(title);
    });
}

function typeText(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid #00ffff';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, Math.random() * 100 + 50);
        } else {
            // Remove cursor after typing is done
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    typeWriter();
}

function initializeMatrixEffect() {
    // Subtle matrix-like effect in the background
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    // Run matrix effect at low frequency
    setInterval(drawMatrix, 100);
}

// Smooth scrolling for anchor links
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

// Add glitch effect on hover for important elements
function addGlitchEffect(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
            setTimeout(() => {
                this.classList.remove('glitch');
            }, 200);
        });
    });
}

// Apply glitch effect to titles and links
addGlitchEffect('.terminal-post-title');
addGlitchEffect('.terminal-page-title');
addGlitchEffect('.terminal-nav-item .terminal-link');

// CSS for glitch effect (injected via JavaScript)
const glitchCSS = `
    .glitch {
        animation: glitch 0.2s linear infinite;
    }
    
    @keyframes glitch {
        0% { transform: translate(0); }
        10% { transform: translate(-1px, -1px); }
        20% { transform: translate(1px, 1px); }
        30% { transform: translate(-1px, 1px); }
        40% { transform: translate(1px, -1px); }
        50% { transform: translate(-1px, -1px); }
        60% { transform: translate(1px, 1px); }
        70% { transform: translate(-1px, 1px); }
        80% { transform: translate(1px, -1px); }
        90% { transform: translate(-1px, -1px); }
        100% { transform: translate(0); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = glitchCSS;
document.head.appendChild(styleSheet);

// Console Easter Egg
console.log(`
    ╔═══════════════════════════════════════════════════════════════════════════════╗
    ║                              ALIGN CHRONICLES                                 ║  
    ║                         Terminal Access Granted                              ║
    ║                                                                               ║
    ║  Welcome to the cyberpunk future. You've found the developer console.       ║
    ║  Try typing: alignchronicles.hack() for hidden features                      ║
    ╚═══════════════════════════════════════════════════════════════════════════════╝
`);

// Hidden console commands
window.alignchronicles = {
    hack: function() {
        console.log(`
            Access Level: ADMIN
            Initiating neural link...
            ████████████████████████ 100%
            
            Hidden Commands Available:
            - alignchronicles.matrix() - Toggle matrix effect
            - alignchronicles.glitch() - Apply glitch to all elements
            - alignchronicles.terminal() - Terminal mode info
        `);
    },
    
    matrix: function() {
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.opacity = canvas.style.opacity === '0.3' ? '0.1' : '0.3';
            console.log('Matrix effect intensity toggled');
        }
    },
    
    glitch: function() {
        document.body.classList.add('glitch');
        setTimeout(() => {
            document.body.classList.remove('glitch');
        }, 1000);
        console.log('System glitch initiated');
    },
    
    terminal: function() {
        console.log(`
            SYSTEM STATUS:
            - Framework: Jekyll ${window.jekyll?.version || 'Unknown'}
            - Theme: Align Chronicles Terminal
            - Status: ONLINE
            - Security: ENCRYPTED
            - Neural Interface: ACTIVE
        `);
    }
};
