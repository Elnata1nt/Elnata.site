window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 20);
});


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = href;
        }
    });
});