// Enhanced global error handling
window.addEventListener('error', function(e) {
    console.error('🔥 Script error:', e.error);
});

// Particle System
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Dynamic loading text
function animateLoadingText() {
    const loadingTexts = [
        'Initializing Security Protocols...',
        'Loading Threat Intelligence...',
        'Establishing Secure Connections...',
        'Calibrating Risk Sensors...',
        'Activating Defense Systems...',
        'Welcome to CyberSecurity Compass'
    ];
    
    let currentIndex = 0;
    const loadingElement = document.querySelector('.loading div:last-child');
    
    if (loadingElement) {
        const interval = setInterval(() => {
            loadingElement.textContent = loadingTexts[currentIndex];
            currentIndex = (currentIndex + 1) % loadingTexts.length;
            
            if (currentIndex === loadingTexts.length - 1) {
                clearInterval(interval);
            }
        }, 500);
    }
}

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
                console.warn('⚠️ Some dependencies failed to load');
                resolve();
            }
        }
        
        check();
    });
}

// Enhanced Navigation with smooth transitions
function initNavigation() {
    console.log('🧭 Initializing navigation...');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🎯 Navigation clicked:', link.textContent);
            
            // Add loading effect
            link.style.opacity = '0.7';
            setTimeout(() => {
                link.style.opacity = '1';
            }, 200);
            
            // Remove active class from all links and sections
            navLinks.forEach(nl => nl.classList.remove('active'));
            sections.forEach(section => {
                section.classList.remove('active');
                section.style.transform = 'translateY(20px)';
                section.style.opacity = '0';
            });
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section with animation
            const targetSection = link.getAttribute('data-section') || link.getAttribute('href').substring(1);
            const section = document.getElementById(targetSection);
            if (section) {
                setTimeout(() => {
                    section.classList.add('active');
                    section.style.transform = 'translateY(0)';
                    section.style.opacity = '1';
                }, 100);
                console.log('✅ Switched to section:', targetSection);
                
                // Trigger section-specific animations
                triggerSectionAnimations(targetSection);
            } else {
                console.error('❌ Section not found:', targetSection);
            }
        });
    });
}

// Section-specific animations
function triggerSectionAnimations(sectionName) {
    switch(sectionName) {
        case 'dashboard':
            animateKPICards();
            break;
        case 'assessment':
            animateAssessmentCategories();
            break;
        case 'frameworks':
            animateFrameworkCards();
            break;
        case 'compliance':
            animateComplianceCards();
            break;
        case 'reports':
            animateReportTemplates();
            break;
    }
}

// Animate KPI Cards
function animateKPICards() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach((card, index) => {
        card.style.transform = 'translateY(30px)';
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 150);
    });
}

// Animate Assessment Categories
function animateAssessmentCategories() {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach((category, index) => {
        category.style.transform = 'translateX(-30px)';
        category.style.opacity = '0';
        setTimeout(() => {
            category.style.transform = 'translateX(0)';
            category.style.opacity = '1';
        }, index * 100);
    });
}

// Animate Framework Cards
function animateFrameworkCards() {
    const frameworkCards = document.querySelectorAll('.framework-card');
    frameworkCards.forEach((card, index) => {
        card.style.transform = 'scale(0.8) rotateY(15deg)';
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transform = 'scale(1) rotateY(0deg)';
            card.style.opacity = '1';
        }, index * 200);
    });
}

// Animate Compliance Cards
function animateComplianceCards() {
    const complianceCards = document.querySelectorAll('.regulation-card');
    complianceCards.forEach((card, index) => {
        card.style.transform = 'translateY(20px) rotateX(10deg)';
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.transform = 'translateY(0) rotateX(0deg)';
            card.style.opacity = '1';
        }, index * 120);
    });
}

// Animate Report Templates
function animateReportTemplates() {
    const templates = document.querySelectorAll('.template-card');
    templates.forEach((template, index) => {
        template.style.transform = 'scale(0.9)';
        template.style.opacity = '0';
        setTimeout(() => {
            template.style.transform = 'scale(1)';
            template.style.opacity = '1';
        }, index * 100);
    });
}

