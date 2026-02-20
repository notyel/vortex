// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    const header = document.querySelector('.header');
    const isHeroHeader = header && header.classList.contains('header--hero');

    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = navMobile.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMobile.classList.remove('active');
            });
        });
    }

    // Hero transparent header: switch to solid white once hero scrolls out of view
    if (isHeroHeader) {
        const heroSection = document.querySelector('.hero-video-section');

        function updateHeroHeader() {
            const threshold = heroSection ? heroSection.offsetHeight : 300;
            const scrollY = window.pageYOffset;

            if (scrollY >= threshold) {
                // Past hero: solid white header
                header.classList.remove('header--blurred');
                header.classList.add('header--scrolled');
            } else if (scrollY > 0) {
                // Within hero but scrolled: frosted glass
                header.classList.remove('header--scrolled');
                header.classList.add('header--blurred');
            } else {
                // Exactly at top: fully transparent
                header.classList.remove('header--blurred');
                header.classList.remove('header--scrolled');
                header.classList.remove('scroll-down');
                header.classList.remove('scroll-up');
            }
        }

        updateHeroHeader();
        window.addEventListener('scroll', updateHeroHeader, { passive: true });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 70;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Header hide on scroll-down / show on scroll-up
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const isScrolled = header.classList.contains('header--scrolled');

        // While the hero header is transparent (not yet scrolled past hero),
        // keep it always visible — no hide/show behaviour
        if (isHeroHeader && !isScrolled) {
            lastScroll = currentScroll;
            return;
        }

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link[href^="#"]');

    function updateActiveLink() {
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ─── Dropdown navigation ─────────────────────────────────
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    const mobileDropdowns = document.querySelectorAll('.nav-mobile-dropdown');

    function closeAllDropdowns() {
        dropdowns.forEach(d => {
            d.classList.remove('is-open');
            const t = d.querySelector('.nav-dropdown__trigger');
            if (t) t.setAttribute('aria-expanded', 'false');
        });
    }

    // Desktop: toggle on trigger click
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-dropdown__trigger');
        if (!trigger) return;

        trigger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('is-open');
            closeAllDropdowns();
            if (!isOpen) {
                dropdown.classList.add('is-open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Close on outside click or ESC
    document.addEventListener('click', closeAllDropdowns);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeAllDropdowns();
    });

    // Mobile: accordion toggle
    mobileDropdowns.forEach(mobileDropdown => {
        const trigger = mobileDropdown.querySelector('.nav-mobile-dropdown__trigger');
        if (!trigger) return;

        trigger.addEventListener('click', function() {
            mobileDropdown.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', mobileDropdown.classList.contains('is-open').toString());
        });

        // Close mobile menu when a service link is clicked
        mobileDropdown.querySelectorAll('.nav-mobile-dropdown__item').forEach(link => {
            link.addEventListener('click', function() {
                if (navToggle && navMobile) {
                    navToggle.classList.remove('active');
                    navMobile.classList.remove('active');
                }
            });
        });
    });
});
