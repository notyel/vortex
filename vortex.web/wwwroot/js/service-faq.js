// FAQ Accordion - Páginas de detalle de servicios
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isOpen = this.classList.contains('open');

            // Cerrar todos los items abiertos
            questions.forEach(function (q) {
                q.classList.remove('open');
                q.setAttribute('aria-expanded', 'false');
                if (q.nextElementSibling) {
                    q.nextElementSibling.classList.remove('open');
                }
            });

            // Abrir el clickeado si estaba cerrado
            if (!isOpen) {
                this.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
                if (answer) {
                    answer.classList.add('open');
                }
            }
        });
    });
});
