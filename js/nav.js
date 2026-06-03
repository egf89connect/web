(function () {
  "use strict";

  var nav    = document.getElementById("nav");
  var burger = document.getElementById("nav-burger");
  var wrap   = document.getElementById("nav-links-wrap");

  // Scroll state
  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  }, { passive: true });

  // Mobile burger
  if (burger && wrap) {
    burger.addEventListener("click", function () {
      var open = wrap.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Close on nav link click
    wrap.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        wrap.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }
})();
