/* ============================================================
   TAYFUN EVCİL — PORTFOLIO
   main.js — scroll reveal & interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     SCROLL REVEAL
     All elements with class="reveal" fade up when in view
  ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
  });

  revealEls.forEach(el => observer.observe(el));


  /* ----------------------------------------------------------
     STAGGERED REVEAL for hero pillars
     Each pillar animates in with a small delay
  ---------------------------------------------------------- */
  const pillars = document.querySelectorAll('.hero-pillar');
  pillars.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-12px)';
    el.style.transition = `opacity 0.5s ease ${0.1 + i * 0.12}s, transform 0.5s ease ${0.1 + i * 0.12}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    }, 300 + i * 120);
  });


  /* ----------------------------------------------------------
     STAT COUNTER ANIMATION
     Counts up numbers on first view
  ---------------------------------------------------------- */
  function animateCount(el, target, duration = 1400) {
    let start = null;
    const suffix = el.dataset.suffix || '';
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statNums = document.querySelectorAll('.stat-num[data-count]');
  let countersTriggered = false;

  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersTriggered) {
      countersTriggered = true;
      statNums.forEach((el, i) => {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        setTimeout(() => animateCount(el, target, 1200), i * 150);
      });
    }
  }, { threshold: 0.5 });

  const heroRight = document.querySelector('.hero-right');
  if (heroRight) statsObserver.observe(heroRight);


  /* ----------------------------------------------------------
     ACTIVE NAV LINK on scroll
     Highlights the current section in the masthead
  ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.masthead-nav a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.masthead-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => navObserver.observe(s));


  /* ----------------------------------------------------------
     SMOOTH hover effect on project cards
     Subtle parallax tilt on mouse move
  ---------------------------------------------------------- */
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
      card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
