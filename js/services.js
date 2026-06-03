(function () {
  "use strict";

  var data = window.__CASTRO_PINTURES__;
  if (!data) return;

  // ── GRID ESTÀTIC: llista de tots els serveis ──────────
  var grid = document.getElementById("serveis-grid");
  if (!grid) return;

  // Colors d'accent per a la línia esquerra de cada targeta
  var accentColors = [
    "#C9B8A8","#C5896A","#7A9E7A","#7A9AB5","#D4A89A",
    "#9AAA8A","#7A9AB5","#B5A06A","#A8A49E","#9AAA8A"
  ];

  data.services.forEach(function (svc, i) {
    var item = document.createElement("article");
    item.className = "serveis-grid-item reveal";
    item.style.setProperty("--item-accent", accentColors[i] || "var(--accent)");

    item.innerHTML =
      '<span class="serveis-grid-num" aria-hidden="true">' + ("0" + (i + 1)).slice(-2) + '</span>' +
      '<p class="serveis-grid-type">' + svc.type + '</p>' +
      '<h3 class="serveis-grid-name">' + svc.name + '</h3>' +
      '<p class="serveis-grid-subtitle">' + svc.subtitle + '</p>' +
      '<p class="serveis-grid-desc">' + svc.desc + '</p>';

    grid.appendChild(item);
  });

})();
