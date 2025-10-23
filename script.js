document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("#mobile-menu a, #desktop-nav a");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add("hidden");
          menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // --- Dynamic Header on Scroll ---
  const header = document.querySelector("header");
  if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
  }

  // --- Scroll Animation Logic ---
  const animatedElements = document.querySelectorAll(".scroll-animate");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );
  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  // --- Project Card Expansion Logic ---
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const readMoreBtn = card.querySelector('.read-more-btn');
    const btnText = readMoreBtn.querySelector('span');
    const expandableContent = card.querySelector('.expandable-content');
    const chevronIcon = card.querySelector('.chevron-icon');

    if (readMoreBtn && expandableContent && chevronIcon && btnText) {
      readMoreBtn.addEventListener('click', () => {
        const isExpanded = readMoreBtn.getAttribute('aria-expanded') === 'true';
        readMoreBtn.setAttribute('aria-expanded', !isExpanded);
        
        expandableContent.classList.toggle('expanded');
        chevronIcon.classList.toggle('rotated');
        btnText.textContent = isExpanded ? 'Read More' : 'Read Less';
      });
    }
  });
  
  // --- Scroll-to-Top Button Logic ---
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  if (scrollToTopBtn) {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
