document.addEventListener('DOMContentLoaded', () => {
      // Smooth scrolling for navigation
                              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                        anchor.addEventListener('click', function (e) {
                                                      e.preventDefault();
                                                      document.querySelector(this.getAttribute('href')).scrollIntoView({
                                                                        behavior: 'smooth'
                                                      });
                                        });
                              });

                              // Intersection Observer for fade-up animations
                              const observerOptions = {
                                        root: null,
                                        rootMargin: '0px',
                                        threshold: 0.1
                              };

                              const observer = new IntersectionObserver((entries, observer) => {
                                        entries.forEach(entry => {
                                                      if (entry.isIntersecting) {
                                                                        entry.target.classList.add('visible');
                                                                        observer.unobserve(entry.target); // Stop observing once it's visible
                                                      }
                                        });
                              }, observerOptions);

                              // Methodology Tabs Logic
                              const tabBtns = document.querySelectorAll('.tab-btn');
      const tabPanes = document.querySelectorAll('.tab-pane');

                              tabBtns.forEach(btn => {
                                        btn.addEventListener('click', () => {
                                                      // Remove active class from all
                                                                         tabBtns.forEach(b => b.classList.remove('active'));
                                                      tabPanes.forEach(p => {
                                                                        p.classList.remove('active');
                                                                        p.style.display = 'none';
                                                      });

                                                                         // Add active class to clicked
                                                                         btn.classList.add('active');
                                                      const targetId = btn.getAttribute('data-target');
                                                      const targetPane = document.getElementById(targetId);

                                                                         targetPane.style.display = 'block';

                                                                         // Trigger animation in next frame
                                                                         requestAnimationFrame(() => {
                                                                                           requestAnimationFrame(() => {
                                                                                                                 targetPane.classList.add('active');
                                                                                             });
                                                                         });
                                        });
                              });

                              // Handle mock PDF download
                              const downloadBtn = document.querySelector('.btn-secondary');
      if (downloadBtn) {
                downloadBtn.addEventListener('click', (e) => {
                              e.preventDefault();
                              alert("This will download the highly curated 'Executive Summary' PDF outlining Abosede's high-level wins and certifications.");
                });
      }

                              // Apply fade-up class to elements dynamically and observe them
                              const elementsToAnimate = document.querySelectorAll(
                                        '.card, .section-title, .hero-title, .hero-subtitle, .journey-text p, .stat, .avatar-wrapper, .status-badge'
                                    );

                              elementsToAnimate.forEach(el => {
                                        el.classList.add('fade-up');
                                        observer.observe(el);
                              });
});
