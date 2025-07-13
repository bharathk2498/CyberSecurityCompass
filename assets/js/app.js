// Global error handling
window.addEventListener('error', function(e) {
    console.error('Script error:', e.error);
});

// Wait for DOM and external scripts to load
function waitForDependencies() {
    return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 50;
        
        function check() {
            attempts++;
            if (typeof lucide !== 'undefined' && typeof Chart !== 'undefined') {
                resolve();
            } else if (attempts < maxAttempts) {
                setTimeout(check, 100);
            } else {
                console.warn('Some dependencies failed to load');
                resolve();
            }
        }
        
        check();
    });
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(nl => nl.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetSection = link.getAttribute('data-section') || link.getAttribute('href').substring(1);
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
            }
        });
    });
}

// Assessment functionality
function initAssessment() {
    const categoryItems = document.querySelectorAll('.category-item');
    const assessmentQuestions = document.querySelectorAll('.assessment-questions');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all categories
            categoryItems.forEach(ci => ci.classList.remove('active'));
            
            // Add active class to clicked category
            item.classList.add('active');
            
            // Hide all assessment questions
            assessmentQuestions.forEach(aq => {
                aq.classList.remove('active');
                aq.style.display = 'none';
            });
            
            // Show corresponding questions
            const category = item.getAttribute('data-category');
            const targetQuestions = document.getElementById(category);
            if (targetQuestions) {
                targetQuestions.style.display = 'block';
                targetQuestions.classList.add('active');
            }
        });
    });
}

// Chart initialization with error handling
function initCharts() {
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded, skipping chart initialization');
        return;
    }

    try {
        // Security Posture Trends Chart
        const postureCtx = document.getElementById('postureChart');
        if (postureCtx) {
            new Chart(postureCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Security Score',
                        data: [65, 68, 70, 75, 78, 82],
                        borderColor: '#0066cc',
                        backgroundColor: 'rgba(0, 102, 204, 0.1)',
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Risk Level',
                        data: [85, 82, 78, 70, 65, 58],
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }

        // Framework Compliance Chart
        const complianceCtx = document.getElementById('complianceChart');
        if (complianceCtx) {
            new Chart(complianceCtx, {
                type: 'doughnut',
                data: {
                    labels: ['NIST CSF', 'ISO 27001', 'CIS Controls', 'SOC 2'],
                    datasets: [{
                        data: [78, 82, 74, 85],
                        backgroundColor: [
                            '#0066cc',
                            '#28a745',
                            '#ffc107',
                            '#17a2b8'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        }
                    }
                }
            });
        }

        // Compliance Score Chart
        const complianceScoreCtx = document.getElementById('complianceScoreChart');
        if (complianceScoreCtx) {
            new Chart(complianceScoreCtx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [87, 13],
                        backgroundColor: [
                            '#28a745',
                            '#e9ecef'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '80%',
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error('Error initializing charts:', error);
    }
}

// Report generation simulation
function initReports() {
    const generateButtons = document.querySelectorAll('.generate-report');
    
    generateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const template = button.getAttribute('data-template');
            const templateName = button.closest('.template-card').querySelector('h4').textContent;
            
            // Simulate report generation
            button.textContent = 'Generating...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Generated!';
                button.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    button.textContent = 'Generate Report';
                    button.disabled = false;
                    button.style.backgroundColor = '';
                }, 2000);
            }, 2000);
            
            // Show notification
            showNotification(`${templateName} generation started`, 'info');
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'info' ? '#17a2b8' : type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Assessment scoring
function calculateAssessmentScore() {
    const questions = document.querySelectorAll('.question-item');
    let totalScore = 0;
    let answeredQuestions = 0;
    
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
            answeredQuestions++;
        }
    });
    
    if (answeredQuestions > 0) {
        const averageScore = (totalScore / (answeredQuestions * 5)) * 100;
        return Math.round(averageScore);
    }
    
    return 0;
}

// Auto-save assessment progress
function initAssessmentTracking() {
    const radioButtons = document.querySelectorAll('.answer-options input[type="radio"]');
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const score = calculateAssessmentScore();
            
            // Update any score displays
            const scoreDisplays = document.querySelectorAll('.assessment-score');
            scoreDisplays.forEach(display => {
                display.textContent = `${score}%`;
            });
            
            // Save to localStorage
            try {
                localStorage.setItem('assessmentProgress', JSON.stringify({
                    score: score,
                    timestamp: new Date().toISOString()
                }));
                showNotification('Assessment progress saved', 'success');
            } catch (error) {
                console.warn('Could not save to localStorage:', error);
            }
        });
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search frameworks, controls...';
    searchInput.className = 'global-search';
    
    // Add search styles
    searchInput.style.cssText = `
        width: 250px;
        padding: 0.5rem 1rem;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        font-size: 0.9rem;
        margin-left: auto;
    `;
    
    // Add search to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(searchInput);
    }
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Search through framework cards
        const frameworkCards = document.querySelectorAll('.framework-card');
        frameworkCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
        
        // Search through regulation cards
        const regulationCards = document.querySelectorAll('.regulation-card');
        regulationCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Alt + number keys for quick navigation
        if (e.altKey && e.key >= '1' && e.key <= '5') {
            e.preventDefault();
            const navLinks = document.querySelectorAll('.nav-link');
            const index = parseInt(e.key) - 1;
            if (navLinks[index]) {
                navLinks[index].click();
            }
        }
        
        // Ctrl + / for search focus
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            const searchInput = document.querySelector('.global-search');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

// Dark mode toggle
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.title = 'Toggle Dark Mode';
    darkModeToggle.style.cssText = `
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
        font-size: 1.2rem;
        margin-left: 1rem;
    `;
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(darkModeToggle);
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        darkModeToggle.innerHTML = isDark ? '☀️' : '🌙';
        
        // Save preference
        try {
            localStorage.setItem('darkMode', isDark);
        } catch (error) {
            console.warn('Could not save dark mode preference:', error);
        }
    });
    
    // Load saved preference
    try {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '☀️';
        }
    } catch (error) {
        console.warn('Could not load dark mode preference:', error);
    }
}

// Initialize icons with fallback
function initIcons() {
    if (typeof lucide !== 'undefined') {
        try {
            lucide.createIcons();
        } catch (error) {
            console.warn('Error creating icons:', error);
        }
    } else {
        console.warn('Lucide icons not available');
        // Add fallback text for icons
        const iconElements = document.querySelectorAll('[data-lucide]');
        iconElements.forEach(element => {
            const iconName = element.getAttribute('data-lucide');
            element.textContent = iconName.charAt(0).toUpperCase();
        });
    }
}

// Initialize application
function initApp() {
    try {
        console.log('Initializing CyberSecurity Compass...');
        
        initNavigation();
        initAssessment();
        initCharts();
        initReports();
        initAssessmentTracking();
        initSearch();
        initKeyboardShortcuts();
        initDarkMode();
        initIcons();
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('Welcome to CyberSecurity Compass!', 'info');
        }, 1000);
        
        console.log('CyberSecurity Compass initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        showNotification('Error initializing application', 'error');
    }
}

// Initialize when dependencies are ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', async () => {
        await waitForDependencies();
        initApp();
    });
} else {
    waitForDependencies().then(() => {
        initApp();
    });
}

// Export for global access
window.initApp = initApp;
window.showNotification = showNotification;