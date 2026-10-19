const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => { if(el.getBoundingClientRect().top > window.innerHeight) el.classList.add('pending'); observer.observe(el); });
  motion.addEventListener('change', () => { if(motion.matches) { document.querySelectorAll('.pending').forEach(el => el.classList.remove('pending')); observer.disconnect(); } });
}
