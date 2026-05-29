

document.addEventListener('DOMContentLoaded', () => {

  
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });


  

  
  document.querySelectorAll('.theme-row').forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--row-index', i);
  });

  
  document.querySelectorAll('.prize-item').forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--item-index', i);
  });

  
  document.querySelectorAll('.stall-row').forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--stall-index', i);
  });

  
  document.querySelectorAll(
    '.section-heading, .section-label-mono, .filter-pill, .contact-btns, .register-eligibility, .register-card, .faq-list'
  ).forEach(el => {
    if (!el.classList.contains('scroll-reveal') && !el.closest('.register')) {
      el.classList.add('scroll-reveal');
    }
  });

  
  document.querySelectorAll('.register-heading').forEach(el => el.classList.add('scroll-reveal'));
  document.querySelectorAll('.register-eligibility').forEach(el => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--reveal-delay', '80ms');
  });
  document.querySelectorAll('.register-card').forEach(el => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--reveal-delay', '140ms');
  });

  
  document.querySelectorAll('.schedule-session-header, .schedule-card').forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--card-index', i);
  });

  
  document.querySelectorAll('.faq-item').forEach((el, i) => {
    el.classList.add('scroll-reveal');
    el.style.setProperty('--reveal-delay', `${i * 50}ms`);
  });


  
  const revealOpts = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.08
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOpts);

  document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));


  
  const filterBtns = document.querySelectorAll('.filter-pill');
  const sessionHeaders = document.querySelectorAll('.schedule-session-header');
  const scheduleCards = document.querySelectorAll('.schedule-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (filter === 'all') {
        sessionHeaders.forEach(h => h.classList.remove('hidden'));
        scheduleCards.forEach(c => c.classList.remove('hidden'));
      } else {
        sessionHeaders.forEach(h => {
          h.dataset.session === filter
            ? h.classList.remove('hidden')
            : h.classList.add('hidden');
        });
        scheduleCards.forEach(c => {
          c.dataset.session === filter
            ? c.classList.remove('hidden')
            : c.classList.add('hidden');
        });
      }
      applyScheduleRounding();
    });
  });

  function applyScheduleRounding() {
    scheduleCards.forEach(c => { c.style.borderRadius = ''; });
    ['morning', 'afternoon', 'evening'].forEach(session => {
      const visible = [...scheduleCards].filter(c =>
        c.dataset.session === session && !c.classList.contains('hidden')
      );
      if (visible.length > 0) {
        visible[visible.length - 1].style.borderRadius = '0 0 10px 10px';
      }
    });
  }
  applyScheduleRounding();


  
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      faqItems.forEach(i => {
        const b = i.querySelector('.faq-question');
        const a = i.querySelector('.faq-answer');
        if (b && a) {
          b.setAttribute('aria-expanded', 'false');
          a.style.maxHeight = '0';
        }
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });


  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.getElementById('navbar')?.offsetHeight || 64;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
      }
    });
  });


  
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.opacity = link.getAttribute('href') === `#${entry.target.id}` ? '1' : '0.7';
        });
      }
    });
  }, { rootMargin: '-60px 0px -60% 0px', threshold: 0 });

  sections.forEach(s => navObserver.observe(s));

});


  
  document.querySelectorAll('a[href="#register"], a[href="#"], #regNowBtn, #heroRegisterBtn, .nav-link-register').forEach(el => {
    el.addEventListener('click', (e) => {

      const text = el.textContent.trim().toLowerCase();
      if (text.includes('register') || el.id === 'regNowBtn' || el.id === 'heroRegisterBtn' || el.classList.contains('nav-link-register')) {
        e.preventDefault();
        alert("Registrations will start soon");
      }
    });
  });
