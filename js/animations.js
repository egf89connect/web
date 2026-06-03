(function () {
  "use strict";

  // ── CSS FALLBACK: make all .reveal visible if GSAP not loaded ──
  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  // If GSAP is not available, use IntersectionObserver as polyfill
  if (!window.gsap || !window.ScrollTrigger) {
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".reveal").forEach(function (el) { obs.observe(el); });
    } else {
      revealAll();
    }
    return;
  }

  // ── GSAP REVEAL ANIMATIONS ─────────────────────────────────────
  gsap.registerPlugin(ScrollTrigger);

  // Generic reveal
  document.querySelectorAll(".reveal").forEach(function (el) {
    gsap.fromTo(el,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
          onEnter: function () { el.classList.add("is-visible"); }
        }
      }
    );
  });

  // Staggered reveal groups
  document.querySelectorAll(".reveal-group").forEach(function (group) {
    var children = group.querySelectorAll(".reveal-item");
    gsap.fromTo(children,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: group,
          start: "top 82%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Hero animation on load
  var heroTitle = document.querySelector(".hero-title");
  var heroKicker = document.querySelector(".hero-kicker");
  var heroTagline = document.querySelector(".hero-tagline");
  var heroCtas = document.querySelector(".hero-ctas");

  if (heroTitle) {
    var tl = gsap.timeline({ delay: 4.6 }); // after splash
    tl.fromTo(heroKicker,   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .fromTo(heroTitle.querySelector(".line1"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")
      .fromTo(heroTitle.querySelector(".line2"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.55")
      .fromTo(heroTagline,  { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .fromTo(heroCtas,     { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.35");
  }

  // Parallax del hero desactivat per petició del client

  // Process steps stagger
  var procesSteps = document.querySelectorAll(".proces-step");
  if (procesSteps.length) {
    gsap.fromTo(procesSteps,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".proces-grid",
          start:   "top 80%",
        }
      }
    );
  }
})();
