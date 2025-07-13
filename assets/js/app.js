// Initialize Lucide icons
lucide.createIcons();

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
            const targetSection = link.getAttribute('href').substring(1);
            document.getElementById(targetSection).classList.add('active');
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
            assessmentQuestions.forEach(aq => aq.style.display = 'none');
            
            // Show corresponding questions
            const category = item.getAttribute('data-category');
            const targetQuestions = document.getElementById(category);
            if (targetQuestions) {
                targetQuestions.style.display = 'block';
            }
        });
    });
}

// Chart initialization
function initCharts() {
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
}

// Report generation simulation
function initReports() {
    const generateButtons = document.querySelectorAll('.template-card .btn-primary');
    
    generateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const template = button.closest('.template-card');
            const templateName = template.querySelector('h4').textContent;
            
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
            document.body.removeChild(notification);
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
            
            // Save to localStorage (in a real app, this would go to a backend)
            localStorage.setItem('assessmentProgress', JSON.stringify({
                score: score,
                timestamp: new Date().toISOString()
            }));
            
            showNotification('Assessment progress saved', 'success');
        });
    });
}

// Search functionality for frameworks and controls
function initSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search frameworks, controls, or regulations...';
    searchInput.className = 'global-search';
    
    // Add search styles
    searchInput.style.cssText = `
        width: 300px;
        padding: 0.5rem 1rem;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        font-size: 0.9rem;
    `;
    
    // Add search to navbar
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(searchInput);
    
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
    darkModeToggle.innerHTML = '<i data-lucide="moon"></i>';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.style.cssText = `
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: all 0.3s ease;
    `;
    
    const navbar = document.querySelector('.navbar');
    navbar.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        darkModeToggle.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
        
        // Re-create icons
        lucide.createIcons();
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
    
    // Load saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i data-lucide="sun"></i>';
    }
}

// Initialize tooltips for enhanced UX
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;
                z-index: 1000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                document.body.removeChild(tooltip);
            }
        });
    });
}

// Initialize application
function initApp() {
    initNavigation();
    initAssessment();
    initCharts();
    initReports();
    initAssessmentTracking();
    initSearch();
    initKeyboardShortcuts();
    initDarkMode();
    initTooltips();
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('Welcome to CyberSecurity Compass!', 'info');
    }, 1000);
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}