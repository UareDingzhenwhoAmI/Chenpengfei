// DOMContentLoaded event to ensure the DOM is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Feature Categories Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const featuresGrid = document.getElementById('featuresGrid');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                tabBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const category = this.getAttribute('data-category');

                // Filter features
                if (featuresGrid) {
                    const featureCards = featuresGrid.querySelectorAll('.feature-card');
                    featureCards.forEach(card => {
                        if (category === 'all' || card.getAttribute('data-category') === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    }

    // User Group Tabs
    const userGroupBtns = document.querySelectorAll('[data-group]');
    const userGroupContents = document.querySelectorAll('.user-group-content');

    if (userGroupBtns.length > 0) {
        userGroupBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const group = this.getAttribute('data-group');

                // Remove active class from all buttons
                userGroupBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                // Hide all contents
                userGroupContents.forEach(content => {
                    content.classList.remove('active');
                });

                // Show selected content
                const selectedContent = document.getElementById(group);
                if (selectedContent) {
                    selectedContent.classList.add('active');
                }
            });
        });
    }

    // FAQ Accordion
    const faqCards = document.querySelectorAll('.faq-card');

    if (faqCards.length > 0) {
        faqCards.forEach(card => {
            const question = card.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', function() {
                    card.classList.toggle('active');
                });
            }
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 访问计数器逻辑
    const visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        // 检查是否支持 localStorage
        if (typeof(Storage) !== "undefined") {
            // 获取当前访问次数
            let count = localStorage.getItem('visitCount') || 0;
            // 增加访问次数
            count++;
            // 更新 localStorage
            localStorage.setItem('visitCount', count);
            // 显示访问次数
            visitCountElement.textContent = count;
        } else {
            // 如果浏览器不支持 localStorage，则显示消息
            console.log('Your browser does not support Web Storage');
        }
    }

    // 为所有链接添加点击事件监听器
    document.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', function() {
            // 检查链接是否指向当前页面
            if (this.getAttribute('href') === 'index.html') {
                // 获取当前访问次数
                let count = localStorage.getItem('visitCount') || 0;
                // 增加访问次数
                count++;
                // 更新 localStorage
                localStorage.setItem('visitCount', count);
            }
        });
    });
});