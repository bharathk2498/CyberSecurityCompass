// Enhanced global error handling and stunning effects
window.addEventListener('error', function(e) {
    console.error('🔥 Script error:', e.error);
    showNotification('⚡ System error detected - Auto-recovering...', 'error');
});

// Global references for external access
window.cybersecurityCompass = {
    showNotification,
    calculateAssessmentScore,
    initCharts,
    testAssessment,
    version: '2.0.0',
    theme: 'cyberpunk'
};

// Enhanced Particle System with stunning effects
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(particlesContainer);
    
    const colors = ['#00ff88', '#667eea', '#ff6b35', '#3742fa', '#ff4757'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleMove ${Math.random() * 10 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 ${Math.random() * 20 + 10}px currentColor;
            opacity: ${Math.random() * 0.8 + 0.2};
        `;
        particlesContainer.appendChild(particle);
    }
    
    console.log('✨ Enhanced particle system initialized');
}

// Enhanced dynamic loading text with cyberpunk effects
function animateLoadingText() {
    const loadingTexts = [
        '🔐 Initializing Quantum Security Protocols...',
        '🛡️ Loading Neural Threat Intelligence...',
        '⚡ Establishing Encrypted Connections...',
        '🎯 Calibrating AI Risk Sensors...',
        '🚀 Activating Cyber Defense Matrix...',
        '✨ Deploying Security Algorithms...',
        '🔮 Synchronizing Threat Database...',
        '🌟 Welcome to CyberSecurity Compass Elite'
    ];
    
    let currentIndex = 0;
    const loadingSubtitle = document.querySelector('.loading-subtitle');
    
    if (loadingSubtitle) {
        const interval = setInterval(() => {
            loadingSubtitle.style.opacity = '0';
            loadingSubtitle.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                loadingSubtitle.textContent = loadingTexts[currentIndex];
                loadingSubtitle.style.opacity = '1';
                loadingSubtitle.style.transform = 'translateY(0)';
                currentIndex = (currentIndex + 1) % loadingTexts.length;
                
                if (currentIndex === 0) {
                    clearInterval(interval);
                }
            }, 300);
        }, 800);
    }
}

// Enhanced dependency waiting with retry mechanism
function waitForDependencies() {
    return new Promise((resolve) => {
        let attempts = 0;
        const maxAttempts = 100;
        
        function check() {
            attempts++;
            const lucideLoaded = typeof lucide !== 'undefined';
            const chartLoaded = typeof Chart !== 'undefined';
            
            if (lucideLoaded && chartLoaded) {
                console.log('✅ All dependencies loaded successfully');
                resolve();
            } else if (attempts < maxAttempts) {
                console.log(`⏳ Waiting for dependencies... (${attempts}/${maxAttempts})`);
                setTimeout(check, 100);
            } else {
                console.warn('⚠️ Some dependencies failed to load, proceeding anyway');
                resolve();
            }
        }
        
        check();
    });
}

// Enhanced Navigation with spectacular transitions
function initNavigation() {
    console.log('🧭 Initializing enhanced navigation...');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🎯 Navigation clicked:', link.textContent);
            
            // Enhanced visual feedback
            link.style.transform = 'scale(0.95) rotateX(10deg)';
            link.style.filter = 'brightness(1.2)';
            
            setTimeout(() => {
                link.style.transform = 'scale(1) rotateX(0deg)';
                link.style.filter = 'brightness(1)';
            }, 200);
            
            // Remove active class from all links with stagger animation
            navLinks.forEach((nl, index) => {
                setTimeout(() => {
                    nl.classList.remove('active');
                    nl.style.transform = 'translateY(0)';
                }, index * 50);
            });
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Hide all sections with spectacular exit
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(30px) rotateX(15deg)';
                    section.style.filter = 'blur(5px)';
                    
                    setTimeout(() => {
                        section.classList.remove('active');
                    }, 300);
                }, index * 100);
            });
            
            // Show corresponding section with dramatic entrance
            const targetSection = link.getAttribute('data-section') || link.getAttribute('href').substring(1);
            const section = document.getElementById(targetSection);
            
            if (section) {
                setTimeout(() => {
                    section.classList.add('active');
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(50px) rotateX(-15deg)';
                    section.style.filter = 'blur(10px)';
                    
                    setTimeout(() => {
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0) rotateX(0deg)';
                        section.style.filter = 'blur(0px)';
                        
                        // Animate section contents
                        const elements = section.querySelectorAll('.kpi-card, .chart-container, .risk-item, .assessment-container');
                        elements.forEach((el, idx) => {
                            el.style.opacity = '0';
                            el.style.transform = 'translateY(20px) scale(0.9)';
                            
                            setTimeout(() => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0) scale(1)';
                            }, idx * 150);
                        });
                    }, 100);
                }, 500);
                
                console.log('✅ Switched to section:', targetSection);
                showNotification(`🎯 Switched to ${targetSection.charAt(0).toUpperCase() + targetSection.slice(1)}`, 'info');
            }
        });
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
            showNotification('❌ Assessment categories not found', 'error');
            return;
        }

        categoryItems.forEach((item, index) => {
            console.log(`🔧 Setting up category ${index}:`, item.textContent.trim());
            
            // Enhanced click handler with spectacular animations
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
            
            newItem.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('🎯 Category clicked:', newItem.textContent.trim());
                
                // Spectacular visual feedback
                newItem.style.transform = 'scale(0.9) rotateY(10deg)';
                newItem.style.filter = 'brightness(1.3) saturate(1.5)';
                newItem.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
                
                setTimeout(() => {
                    newItem.style.transform = 'scale(1) rotateY(0deg)';
                    newItem.style.filter = 'brightness(1) saturate(1)';
                }, 200);
                
                // Remove active class from all categories with wave animation
                document.querySelectorAll('.category-item').forEach((ci, idx) => {
                    setTimeout(() => {
                        ci.classList.remove('active');
                        ci.style.transform = 'translateX(0) scale(1)';
                        ci.style.filter = 'brightness(1)';
                    }, idx * 100);
                });
                
                // Add active class to clicked category
                setTimeout(() => {
                    newItem.classList.add('active');
                    newItem.style.transform = 'translateX(10px) scale(1.05)';
                    newItem.style.filter = 'brightness(1.1)';
                }, 300);
                
                // Hide all assessment questions with spectacular exit
                document.querySelectorAll('.assessment-questions').forEach((aq, idx) => {
                    setTimeout(() => {
                        aq.style.opacity = '0';
                        aq.style.transform = 'translateX(-30px) rotateY(-15deg)';
                        aq.style.filter = 'blur(5px)';
                        
                        setTimeout(() => {
                            aq.classList.remove('active');
                            aq.style.display = 'none';
                        }, 300);
                    }, idx * 50);
                });
                
                // Show corresponding questions with dramatic entrance
                const category = newItem.getAttribute('data-category');
                console.log('🔍 Looking for category:', category);
                
                const targetQuestions = document.getElementById(category);
                if (targetQuestions) {
                    setTimeout(() => {
                        targetQuestions.style.display = 'block';
                        targetQuestions.classList.add('active');
                        targetQuestions.style.opacity = '0';
                        targetQuestions.style.transform = 'translateX(30px) rotateY(15deg)';
                        targetQuestions.style.filter = 'blur(10px)';
                        
                        setTimeout(() => {
                            targetQuestions.style.opacity = '1';
                            targetQuestions.style.transform = 'translateX(0) rotateY(0deg)';
                            targetQuestions.style.filter = 'blur(0px)';
                            
                            // Animate individual questions with stagger
                            const questions = targetQuestions.querySelectorAll('.question-item');
                            questions.forEach((q, idx) => {
                                q.style.opacity = '0';
                                q.style.transform = 'translateY(30px) scale(0.9)';
                                q.style.filter = 'blur(5px)';
                                
                                setTimeout(() => {
                                    q.style.opacity = '1';
                                    q.style.transform = 'translateY(0) scale(1)';
                                    q.style.filter = 'blur(0px)';
                                }, idx * 200);
                            });
                        }, 200);
                    }, 600);
                    
                    console.log('✅ Switched to questions:', category);
                    showNotification(`📋 Loaded ${category.charAt(0).toUpperCase() + category.slice(1)} Assessment`, 'success');
                } else {
                    console.error('❌ Questions not found for category:', category);
                    showNotification('❌ Assessment category not found', 'error');
                }
            });
        });
        
        // Auto-click first category with spectacular delay
        setTimeout(() => {
            const firstCategory = document.querySelector('.category-item.active') || document.querySelector('.category-item');
            if (firstCategory) {
                firstCategory.click();
            }
        }, 1000);
    }, 1000);
}

// Enhanced Chart initialization with stunning visuals
function initCharts() {
    console.log('📊 Initializing spectacular charts...');
    
    if (typeof Chart === 'undefined') {
        console.warn('⚠️ Chart.js not loaded, creating placeholder charts');
        createPlaceholderCharts();
        return;
    }

    try {
        // Enhanced Security Posture Trends Chart with cyberpunk theme
        const postureCtx = document.getElementById('postureChart');
        if (postureCtx) {
            const gradient1 = postureCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
            gradient1.addColorStop(0, 'rgba(0, 255, 136, 0.4)');
            gradient1.addColorStop(1, 'rgba(0, 255, 136, 0.1)');
            
            const gradient2 = postureCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
            gradient2.addColorStop(0, 'rgba(255, 71, 87, 0.4)');
            gradient2.addColorStop(1, 'rgba(255, 71, 87, 0.1)');

            new Chart(postureCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    datasets: [{
                        label: '🛡️ Security Score',
                        data: [65, 68, 72, 75, 78, 82, 85, 87],
                        borderColor: '#00ff88',
                        backgroundColor: gradient1,
                        tension: 0.4,
                        fill: true,
                        borderWidth: 4,
                        pointBackgroundColor: '#00ff88',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 8,
                        pointHoverRadius: 12,
                        pointHoverBackgroundColor: '#00ff88',
                        pointHoverBorderColor: '#ffffff',
                        pointHoverBorderWidth: 4,
                        shadowColor: 'rgba(0, 255, 136, 0.8)',
                        shadowBlur: 20
                    }, {
                        label: '⚡ Risk Level',
                        data: [85, 82, 78, 75, 70, 65, 60, 58],
                        borderColor: '#ff4757',
                        backgroundColor: gradient2,
                        tension: 0.4,
                        fill: true,
                        borderWidth: 4,
                        pointBackgroundColor: '#ff4757',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 8,
                        pointHoverRadius: 12,
                        pointHoverBackgroundColor: '#ff4757',
                        pointHoverBorderColor: '#ffffff',
                        pointHoverBorderWidth: 4
                    }, {
                        label: '🎯 Compliance',
                        data: [45, 52, 58, 65, 72, 78, 83, 89],
                        borderColor: '#3742fa',
                        backgroundColor: 'rgba(55, 66, 250, 0.2)',
                        tension: 0.4,
                        fill: true,
                        borderWidth: 4,
                        pointBackgroundColor: '#3742fa',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 8,
                        pointHoverRadius: 12
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
                                color: 'rgba(255, 255, 255, 0.9)',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                },
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            titleColor: '#00ff88',
                            bodyColor: '#ffffff',
                            borderColor: '#00ff88',
                            borderWidth: 2,
                            cornerRadius: 10,
                            displayColors: true,
                            callbacks: {
                                title: function(context) {
                                    return `📊 ${context[0].label} Analytics`;
                                },
                                label: function(context) {
                                    return `${context.dataset.label}: ${context.parsed.y}%`;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                lineWidth: 1
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                font: {
                                    weight: 'bold'
                                }
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                lineWidth: 1
                            },
                            ticks: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                font: {
                                    weight: 'bold'
                                },
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 3000,
                        easing: 'easeInOutQuart',
                        onComplete: function() {
                            showNotification('📊 Security trends chart loaded successfully!', 'success');
                        }
                    }
                }
            });
            console.log('✅ Enhanced posture chart created');
        }

        // Enhanced Framework Compliance Chart with neon effects
        const complianceCtx = document.getElementById('complianceChart');
        if (complianceCtx) {
            new Chart(complianceCtx, {
                type: 'doughnut',
                data: {
                    labels: ['🏛️ NIST CSF', '🔐 ISO 27001', '⚡ CIS Controls', '🛡️ SOC 2', '📋 GDPR'],
                    datasets: [{
                        data: [78, 82, 74, 85, 91],
                        backgroundColor: [
                            '#667eea',
                            '#00ff88',
                            '#ff6b35',
                            '#3742fa',
                            '#ff4757'
                        ],
                        borderWidth: 4,
                        borderColor: '#ffffff',
                        hoverBorderWidth: 6,
                        hoverBorderColor: '#00ff88',
                        hoverBackgroundColor: [
                            '#7c8df0',
                            '#1aff98',
                            '#ff7b45',
                            '#4752ff',
                            '#ff5767'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.9)',
                                font: {
                                    size: 13,
                                    weight: 'bold'
                                },
                                padding: 20,
                                usePointStyle: true,
                                pointStyle: 'circle'
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            titleColor: '#00ff88',
                            bodyColor: '#ffffff',
                            borderColor: '#00ff88',
                            borderWidth: 2,
                            cornerRadius: 10,
                            callbacks: {
                                title: function(context) {
                                    return `🎯 ${context[0].label}`;
                                },
                                label: function(context) {
                                    return `Compliance: ${context.parsed}%`;
                                }
                            }
                        }
                    },
                    animation: {
                        duration: 2500,
                        easing: 'easeInOutQuart',
                        onComplete: function() {
                            showNotification('🎯 Compliance chart loaded successfully!', 'success');
                        }
                    }
                }
            });
            console.log('✅ Enhanced compliance chart created');
        }

        // Enhanced Compliance Score Chart with animated ring
        const complianceScoreCtx = document.getElementById('complianceScoreChart');
        if (complianceScoreCtx) {
            const scoreGradient = complianceScoreCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
            scoreGradient.addColorStop(0, '#00ff88');
            scoreGradient.addColorStop(1, '#00cc66');

            new Chart(complianceScoreCtx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [87, 13],
                        backgroundColor: [
                            scoreGradient,
                            'rgba(255, 255, 255, 0.1)'
                        ],
                        borderWidth: 0,
                        cutout: '75%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    animation: {
                        duration: 4000,
                        easing: 'easeInOutQuart',
                        onComplete: function() {
                            showNotification('🏆 Overall compliance score: 87%', 'success');
                        }
                    }
                }
            });
            console.log('✅ Enhanced compliance score chart created');
        }
        
        // Animate chart containers with spectacular entrance
        setTimeout(() => {
            document.querySelectorAll('.chart-container').forEach((container, index) => {
                container.style.transform = 'scale(0.8) translateY(40px) rotateX(15deg)';
                container.style.opacity = '0';
                container.style.filter = 'blur(10px)';
                
                setTimeout(() => {
                    container.style.transform = 'scale(1) translateY(0) rotateX(0deg)';
                    container.style.opacity = '1';
                    container.style.filter = 'blur(0px)';
                }, index * 500);
            });
        }, 1000);
        
    } catch (error) {
        console.error('❌ Error initializing charts:', error);
        showNotification('⚠️ Chart initialization failed, using fallback', 'warning');
        createPlaceholderCharts();
    }
}

// Create placeholder charts when Chart.js is not available
function createPlaceholderCharts() {
    console.log('🎨 Creating placeholder charts...');
    
    const chartContainers = document.querySelectorAll('.chart-container canvas');
    chartContainers.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Create gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0.3)');
        gradient.addColorStop(1, 'rgba(102, 126, 234, 0.3)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add placeholder text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('📊 Chart Loading...', width / 2, height / 2);
    });
}

// Enhanced Report generation with spectacular effects
function initReports() {
    console.log('📄 Initializing dynamic reports...');
    const generateButtons = document.querySelectorAll('.generate-report, .btn-primary');
    
    generateButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const template = button.getAttribute('data-template') || 'security-report';
            const templateCard = button.closest('.template-card') || button.closest('.kpi-card');
            const templateName = templateCard?.querySelector('h4, h3')?.textContent || 'Security Report';
            
            console.log('🚀 Generating report:', templateName);
            
            // Spectacular visual effects during generation
            button.style.transform = 'scale(1.1) rotateY(10deg)';
            button.style.background = 'linear-gradient(45deg, #667eea, #764ba2, #00ff88)';
            button.style.backgroundSize = '200% 200%';
            button.style.animation = 'gradientShift 2s ease infinite';
            button.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.6)';
            
            const originalText = button.textContent;
            button.textContent = '🔄 Generating...';
            button.disabled = true;
            
            // Add shimmer effect to container
            if (templateCard) {
                templateCard.style.background = 'linear-gradient(45deg, rgba(0, 255, 136, 0.1), rgba(55, 66, 250, 0.1), rgba(255, 107, 53, 0.1))';
                templateCard.style.backgroundSize = '200% 200%';
                templateCard.style.animation = 'gradientShift 3s ease infinite';
            }
            
            // Simulate report generation with progress
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress > 100) progress = 100;
                
                button.textContent = `🔄 ${Math.round(progress)}%`;
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    
                    button.textContent = '✅ Generated!';
                    button.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
                    button.style.animation = 'none';
                    button.style.transform = 'scale(1)';
                    
                    // Celebration effect
                    createSuccessParticles(button);
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                        button.style.background = '';
                        button.style.boxShadow = '';
                        
                        if (templateCard) {
                            templateCard.style.background = '';
                            templateCard.style.animation = '';
                        }
                    }, 3000);
                }
            }, 200);
            
            // Show enhanced notifications
            showNotification(`🎯 ${templateName} generation initiated!`, 'info');
            
            setTimeout(() => {
                showNotification(`📊 ${templateName} ready for download!`, 'success');
            }, 2500);
        });
    });
}

// Create spectacular success particles effect
function createSuccessParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const colors = ['#00ff88', '#667eea', '#ff6b35', '#3742fa', '#ff4757'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
            box-shadow: 0 0 20px currentColor;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 20) * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0, opacity = 1, scale = 1;
        
        function animate() {
            x += vx * 0.01;
            y += vy * 0.01 + 2; // Add gravity
            opacity -= 0.015;
            scale -= 0.01;
            
            particle.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
            particle.style.opacity = opacity;
            
            if (opacity > 0 && scale > 0) {
                requestAnimationFrame(animate);
            } else {
                if (document.body.contains(particle)) {
                    document.body.removeChild(particle);
                }
            }
        }
        
        animate();
    }
}

// Enhanced Notification system with stunning effects
function showNotification(message, type = 'info') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach((n, index) => {
        n.style.transform = `translateX(400px) rotateY(90deg) scale(0.8)`;
        n.style.opacity = '0';
        setTimeout(() => {
            if (n.parentNode) n.parentNode.removeChild(n);
        }, 300);
    });
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Enhanced notification structure with icons
    const icons = {
        info: '🔮',
        success: '✨',
        error: '⚡',
        warning: '🎯'
    };
    
    const icon = icons[type] || '🔮';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="font-size: 1.5rem; animation: pulse 2s infinite;">${icon}</div>
            <div>
                <div style="font-weight: 700; margin-bottom: 0.25rem;">${message}</div>
                <div style="font-size: 0.8rem; opacity: 0.8;">CyberSecurity Compass • ${new Date().toLocaleTimeString()}</div>
            </div>
        </div>
    `;
    
    const colors = {
        info: 'linear-gradient(135deg, #3742fa, #667eea)',
        success: 'linear-gradient(135deg, #00ff88, #00cc66)',
        error: 'linear-gradient(135deg, #ff4757, #ff3838)',
        warning: 'linear-gradient(135deg, #ff6b35, #f39c12)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1.5rem 2rem;
        background: ${colors[type]};
        color: white;
        border-radius: 16px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        z-index: 1000;
        transform: translateX(400px) rotateY(90deg) scale(0.8);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        word-wrap: break-word;
        backdrop-filter: blur(20px);
        border: 2px solid rgba(255, 255, 255, 0.2);
        font-weight: 500;
        animation: notificationGlow 3s ease-in-out infinite;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px) rotateY(90deg) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 600);
    }, 5000);
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
        
        // Update score displays with spectacular animation
        updateScoreDisplays(percentage, answeredQuestions, questions.length);
        
        return percentage;
    }
    
    return 0;
}