// Enhanced Assessment functionality with spectacular effects
function initAssessment() {
    console.log('🎯 Initializing dynamic assessment...');
    
    setTimeout(() => {
        const categoryItems = document.querySelectorAll('.category-item');
        const assessmentQuestions = document.querySelectorAll('.assessment-questions');
        
        console.log('📊 Found category items:', categoryItems.length);
        console.log('❓ Found assessment questions:', assessmentQuestions.length);

        if (categoryItems.length === 0) {
            console.error('❌ No category items found!');
            return;
        }

        categoryItems.forEach((item, index) => {
            console.log(`🔧 Setting up category ${index}:`, item.textContent.trim());
            
            // Enhanced click handler with animations
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
            
            newItem.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('🎯 Category clicked:', newItem.textContent.trim());
                
                // Visual feedback
                newItem.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    newItem.style.transform = 'scale(1)';
                }, 150);
                
                // Remove active class from all categories with animation
                document.querySelectorAll('.category-item').forEach(ci => {
                    ci.classList.remove('active');
                    ci.style.transform = 'translateX(0)';
                });
                
                // Add active class to clicked category
                newItem.classList.add('active');
                newItem.style.transform = 'translateX(10px)';
                
                // Hide all assessment questions with fade effect
                document.querySelectorAll('.assessment-questions').forEach(aq => {
                    aq.style.opacity = '0';
                    aq.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        aq.classList.remove('active');
                        aq.style.display = 'none';
                    }, 200);
                });
                
                // Show corresponding questions with dramatic entrance
                const category = newItem.getAttribute('data-category');
                console.log('🔍 Looking for category:', category);
                
                const targetQuestions = document.getElementById(category);
                if (targetQuestions) {
                    setTimeout(() => {
                        targetQuestions.style.display = 'block';
                        targetQuestions.classList.add('active');
                        
                        // Animate questions in
                        setTimeout(() => {
                            targetQuestions.style.opacity = '1';
                            targetQuestions.style.transform = 'translateX(0)';
                            
                            // Animate individual questions
                            const questions = targetQuestions.querySelectorAll('.question-item');
                            questions.forEach((q, idx) => {
                                q.style.opacity = '0';
                                q.style.transform = 'translateY(20px)';
                                setTimeout(() => {
                                    q.style.opacity = '1';
                                    q.style.transform = 'translateY(0)';
                                }, idx * 100);
                            });
                        }, 100);
                    }, 250);
                    
                    console.log('✅ Switched to questions:', category);
                    
                    // Show success notification
                    showNotification(`📋 Loaded ${category.charAt(0).toUpperCase() + category.slice(1)} Assessment`, 'info');
                } else {
                    console.error('❌ Questions not found for category:', category);
                    showNotification('❌ Assessment category not found', 'error');
                }
            });
        });
        
        // Auto-click first category with delay for effect
        setTimeout(() => {
            const firstCategory = document.querySelector('.category-item.active');
            if (firstCategory) {
                firstCategory.click();
            }
        }, 500);
    }, 800);
}

// Enhanced Chart initialization with stunning visuals
function initCharts() {
    console.log('📊 Initializing dynamic charts...');
    
    if (typeof Chart === 'undefined') {
        console.warn('⚠️ Chart.js not loaded, skipping chart initialization');
        return;
    }

    try {
        // Enhanced Security Posture Trends Chart
        const postureCtx = document.getElementById('postureChart');
        if (postureCtx) {
            new Chart(postureCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Security Score',
                        data: [65, 68, 70, 75, 78, 82],
                        borderColor: '#00ff88',
                        backgroundColor: 'rgba(0, 255, 136, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3,
                        pointBackgroundColor: '#00ff88',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        shadowColor: 'rgba(0, 255, 136, 0.5)',
                        shadowBlur: 10
                    }, {
                        label: 'Risk Level',
                        data: [85, 82, 78, 70, 65, 58],
                        borderColor: '#ff4757',
                        backgroundColor: 'rgba(255, 71, 87, 0.1)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 3,
                        pointBackgroundColor: '#ff4757',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        pointHoverRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                }
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: '#00ff88',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'rgba(255, 255, 255, 0.2)'
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.7)'
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
            console.log('✅ Posture chart created with enhancements');
        }

        // Enhanced Framework Compliance Chart
        const complianceCtx = document.getElementById('complianceChart');
        if (complianceCtx) {
            new Chart(complianceCtx, {
                type: 'doughnut',
                data: {
                    labels: ['NIST CSF', 'ISO 27001', 'CIS Controls', 'SOC 2'],
                    datasets: [{
                        data: [78, 82, 74, 85],
                        backgroundColor: [
                            '#667eea',
                            '#00ff88',
                            '#ff6b35',
                            '#3742fa'
                        ],
                        borderWidth: 0,
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                font: {
                                    size: 12,
                                    weight: 'bold'
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: '#00ff88',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    return context.label + ': ' + context.parsed + '%';
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
            console.log('✅ Compliance chart created with enhancements');
        }

        // Enhanced Compliance Score Chart
        const complianceScoreCtx = document.getElementById('complianceScoreChart');
        if (complianceScoreCtx) {
            new Chart(complianceScoreCtx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [87, 13],
                        backgroundColor: [
                            '#00ff88',
                            'rgba(255, 255, 255, 0.1)'
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
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    animation: {
                        duration: 3000,
                        easing: 'easeInOutQuart'
                    }
                }
            });
            console.log('✅ Compliance score chart created with enhancements');
        }
        
        // Animate chart containers
        setTimeout(() => {
            document.querySelectorAll('.chart-container').forEach((container, index) => {
                container.style.transform = 'scale(0.9) translateY(20px)';
                container.style.opacity = '0';
                setTimeout(() => {
                    container.style.transform = 'scale(1) translateY(0)';
                    container.style.opacity = '1';
                }, index * 300);
            });
        }, 500);
        
    } catch (error) {
        console.error('❌ Error initializing charts:', error);
    }
}

// Enhanced Report generation with spectacular effects
function initReports() {
    console.log('📄 Initializing dynamic reports...');
    const generateButtons = document.querySelectorAll('.generate-report');
    
    generateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const template = button.getAttribute('data-template');
            const templateCard = button.closest('.template-card');
            const templateName = templateCard.querySelector('h4').textContent;
            
            console.log('🚀 Generating report:', templateName);
            
            // Visual effects during generation
            templateCard.style.transform = 'scale(1.05)';
            button.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            button.textContent = '🔄 Generating...';
            button.disabled = true;
            
            // Add shimmer effect
            templateCard.style.background = 'linear-gradient(45deg, rgba(0, 255, 136, 0.1), rgba(55, 66, 250, 0.1))';
            
            setTimeout(() => {
                button.textContent = '✅ Generated!';
                button.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
                templateCard.style.transform = 'scale(1)';
                templateCard.style.background = '';
                
                // Celebration effect
                createSuccessParticles(templateCard);
                
                setTimeout(() => {
                    button.textContent = 'Generate Report';
                    button.disabled = false;
                    button.style.background = '';
                }, 3000);
            }, 2500);
            
            // Show enhanced notification
            showNotification(`🎯 ${templateName} generation initiated!`, 'info');
            
            setTimeout(() => {
                showNotification(`📊 ${templateName} ready for download!`, 'success');
            }, 3000);
        });
    });
}

// Create success particles effect
function createSuccessParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: #00ff88;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 10) * Math.PI * 2;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0, opacity = 1;
        
        function animate() {
            x += vx * 0.01;
            y += vy * 0.01;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(particle);
            }
        }
        
        animate();
    }
}

