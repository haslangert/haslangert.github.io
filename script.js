document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const parallaxSections = document.querySelectorAll('.parallax');
    const ueberUnsSection = document.querySelector('#ueber-uns');

    // Funktion für das Verblassen und Bewegen des Hintergrundbildes in der ersten Section
    function handleScrollEffect() {
        const scrollY = window.scrollY;
        const maxScroll = window.innerHeight;

        // Berechnung des Fading-Effekts und der Bewegung
        let opacity = 1 - scrollY / maxScroll; // Reduziert die Deckkraft beim Scrollen
        let backgroundPositionY = (scrollY / maxScroll) * 50; // Bewegt das Bild leicht nach unten

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
});
