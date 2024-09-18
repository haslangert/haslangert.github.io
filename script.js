document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const parallaxSections = document.querySelectorAll('.parallax');
    const symbols = document.querySelectorAll('.symbol'); // Symbole auswählen

    // Menü-Button zum Ein- und Ausblenden des Menüs
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('mobile');
        mainNav.classList.toggle('active');
    });

    // Scroll-Ereignis für das Verblassen und Bewegen des Hintergrundbildes und Symbole
    window.addEventListener('scroll', function() {
        parallaxSections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const symbol = symbols[index]; // Symbole mit den Sektionen verknüpfen
            
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                section.classList.add('fade-out');
                if (symbol) symbol.classList.add('fade-in'); // Symbol einblenden
            } else {
                section.classList.remove('fade-out');
                if (symbol) symbol.classList.remove('fade-in'); // Symbol ausblenden
            }
        });
    });

    // Dynamisches Scrollen zu den Abschnitten
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth Scrolling
            window.scrollTo({
                top: targetSection.offsetTop - 80, // 80px Puffer für den fixierten Header
                behavior: 'smooth'
            });

            // Menü auf kleinen Bildschirmen schließen
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('mobile');
                mainNav.classList.remove('active');
            }
        });
    });
});
