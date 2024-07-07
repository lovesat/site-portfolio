document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (демо-версия без реальной отправки)');
});