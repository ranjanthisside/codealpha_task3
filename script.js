window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        const btn = document.getElementById('returnToTop');
        if (window.scrollY > nav.offsetHeight + 10) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
    document.getElementById('returnToTop').onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };