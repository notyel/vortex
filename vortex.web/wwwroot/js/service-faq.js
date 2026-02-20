// FAQ Accordion - Componente reutilizable
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = this.classList.contains('open');
            const icon = this.querySelector('.faq-icon-glyph');

            // Cerrar todos los ítems abiertos
            questions.forEach(function (q) {
                q.classList.remove('open');
                q.setAttribute('aria-expanded', 'false');
                const qIcon = q.querySelector('.faq-icon-glyph');
                if (qIcon) qIcon.textContent = 'add';
                if (q.nextElementSibling) {
                    q.nextElementSibling.classList.remove('open');
                }
            });

            // Abrir el ítem clickeado si estaba cerrado
            if (!isOpen) {
                this.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
                if (icon) icon.textContent = 'remove';
                if (answer) answer.classList.add('open');
            }
        });
    });

    // Mobile sidebar menu toggle
    const sidebarToggle = document.querySelector('.services-menu-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!isExpanded));
            const menuList = document.getElementById('services-nav-list');
            if (menuList) menuList.classList.toggle('open');
        });
    }
});
