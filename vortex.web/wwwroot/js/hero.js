// Hero Slider Functionality
(function() {
    'use strict';
    
    let currentSlide = 0;
    let slides = [];
    let indicators = [];
    let slideInterval;
    const SLIDE_DURATION = 5000; // 5 segundos por slide
    
    function initSlider() {
        slides = document.querySelectorAll('.hero-slide');
        indicators = document.querySelectorAll('.indicator');
        
        if (slides.length === 0) return;
        
        // Agregar event listeners a los indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
                resetInterval();
            });
        });
        
        // Iniciar el slider automático
        startAutoSlide();
    }
    
    function goToSlide(slideIndex) {
        // Remover clase active de slide e indicador actual
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Actualizar índice
        currentSlide = slideIndex;
        
        // Agregar clase active al nuevo slide e indicador
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }
    
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, SLIDE_DURATION);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startAutoSlide();
    }
    
    // Pausar el slider cuando el usuario sale de la pestaña
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(slideInterval);
        } else {
            startAutoSlide();
        }
    });
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSlider);
    } else {
        initSlider();
    }
})();