// Update score displays with spectacular animations
function updateScoreDisplays(score, answered, total) {
    const scoreDisplays = document.querySelectorAll('.assessment-score');
    scoreDisplays.forEach(display => {
        // Spectacular score animation
        const currentScore = parseInt(display.textContent) || 0;
        display.style.transform = 'scale(1.2) rotateY(10deg)';
        display.style.filter = 'brightness(1.3)';
        
        setTimeout(() => {
            animateValue(display, currentScore, score, 1000, '%');
            display.style.transform = 'scale(1) rotateY(0deg)';
            display.style.filter = 'brightness(1)';
        }, 200);
    });
    
    // Show progress notification with enhanced effects
    if (answered === total) {
        showNotification(`🎉 Assessment completed! Final score: ${score}%`, 'success');
        createSuccessParticles(document.querySelector('.assessment-score'));
    } else {
        showNotification(`📊 Progress: ${answered}/${total} questions (${score}% current)`, 'info');
    }
}

// Animate numerical values with easing
function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        const current = Math.round(start + (range * easeProgress));
        
        element.textContent = current + suffix;
        
        // Add color change based on score
        if (suffix === '%') {
            if (current >= 80) {
                element.style.color = '#00ff88';
            } else if (current >= 60) {
                element.style.color = '#ff6b35';
            } else {
                element.style.color = '#ff4757';
            }
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Enhanced Assessment tracking with spectacular visual feedback
function initAssessmentTracking() {
    console.log('📊 Initializing enhanced assessment tracking...');
    
    document.addEventListener('change', (e) => {
        if (e.target.type === 'radio' && e.target.closest('.answer-options')) {
            // Spectacular visual feedback for selection
            const questionItem = e.target.closest('.question-item');
            const label = e.target.closest('label');
            
            // Remove previous selections styling
            questionItem.querySelectorAll('label').forEach(l => {
                l.style.background = '';
                l.style.borderColor = '';
                l.style.transform = '';
                l.style.boxShadow = '';
            });
            
            // Style selected option
            label.style.background = 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(102, 126, 234, 0.2))';
            label.style.borderColor = '#00ff88';
            label.style.transform = 'translateX(10px) scale(1.02)';
            label.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)';
            
            // Question item feedback
            questionItem.style.borderColor = '#00ff88';
            questionItem.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.4)';
            questionItem.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                questionItem.style.borderColor = '';
                questionItem.style.boxShadow = '';
                questionItem.style.transform = '';
            }, 1500);
            
            const score = calculateAssessmentScore();
            console.log('📊 Assessment score updated:', score);
            
            // Save to localStorage with enhanced data
            try {
                const assessmentData = {
                    score: score,
                    timestamp: new Date().toISOString(),
                    category: e.target.closest('.assessment-questions')?.id || 'unknown',
                    questionId: e.target.name,
                    selectedValue: e.target.value
                };
                
                localStorage.setItem('assessmentProgress', JSON.stringify(assessmentData));
                showNotification('💾 Progress automatically saved', 'success');
            } catch (error) {
                console.warn('⚠️ Could not save to localStorage:', error);
                showNotification('⚠️ Could not save progress', 'warning');
            }
        }
    });
}

