(function () {
  "use strict";

  var data = window.__CASTRO_PINTURES__;
  if (!data) return;

  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nom      = (form.querySelector("#f-nom")     || {}).value || "";
    var tel      = (form.querySelector("#f-tel")     || {}).value || "";
    var servei   = (form.querySelector("#f-servei")  || {}).value || "";
    var missatge = (form.querySelector("#f-missatge") || {}).value || "";

    var msg =
      "Hola! Voldria demanar un pressupost:\n\n" +
      "👤 Nom: " + nom + "\n" +
      "📱 Telèfon: " + tel + "\n" +
      "🖌️ Servei: " + servei + "\n" +
      "📝 Detalls: " + missatge;

    var waNum = (data.brand && data.brand.whatsapp) ? data.brand.whatsapp : "";
    var url   = "https://wa.me/" + waNum + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // Populate service select from manifest
  var select = document.getElementById("f-servei");
  if (select && data.services) {
    // Clear existing options except the placeholder
    while (select.options.length > 1) select.remove(1);
    data.services.forEach(function (svc) {
      var opt = document.createElement("option");
      opt.value = svc.name;
      opt.textContent = svc.name;
      select.appendChild(opt);
    });
  }

  // Populate WhatsApp pressupost button
  var waBtn = document.getElementById("wa-pressupost");
  if (waBtn && data.brand) {
    var waMsg = data.brand.waMessage || "Hola! M'agradaria demanar un pressupost sense compromís.";
    var waNum2 = data.brand.whatsapp || "";
    waBtn.href = "https://wa.me/" + waNum2 + "?text=" + encodeURIComponent(waMsg);
  }

  // Populate contact details
  var phoneLinks  = document.querySelectorAll(".js-phone");
  var phoneText   = document.querySelectorAll(".js-phone-text");
  var igLinks     = document.querySelectorAll(".js-ig");
  var igTexts     = document.querySelectorAll(".js-ig-text");
  var horariEls   = document.querySelectorAll(".js-horari");
  var zonaEls     = document.querySelectorAll(".js-zona");

  if (data.brand) {
    phoneLinks.forEach(function (el) {
      el.href = "tel:" + data.brand.phone;
    });
    phoneText.forEach(function (el) {
      el.textContent = data.brand.phoneDisplay || data.brand.phone;
    });
    igLinks.forEach(function (el) {
      el.href = data.brand.igUrl || "#";
    });
    igTexts.forEach(function (el) {
      el.textContent = data.brand.instagram;
    });
    horariEls.forEach(function (el) {
      el.textContent = data.brand.horari;
    });
  }

  if (data.zonesServei) {
    var zonaList = data.zonesServei.join(" · ");
    zonaEls.forEach(function (el) {
      el.textContent = zonaList;
    });
  }
})();
