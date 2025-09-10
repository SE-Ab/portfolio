document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll("#mobile-menu a");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // --- Scroll Animation Logic ---
  const animatedElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: Stop observing the element once it's visible
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