// Enhanced Global Search with spectacular filtering
function initGlobalSearch() {
    console.log('🔍 Initializing global search...');
    
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(0, 255, 136, 0.3);
        border-radius: 20px;
        padding: 2rem;
        z-index: 10000;
        width: 80%;
        max-width: 600px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
    `;
    
    searchContainer.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3 style="color: #00ff88; margin-bottom: 1rem;">🔍 Global Search</h3>
            <input type="text" placeholder="Search frameworks, controls, threats..." 
                   style="width: 100%; padding: 1rem; border: 2px solid rgba(0, 255, 136, 0.3); 
                          border-radius: 10px; background: rgba(255, 255, 255, 0.1); 
                          color: white; font-size: 1.1rem; outline: none;">
        </div>
        <div id="searchResults" style="max-height: 300px; overflow-y: auto;"></div>
        <div style="text-align: center; margin-top: 1rem;">
            <button onclick="this.closest('div').style.transform='translate(-50%, -50%) scale(0)'; this.closest('div').style.opacity='0';"
                    style="background: linear-gradient(135deg, #ff4757, #ff3838); color: white; 
                           border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
                Close
            </button>
        </div>
    `;
    
    document.body.appendChild(searchContainer);
    
    // Add keyboard shortcut (Ctrl+K)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchContainer.style.transform = 'translate(-50%, -50%) scale(1)';
            searchContainer.style.opacity = '1';
            searchContainer.querySelector('input').focus();
        }
        
        if (e.key === 'Escape') {
            searchContainer.style.transform = 'translate(-50%, -50%) scale(0)';
            searchContainer.style.opacity = '0';
        }
    });
    
    // Add search functionality
    const searchInput = searchContainer.querySelector('input');
    const searchResults = searchContainer.querySelector('#searchResults');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        // Mock search results
        const mockResults = [
            { title: '🏛️ NIST Cybersecurity Framework', type: 'Framework', score: 85 },
            { title: '🔐 Identity & Access Management', type: 'Control', score: 92 },
            { title: '⚡ Advanced Persistent Threat', type: 'Threat', score: 78 },
            { title: '🛡️ Network Security Controls', type: 'Control', score: 88 },
            { title: '📊 Risk Assessment Matrix', type: 'Tool', score: 94 }
        ].filter(item => item.title.toLowerCase().includes(query));
        
        searchResults.innerHTML = mockResults.map(result => `
            <div style="padding: 1rem; margin: 0.5rem 0; background: rgba(0, 255, 136, 0.1); 
                        border-radius: 8px; border-left: 4px solid #00ff88; cursor: pointer;"
                 onclick="showNotification('🎯 Navigating to ${result.title}', 'info')">
                <div style="color: #00ff88; font-weight: bold;">${result.title}</div>
                <div style="color: rgba(255, 255, 255, 0.7); font-size: 0.9rem;">
                    ${result.type} • Score: ${result.score}%
                </div>
            </div>
        `).join('');
    });
}

