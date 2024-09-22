document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const fadeInTexts = document.querySelectorAll('.fade-in-text');
    const linkedinLogo = document.querySelector('.linkedin-logo');

    // Menü-Button zum Ein- und Ausblenden des Menüs
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('mobile');
        mainNav.classList.toggle('active');
    });

    // Smooth Scrolling für die Menüeinträge
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth Scrolling zur jeweiligen Sektion
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

    // Verzögerung für die LinkedIn-Logo-Animation (z.B. 1 Sekunde nach dem Laden der Seite)
    setTimeout(function() {
        linkedinLogo.classList.add('visible'); // Sichtbar machen und Animation starten
    }, 1000); // 1000 ms = 1 Sekunde Verzögerung

    // Funktion zum Einblenden der Textabschnitte beim Scrollen
    function handleScrollFadeInText() {
        fadeInTexts.forEach(text => {
            const textTop = text.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the text is in the viewport
            if (textTop < windowHeight - 100) {
                text.classList.add('visible'); // Sichtbar machen und Animation starten
            }
        });
    }

    // Scroll-Ereignis zum Einblenden der Texte
    window.addEventListener('scroll', handleScrollFadeInText);

    // Direkt beim Laden prüfen, ob Texte bereits im Sichtfeld sind
    handleScrollFadeInText();

    // Funktion zum Einblenden der Abschnitte beim Scrollen
    function handleScrollFadeIn() {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Check if the section is in the viewport
            if (sectionTop < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    }

    // Scroll-Ereignis zum Einblenden der Sektionen
    window.addEventListener('scroll', handleScrollFadeIn);

    // Direkt beim Laden prüfen, ob Sektionen bereits im Sichtfeld sind
    handleScrollFadeIn();
});
