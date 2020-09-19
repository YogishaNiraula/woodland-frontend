const navslider = () => {
    const menubar = document.querySelector(".menubar");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll('.nav-links li');

    menubar.addEventListener('click', () => {
        nav.classList.toggle('nav_active');
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `slider 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        menubar.classList.toggle('cross');
    })
}
navslider();