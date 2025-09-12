document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("#mobile-menu a, #desktop-nav a");

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // --- Dynamic Header on Scroll ---
  const header = document.querySelector("header");
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { // Add class when scrolled more than 10px
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

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
});