// Test assessment function for debugging
function testAssessment() {
    console.log('🧪 Testing assessment functionality...');
    
    showNotification('🧪 Running assessment diagnostics...', 'info');
    
    setTimeout(() => {
        const categoryItems = document.querySelectorAll('.category-item');
        const assessmentQuestions = document.querySelectorAll('.assessment-questions');
        
        console.log('Categories found:', categoryItems.length);
        console.log('Question groups found:', assessmentQuestions.length);
        
        if (categoryItems.length > 0) {
            showNotification(`✅ Found ${categoryItems.length} assessment categories`, 'success');
        } else {
            showNotification('❌ No assessment categories found', 'error');
        }
        
        if (assessmentQuestions.length > 0) {
            showNotification(`✅ Found ${assessmentQuestions.length} question groups`, 'success');
        } else {
            showNotification('❌ No question groups found', 'error');
        }
    }, 1000);
}

// Enhanced KPI animations
function animateKPIs() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    kpiCards.forEach((card, index) => {
        // Initial state
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.opacity = '0';
        card.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
            card.style.filter = 'blur(0px)';
            
            // Animate the values
            const valueElement = card.querySelector('.kpi-value');
            if (valueElement) {
                const finalValue = valueElement.textContent;
                const numericValue = parseInt(finalValue);
                
                if (!isNaN(numericValue)) {
                    animateValue(valueElement, 0, numericValue, 2000, finalValue.replace(numericValue.toString(), ''));
                }
            }
        }, index * 200);
    });
}