// Enhanced Notification system with stunning effects
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => {
        n.style.transform = 'translateX(400px) rotateY(90deg)';
        setTimeout(() => n.remove(), 300);
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Enhanced notification structure
    const icon = type === 'info' ? '🔮' : type === 'success' ? '✨' : type === 'error' ? '⚡' : '🎯';
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.2rem;">${icon}</span>
            <span>${message}</span>
        </div>
    `;
    
    const colors = {
        info: 'linear-gradient(135deg, #3742fa, #2f3542)',
        success: 'linear-gradient(135deg, #00ff88, #00cc66)',
        error: 'linear-gradient(135deg, #ff4757, #ff3838)',
        warning: 'linear-gradient(135deg, #ff6b35, #f39c12)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${colors[type]};
        color: white;
        border-radius: 12px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transform: translateX(400px) rotateY(90deg);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 350px;
        word-wrap: break-word;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0) rotateY(0deg)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px) rotateY(90deg)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, 4000);
}

// Enhanced Assessment scoring with real-time updates
function calculateAssessmentScore() {
    const questions = document.querySelectorAll('.question-item');
    let totalScore = 0;
    let answeredQuestions = 0;
    let maxPossibleScore = 0;
    
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        const allOptions = question.querySelectorAll('input[type="radio"]');
        
        if (selectedOption) {
            totalScore += parseInt(selectedOption.value);
            answeredQuestions++;
        }
        
        // Find max value for this question
        let maxValue = 0;
        allOptions.forEach(option => {
            const value = parseInt(option.value);
            if (value > maxValue) maxValue = value;
        });
        maxPossibleScore += maxValue;
    });
    
    if (answeredQuestions > 0) {
        const actualMaxScore = answeredQuestions * 5; // Assuming max score per question is 5
        const percentage = Math.round((totalScore / actualMaxScore) * 100);
        
        // Update any score displays with animation
        updateScoreDisplays(percentage, answeredQuestions, questions.length);
        
        return percentage;
    }
    
    return 0;
}

// Update score displays with animations
function updateScoreDisplays(score, answered, total) {
    const scoreDisplays = document.querySelectorAll('.assessment-score');
    scoreDisplays.forEach(display => {
        // Animate score change
        const currentScore = parseInt(display.textContent) || 0;
        animateValue(display, currentScore, score, 500, '%');
    });
    
    // Show progress notification
    if (answered === total) {
        showNotification(`🎉 Assessment completed! Final score: ${score}%`, 'success');
    } else {
        showNotification(`📊 Progress: ${answered}/${total} questions (${score}% current)`, 'info');
    }
}

// Animate numerical values
function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const current = Math.round(start + (range * easeProgress));
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Enhanced Assessment tracking with visual feedback
function initAssessmentTracking() {
    console.log('📊 Initializing enhanced assessment tracking...');
    
    document.addEventListener('change', (e) => {
        if (e.target.type === 'radio' && e.target.closest('.answer-options')) {
            // Visual feedback for selection
            const questionItem = e.target.closest('.question-item');
            questionItem.style.borderColor = '#00ff88';
            questionItem.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)';
            
            setTimeout(() => {
                questionItem.style.borderColor = '';
                questionItem.style.boxShadow = '';
            }, 1000);
            
            const score = calculateAssessmentScore();
            console.log('📊 Assessment score updated:', score);
            
            // Save to localStorage with enhanced data
            try {
                const assessmentData = {
                    score: score,
                    timestamp: new Date().toISOString(),
                    category: e.target.closest('.assessment-questions')?.id || 'unknown',
                    questionId: e.target.name
                };
                
                localStorage.setItem('assessmentProgress', JSON.stringify(assessmentData));
                showNotification('💾 Progress automatically saved', 'success');
            } catch (error) {
                console.warn('⚠️ Could not save to localStorage:', error);
            }
        }
    });
}

// Enhanced Search with real-time filtering
function initSearch() {
    console.log('🔍 Initializing dynamic search...');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 Search frameworks, controls, threats...';
    searchInput.className = 'global-search';
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(searchInput);
    }
    
    // Enhanced search with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            performSearch(searchTerm);
        }, 300);
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = e.target.value.toLowerCase();
            performSearch(searchTerm);
            showNotification(`🔍 Searching for: "${searchTerm}"`, 'info');
        }
    });
}

// Enhanced search function
function performSearch(searchTerm) {
    const searchableElements = [
        ...document.querySelectorAll('.framework-card'),
        ...document.querySelectorAll('.regulation-card'),
        ...document.querySelectorAll('.kpi-card'),
        ...document.querySelectorAll('.template-card')
    ];
    
    let matchCount = 0;
    
    searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        const matches = text.includes(searchTerm);
        
        if (searchTerm === '' || matches) {
            element.style.display = 'block';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
            if (matches && searchTerm !== '') matchCount++;
        } else {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            setTimeout(() => {
                element.style.display = 'none';
            }, 200);
        }
    });
    
    if (searchTerm && matchCount === 0) {
        showNotification('🔍 No results found for your search', 'warning');
    } else if (searchTerm && matchCount > 0) {
        showNotification(`✅ Found ${matchCount} results`, 'success');
    }
}

// Enhanced Keyboard shortcuts with visual feedback
function initKeyboardShortcuts() {
    console.log('⌨️ Initializing enhanced keyboard shortcuts...');
    
    document.addEventListener('keydown', (e) => {
        // Alt + number keys for navigation
        if (e.altKey && e.key >= '1' && e.key <= '5') {
            e.preventDefault();
            const navLinks = document.querySelectorAll('.nav-link');
            const index = parseInt(e.key) - 1;
            if (navLinks[index]) {
                navLinks[index].click();
                showNotification(`🎯 Quick navigation: ${navLinks[index].textContent}`, 'info');
            }
        }
        
        // Ctrl + / for search focus
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            const searchInput = document.querySelector('.global-search');
            if (searchInput) {
                searchInput.focus();
                searchInput.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.5)';
                setTimeout(() => {
                    searchInput.style.boxShadow = '';
                }, 1000);
                showNotification('🔍 Search activated', 'info');
            }
        }
        
        // Esc to clear search
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('.global-search');
            if (searchInput && searchInput.value) {
                searchInput.value = '';
                performSearch('');
                showNotification('🔍 Search cleared', 'info');
            }
        }
    });
}

// Enhanced Dark mode with smooth transitions
function initDarkMode() {
    console.log('🌙 Initializing enhanced dark mode...');
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌙';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.title = 'Toggle Dark Mode';
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(darkModeToggle);
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        
        // Animated icon change
        darkModeToggle.style.transform = 'scale(0.8) rotateY(180deg)';
        setTimeout(() => {
            darkModeToggle.innerHTML = isDark ? '☀️' : '🌙';
            darkModeToggle.style.transform = 'scale(1) rotateY(0deg)';
        }, 200);
        
        // Save preference
        try {
            localStorage.setItem('darkMode', isDark);
            showNotification(`${isDark ? '🌙' : '☀️'} ${isDark ? 'Dark' : 'Light'} mode activated`, 'info');
        } catch (error) {
            console.warn('⚠️ Could not save dark mode preference:', error);
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
        console.warn('⚠️ Could not load dark mode preference:', error);
    }
}

// Enhanced Icons initialization
function initIcons() {
    console.log('🎨 Initializing enhanced icons...');
    if (typeof lucide !== 'undefined') {
        try {
            lucide.createIcons();
            console.log('✅ Icons created successfully');
            
            // Add hover effects to icons
            document.querySelectorAll('[data-lucide]').forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    icon.style.transform = 'scale(1.1) rotate(10deg)';
                });
                icon.addEventListener('mouseleave', () => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                });
            });
        } catch (error) {
            console.warn('⚠️ Error creating icons:', error);
        }
    } else {
        console.warn('⚠️ Lucide icons not available');
    }
}

// Real-time clock for dashboard
function initRealTimeClock() {
    const clockElement = document.createElement('div');
    clockElement.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        z-index: 999;
        background: rgba(0, 0, 0, 0.3);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        backdrop-filter: blur(10px);
    `;
    
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        clockElement.textContent = `🕐 ${timeString}`;
    }
    
    document.body.appendChild(clockElement);
    updateClock();
    setInterval(updateClock, 1000);
}

