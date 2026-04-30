// ================================
// 1. INITIALIZE ICONS (Lucide)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});


// ================================
// 2. SCROLL REVEAL ANIMATION
// (for .reveal elements)
// ================================
// ===== SCROLL REVEAL (FINAL WORKING VERSION) =====
document.addEventListener("DOMContentLoaded", () => {

  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  // Run once when page loads
  revealOnScroll();

  // Run on scroll
  window.addEventListener('scroll', revealOnScroll);

});

// Run on load + scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// ================================
// 3. NAVBAR SHADOW ON SCROLL
// ================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar?.classList.add("scrolled");
  } else {
    navbar?.classList.remove("scrolled");
  }
});



// ================================
// 4. MOBILE MENU TOGGLE
// ================================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});



// ================================
// 5. ACTIVE LINK HIGHLIGHT
// ================================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});



// ================================
// 6. THEME TOGGLE (DARK / LIGHT)
// ================================
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle?.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");

  if (currentTheme === "dark") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }
});



// ================================
// 7. TYPING EFFECT (Hero Text)
// ================================
const typedText = document.getElementById("typed-text");

const phrases = [
  "Embedded Systems Enthusiast",
  "Sensor-Based Solutions Builder",
  "Electronics Innovator"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typedText) return;

  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typedText.textContent = currentPhrase.substring(0, letterIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);



// ================================
// 8. CONTACT FORM FEEDBACK (UI only)
// ================================
function handleFormSubmit(e) {
  e.preventDefault();

  const note = document.getElementById("formNote");

  if (note) {
    note.textContent = "Message sent successfully! (Demo only)";
  }
}
