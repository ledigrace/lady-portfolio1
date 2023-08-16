const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});