// Enhanced Debug function
function testAssessment() {
    console.log('=== 🔍 ENHANCED ASSESSMENT DEBUG ===');
    console.log('Categories:', document.querySelectorAll('.category-item').length);
    console.log('Questions:', document.querySelectorAll('.assessment-questions').length);
    console.log('Active category:', document.querySelector('.category-item.active')?.textContent);
    console.log('Visible questions:', document.querySelector('.assessment-questions[style*="block"]')?.id);
    
    // Test category switching
    const categories = document.querySelectorAll('.category-item');
    categories.forEach((cat, index) => {
        console.log(`Category ${index}:`, {
            text: cat.textContent.trim(),
            dataCategory: cat.getAttribute('data-category'),
            isActive: cat.classList.contains('active')
        });
    });
    
    showNotification('🔍 Debug info logged to console', 'info');
}

// Initialize application with enhanced features
function initApp() {
    try {
        console.log('🚀 Initializing Enhanced CyberSecurity Compass...');
        
        // Create particle background
        createParticles();
        
        // Initialize all modules
        initNavigation();
        initAssessment();
        initCharts();
        initReports();
        initAssessmentTracking();
        initSearch();
        initKeyboardShortcuts();
        initDarkMode();
        initIcons();
        initRealTimeClock();
        
        // Animate loading text
        animateLoadingText();
        
        // Auto-trigger dashboard animations
        setTimeout(() => {
            triggerSectionAnimations('dashboard');
        }, 1000);
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('🎉 CyberSecurity Compass Enhanced - Ready for Action!', 'success');
        }, 2000);
        
        // Show keyboard shortcuts tip
        setTimeout(() => {
            showNotification('💡 Tip: Use Alt+1-5 for quick navigation, Ctrl+/ for search', 'info');
        }, 5000);
        
        console.log('✅ Enhanced CyberSecurity Compass initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing enhanced app:', error);
        showNotification('❌ Error initializing application', 'error');
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
window.testAssessment = testAssessment;
window.createSuccessParticles = createSuccessParticles;
window.performSearch = performSearch;