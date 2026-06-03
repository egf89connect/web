(function () {
  "use strict";

  // Cursor personalitzat desactivat — s'usa el punter estàndard del sistema
  return;

  var ring  = document.getElementById("cursor-ring");
  var dot   = document.getElementById("cursor-dot");
  var label = document.getElementById("cursor-label");
  if (!ring || !dot || !label) return;

  var mx = window.innerWidth / 2;
  var my = window.innerHeight / 2;
  var rx = mx, ry = my;

  document.addEventListener("mousemove", function (e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + "px";
    dot.style.top  = my + "px";
    label.style.left = mx + "px";
    label.style.top  = my + "px";
  });

  // Smooth ring follow
  (function loop() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(loop);
  })();

  // Contextual labels
  var labelMap = {
    a:       "veure",
    button:  "acció",
    ".btn":  "acció",
    ".service-card": "lliscar",
    "#contacte form button": "enviar",
    ".footer-back-top": "a dalt",
    ".btn--whatsapp": "contactar",
    ".galeria-item": "veure",
  };

  function getLabel(el) {
    if (!el) return "";
    if (el.closest(".btn--whatsapp")) return "contactar";
    if (el.closest(".service-card")) return "lliscar";
    if (el.closest("#contacte form button")) return "enviar";
    if (el.closest(".footer-back-top")) return "a dalt";
    if (el.closest(".galeria-item")) return "veure";
    if (el.closest("a,button,[role='button']")) return "veure";
    return "";
  }

  document.addEventListener("mouseover", function (e) {
    var lbl = getLabel(e.target);
    if (lbl) {
      label.textContent = lbl;
      document.body.classList.add("cursor-hover");
    } else {
      document.body.classList.remove("cursor-hover");
    }
  });

  document.addEventListener("mouseout", function () {
    document.body.classList.remove("cursor-hover");
  });
})();
