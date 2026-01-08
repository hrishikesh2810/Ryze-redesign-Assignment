// Main JavaScript file for interactivity
console.log('Ryze.ai Loaded');

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Add scroll effect to navbar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-slate-950/90');
    } else {
        nav.classList.remove('shadow-lg', 'bg-slate-950/80');
    }
});
