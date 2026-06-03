(function () {
  "use strict";

  var data = window.__CASTRO_PINTURES__;
  if (!data || !data.gallery) return;

  var imgs  = data.gallery;
  var lane1 = document.getElementById("lane1-inner");
  var lane2 = document.getElementById("lane2-inner");
  var lane3 = document.getElementById("lane3-inner");

  // Totes les fotos en una sola filera (grid estàtic)
  var targets = [lane1, lane2, lane3];
  var rows    = [imgs.slice(0, 5), imgs.slice(5, 10), imgs.slice(10)];

  targets.forEach(function (el, ri) {
    if (!el) return;
    rows[ri].forEach(function (img) {
      var item = document.createElement("div");
      item.className = "galeria-item";
      var image = document.createElement("img");
      image.src      = img.url;
      image.alt      = img.alt;
      image.loading  = "lazy";
      image.decoding = "async";
      item.appendChild(image);
      el.appendChild(item);
    });
  });
})();
