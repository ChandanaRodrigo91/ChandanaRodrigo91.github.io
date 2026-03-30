/* ============================================================
   script.js — Chandana Rodrigo Personal Website
   Handles: mobile menu, active nav, footer year
   ============================================================ */

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile hamburger menu ----------
const menuBtn  = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', isOpen);
  mobileMenu.classList.toggle('flex', !isOpen);
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Active nav link on scroll (Intersection Observer) ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav .nav-link');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', isActive);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(sec => observer.observe(sec));