// Enhanced Risk Matrix animations
function animateRiskMatrix() {
    const riskItems = document.querySelectorAll('.risk-item');
    
    riskItems.forEach((item, index) => {
        item.style.transform = 'translateX(-100px) rotateY(-15deg)';
        item.style.opacity = '0';
        item.style.filter = 'blur(5px)';
        
        setTimeout(() => {
            item.style.transform = 'translateX(0) rotateY(0deg)';
            item.style.opacity = '1';
            item.style.filter = 'blur(0px)';
        }, index * 300);
    });
}

// Initialize everything with spectacular loading sequence
async function init() {
    console.log('🚀 Initializing CyberSecurity Compass Elite...');
    
    // Show loading screen
    const loadingScreen = document.getElementById('loading');
    const appContainer = document.getElementById('app');
    
    if (loadingScreen) {
        animateLoadingText();
        createParticles();
    }
    
    try {
        // Wait for dependencies
        await waitForDependencies();
        
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            console.log('✅ Lucide icons initialized');
        }
        
        // Initialize all components
        initNavigation();
        initAssessment();
        initCharts();
        initReports();
        initAssessmentTracking();
        initGlobalSearch();
        
        // Show success notification
        setTimeout(() => {
            showNotification('🎉 CyberSecurity Compass Elite loaded successfully!', 'success');
        }, 2000);
        
        // Animate components
        setTimeout(() => {
            animateKPIs();
            animateRiskMatrix();
        }, 3000);
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
        showNotification('⚠️ Some features may not work correctly', 'warning');
    }
    
    // Hide loading screen with spectacular transition
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.transform = 'scale(0.8)';
            loadingScreen.style.opacity = '0';
            loadingScreen.style.filter = 'blur(20px)';
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                loadingScreen.style.display = 'none';
            }, 500);
        }
        
        if (appContainer) {
            appContainer.style.display = 'block';
            appContainer.style.opacity = '0';
            appContainer.style.transform = 'scale(1.1)';
            appContainer.style.filter = 'blur(10px)';
            
            setTimeout(() => {
                appContainer.style.opacity = '1';
                appContainer.style.transform = 'scale(1)';
                appContainer.style.filter = 'blur(0px)';
            }, 100);
        }
    }, 4000);
}

// Global exports for external access
window.showNotification = showNotification;
window.testAssessment = testAssessment;
window.calculateAssessmentScore = calculateAssessmentScore;
window.initCharts = initCharts;

// Start the application
document.addEventListener('DOMContentLoaded', init);

console.log('🎯 CyberSecurity Compass Elite v2.0.0 - Script loaded');