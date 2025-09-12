document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("#mobile-menu a, #desktop-nav a"); // Also close menu on desktop link click if needed

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

  // --- NEW: Dynamic Header on Scroll ---
  const header = document.querySelector("header");
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { // Add class when scrolled more than 10px
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- NEW: Scroll Animation Logic ---
  // Select all elements with the .scroll-animate class
  const animatedElements = document.querySelectorAll(".scroll-animate");

  // Create a new Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
          // Add the 'is-visible' class to trigger the animation
          entry.target.classList.add("is-visible");
          // Optional: Stop observing the element once it's visible so the animation only happens once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  // Observe each animated element
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
