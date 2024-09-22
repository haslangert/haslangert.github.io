document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const parallaxSections = document.querySelectorAll('.parallax');
    const ueberUnsSection = document.querySelector('#ueber-uns');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Funktion für das Verblassen und Bewegen des Hintergrundbildes in der ersten Section
    function handleScrollEffect() {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;

        // Berechnung des Fading-Effekts und der Bewegung
        let opacity = 1 - scrollY / maxScroll; // Reduziert die Deckkraft beim Scrollen
        let backgroundPositionY = 50 + (scrollY / maxScroll) * 20; // Bewegt das Bild leicht nach unten

        ueberUnsSection.style.opacity = opacity;
        ueberUnsSection.style.backgroundPosition = `center ${backgroundPositionY}%`;
    }

    // Scroll-Ereignis für das Verblassen und Bewegen des Hintergrundbildes
    window.addEventListener('scroll', handleScrollEffect);

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
});
