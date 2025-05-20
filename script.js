document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        link.querySelector('span').classList.remove('underlined');
    });
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if ((currentPage === '' || currentPage === '/' || currentPage === 'index.html') && linkHref === 'index.html') {
            link.parentElement.classList.add('active');
            link.querySelector('span').classList.add('underlined');
        } else if (linkHref === currentPage) {
            link.parentElement.classList.add('active');
            link.querySelector('span').classList.add('underlined');
        }
    });
});