document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.querySelector('.cursor-glow');

    // Follow mouse for the interactive glow background effect
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subtle scroll animations for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply starting styles and observe
    const animatedElements = document.querySelectorAll('.expertise-card, .stat-card, .about-text, .why-me-card, .workflow-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });


});


  (function () {
    const navbar = document.getElementById('sk-top-navbar');
    const menuToggle = document.getElementById('sk-menu-toggle');
    const mobileMenu = document.getElementById('sk-mobile-menu');
    const menuIcon = document.getElementById('sk-menu-icon');
    const closeIcon = document.getElementById('sk-close-icon');
    const mobileLinks = document.querySelectorAll('#sk-top-navbar .sk-mobile-link');
    const desktopLinks = document.querySelectorAll('#sk-top-navbar .sk-nav-link');

    function onScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      setActiveLink();
    }

    function toggleMenu() {
      const isOpen = mobileMenu.classList.toggle('open');
      menuIcon.style.display = isOpen ? 'none' : 'block';
      closeIcon.style.display = isOpen ? 'block' : 'none';
    }

    function closeMenu() {
      mobileMenu.classList.remove('open');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    }

    function smoothScrollHandler(e) {
      const href = this.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setActiveLink() {
      let currentId = '';
      const scrollPos = window.scrollY + window.innerHeight * 0.30;

      desktopLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const section = document.querySelector(href);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = href;
        }
      });

      desktopLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentId);
      });
    }

    menuToggle.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', smoothScrollHandler));
    desktopLinks.forEach(link => link.addEventListener('click', smoothScrollHandler));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', setActiveLink);

    setActiveLink();
    onScroll();
  })();


    const futuristicProjects = [
      {
        title: 'Khejurer Gur Landing Page',
        category: 'Food Product',
        description: 'A premium product landing page crafted to highlight authenticity, rich visuals, and strong conversion flow.',
        url: 'https://novatekdigital.xyz/khejurer-gur/',
        image: 'https://novatekdigital.xyz/wp-content/uploads/2026/03/ChatGPT-Image-Mar-15-2026-04_02_43-PM.png',
      },
      {
        title: 'AirBird TWS Landing Page',
        category: 'Digital Product',
        description: 'A premium product landing page with modern visuals, strong CTA placement, and conversion-focused layout.',
        url: 'https://novatekdigital.xyz/elementor-1305/',
        image: 'https://novatekdigital.xyz/wp-content/uploads/2026/03/ChatGPT-Image-Mar-15-2026-12_33_41-AM.png',
      },
      {
        title: 'E-book Landing Page',
        category: 'E-book',
        description: 'A visually rich digital product landing page built to maximize downloads and reader engagement.',
        url: 'https://novatekdigital.xyz/elementor-534/',
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b3f722ff5bb4bcbe40ef88/51995c5b2_generated_7eb93e5a.png',
      },
     
    
     
      {
        title: 'Action Figure Collection',
        category: 'Action Figure',
        description: 'Bold, dramatic product landing page designed for collectible action figure enthusiasts.',
        url: 'https://novatekdigital.xyz/elementor-720/',
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b3f722ff5bb4bcbe40ef88/70893cf3b_generated_e61e5dd7.png',
      },
      {
        title: 'NovaTek Digital — Main Site',
        category: 'Digital Product',
        description: 'The flagship creative agency landing page — a comprehensive digital identity showcase.',
        url: 'https://novatekdigital.xyz/',
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b3f722ff5bb4bcbe40ef88/c8ca409a0_generated_2d4c04c3.png',
      },
    ];

    const futureProjectsGrid = document.getElementById('projectsGridFuture');
    const futureFilterButtons = document.querySelectorAll('#projectsFilterTabs .projects-filter-btn');

    function renderFutureProjects(category = 'All') {
      const filteredProjects = category === 'All'
        ? futuristicProjects
        : futuristicProjects.filter(project => project.category === category);

      futureProjectsGrid.classList.add('is-changing');

      setTimeout(() => {
        futureProjectsGrid.innerHTML = filteredProjects.map((project, index) => `
          <article class="project-card-future">
            <span class="project-index">${String(index + 1).padStart(2, '0')}</span>

            <div class="project-thumb-wrap">
              <img decoding="async"
                src="${project.image}"
                alt="${project.title}"
                class="project-thumb"
                loading="lazy"
              />

              <div class="project-card-overlay">
                <span class="project-chip">${project.category}</span>

                <a
                  href="${project.url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-visit-btn"
                >
                  <span>Visit Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h6m0 0v6m0-6L10 16M7 7h3m-3 0a3 3 0 00-3 3v7a3 3 0 003 3h7a3 3 0 003-3v-3"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="project-body">
              <span class="project-meta">${project.category}</span>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-desc">${project.description}</p>
            </div>
          </article>
        `).join('');

        futureProjectsGrid.classList.remove('is-changing');
      }, 220);
    }

    futureFilterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedCategory = button.dataset.category;

        futureFilterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        renderFutureProjects(selectedCategory);
      });
    });

    renderFutureProjects();
  

    const futuristicPricingPlans = [
      {
        name: 'Professional Signature',
        price: '500',
        currency: 'TK',
        category: 'Web',
        description: 'A clean, clickable HTML signature with social links and contact info for a professional email presence.',
        delivery: '1 Day Delivery',
        icon: 'zap',
        features: [
          'Professional Gmail Signature',
          'Basic Banner Design',
          'Clickable Social Links',
          'Brand Integration'
        ],
        featured: false
      },
      {
        name: 'Premium Branding',
        price: '5,000',
        currency: 'TK',
        category: 'Web',
        description: 'The ultimate brand identity package including custom high-end logo design and full brand kits.',
        delivery: '3-5 Days Delivery',
        icon: 'crown',
        features: [
          'Custom Premium Logo',
          'Complete Brand Identity',
          'Source Files Included',
          'Social Media Kit'
        ],
        featured: true,
        label: 'Recommended'
      },
      {
        name: 'Commercial Video Ads',
        price: '2,000',
        currency: 'TK',
        category: 'Video',
        description: 'Eye-catching video edits designed specifically to convert viewers into customers for Social Media & Ads.',
        delivery: '2 Days Delivery',
        icon: 'star',
        features: [
          'High-energy 30–60s clips',
          'Social Media & Ad focus',
          'Motion Graphics elements',
          'Conversion-focused edit'
        ],
        featured: false,
        label: 'Best For Ads'
      },
      {
        name: 'Pro E-commerce Build',
        price: '30,000',
        currency: 'TK',
        category: 'Web',
        description: 'A high-converting WooCommerce store optimized for mobile. Includes local payment integration (bkash, Nagad, Rocket).',
        delivery: '10–14 Days Delivery',
        icon: 'crown',
        features: [
          'WooCommerce Store Setup',
          'Local Payment Integration',
          'Premium Professional Theme',
          'Inventory Management'
        ],
        featured: false
      },
      {
        name: 'Monthly Store Manager',
        price: '7,000',
        currency: 'TK / mon',
        category: 'Web',
        description: 'I handle all technical updates, security, and product uploads so you can focus on selling.',
        delivery: 'Monthly Support',
        icon: 'zap',
        features: [
          'Technical Updates & Maintenance',
          'Security Monitoring',
          '20% Faster Loading Speeds',
          'Regular Backups'
        ],
        featured: false
      },
      {
        name: 'Google Ads: Starter',
        price: '5,000',
        currency: 'TK / mon',
        category: 'Ads',
        description: 'Small business local reach. Perfect for testing market demand with direct conversion focus.',
        delivery: 'Monthly Management',
        icon: 'zap',
        features: [
          'Up to 20k TK Ad Spend',
          'Local Reach Optimization',
          'Keyword Targeting',
          'Basic Performance Reports'
        ],
        featured: false
      },
      {
        name: 'Google Ads: Pro',
        price: '15,000',
        currency: 'TK / mon',
        category: 'Ads',
        description: 'Lead generation & Sales scale-up for businesses ready for high-volume results.',
        delivery: 'Monthly Management',
        icon: 'crown',
        features: [
          'Up to 1 Lakh TK Ad Spend',
          'Lead Gen & Sales Focus',
          'A/B Testing & Optimization',
          'Advanced Tracking'
        ],
        featured: true,
        label: 'Best for Scale'
      },
      {
        name: 'FB Ads: Starter',
        price: '3,000',
        currency: 'TK / mon',
        category: 'Ads',
        description: 'Small shops/Page growth focus with targeted ad creative and audience selection.',
        delivery: 'Monthly Management',
        icon: 'star',
        features: [
          '1-2 Ad Campaigns',
          'Audience Targeting',
          'Page Growth Strategy',
          'Basic Reporting'
        ],
        featured: false
      },
      {
        name: 'FB Ads: Pro',
        price: '8,000',
        currency: 'TK / mon',
        category: 'Ads',
        description: 'Business Pro setup featuring advanced retargeting and Pixel optimization for sales.',
        delivery: 'Monthly Management',
        icon: 'zap',
        features: [
          'Retargeting Campaigns',
          'Pixel Setup & Optimization',
          'Lead Gen Focus',
          'Detailed Sales Tracking'
        ],
        featured: false
      },
      {
        name: 'YouTube: Basic',
        price: '4,500',
        currency: 'TK',
        category: 'Video',
        description: 'One-time setup for a professional channel appearance including branding.',
        delivery: '3 Days Delivery',
        icon: 'zap',
        features: [
          'Channel Creation',
          'Professional Logo Design',
          'Banner Design',
          'Basic Settings Config'
        ],
        featured: false
      },
      {
        name: 'YouTube: Pro',
        price: '7,500',
        currency: 'TK',
        category: 'Video',
        description: 'Full channel branding and SEO optimization for maximum organic reach.',
        delivery: '5 Days Delivery',
        icon: 'crown',
        features: [
          'Creation + Full Branding',
          'Keywords & Tags SEO',
          'Intro/Outro Concepts',
          'Growth Strategy Plan'
        ],
        featured: false,
        label: 'Best Experience'
      },
      {
        name: 'General Landing Page',
        price: '1,000',
        currency: 'TK',
        category: 'Web',
        description: 'A clean, focused single-product landing page perfect for launching fast.',
        delivery: '1 Day Delivery',
        icon: 'zap',
        features: [
          'Single product showcase',
          'Clean responsive layout',
          'Mobile-optimized design',
          'Basic CTA integration'
        ],
        featured: false
      }
    ];

    const futuristicPricingIcons = {
      zap: `
        <svg class="pricing-icon-svg" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      `,
      star: `
        <svg class="pricing-icon-svg" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      `,
      crown: `
        <svg class="pricing-icon-svg" viewBox="0 0 24 24">
          <path d="M2 4l3 12h14l3-12-6 3-5-6-5 6-6-3z"></path>
          <path d="M6 16h12v2H6z"></path>
        </svg>
      `,
      check: `
        <svg class="pricing-icon-svg" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `,
      arrow: `
        <svg class="pricing-icon-svg" viewBox="0 0 24 24">
          <path d="M13 7h6m0 0v6m0-6L10 16"></path>
          <path d="M7 7h3"></path>
          <path d="M7 7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-3"></path>
        </svg>
      `
    };

    const pricingGridFuture = document.getElementById('pricingGridFuture');
    const pricingFilterButtons = document.querySelectorAll('.pricing-filter-btn');

    function createPricingWhatsappLink(plan) {
      const message = `Hello, I want to get started with:

Plan: ${plan.name}
Category: ${plan.category}
Price: ${plan.price} ${plan.currency}
Delivery: ${plan.delivery}

Please share the next steps.`;

      return `https://wa.link/pe4nfi?text=${encodeURIComponent(message)}`;
    }

    function renderFuturePricingCards(category = 'All') {
      const filteredPlans = category === 'All'
        ? futuristicPricingPlans
        : futuristicPricingPlans.filter(plan => plan.category === category);

      pricingGridFuture.innerHTML = filteredPlans.map(plan => {
        const variant = plan.featured ? 'featured' : 'normal';
        const whatsappLink = createPricingWhatsappLink(plan);

        return `
          <article class="pricing-card-future ${plan.featured ? 'featured' : ''}">
            ${plan.label ? `
              <div class="pricing-label-wrap">
                <span class="pricing-label ${plan.featured ? 'featured' : 'normal'}">${plan.label}</span>
              </div>
            ` : ''}

            <div class="pricing-card-head">
              <div class="pricing-icon-wrap ${plan.featured ? 'featured' : ''}">
                <div class="pricing-icon ${plan.featured ? 'featured' : ''}">
                  ${futuristicPricingIcons[plan.icon]}
                </div>
              </div>
              <h3 class="pricing-plan-name">${plan.name}</h3>
            </div>

            <div class="pricing-price">
              ${plan.price}<span class="pricing-currency">${plan.currency}</span>
            </div>

            <p class="pricing-description">${plan.description}</p>
            <span class="pricing-delivery">${plan.delivery}</span>

            <div class="pricing-features">
              ${plan.features.map(feature => `
                <div class="pricing-feature-item">
                  <div class="pricing-check ${plan.featured ? 'featured' : ''}">
                    ${futuristicPricingIcons.check}
                  </div>
                  <span class="pricing-feature-text">${feature}</span>
                </div>
              `).join('')}
            </div>

            <a
              href="${whatsappLink}"
              target="_blank"
              rel="noopener noreferrer"
              class="sk-btn sk-btn-whatsapp primary-cta mt-auto"
              style="border-radius: 999px; padding: 0.8rem 1.5rem;"
            >
              <span>Get Started</span>
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </article>
        `;
      }).join('');
    }

    // Add Pricing Filter Listeners
    pricingFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.dataset.category;
            pricingFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderFuturePricingCards(selectedCategory);
        });
    });

    renderFuturePricingCards();

    // Floating Navigation Dock Visibility Logic
    (function () {
      const floatingDock = document.getElementById('floating-dock');
      if (!floatingDock) return;

      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          floatingDock.classList.add('visible');
        } else {
          floatingDock.classList.remove('visible');
        }
      }, { passive: true });
    })();
