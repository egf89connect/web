(function () {
  "use strict";

  var splash = document.getElementById("splash");
  if (!splash) return;

  function hideSplash() {
    splash.classList.add("splash-exit");
    setTimeout(function () {
      splash.style.display = "none";
      document.body.style.overflow = "";
    }, 700);
  }

  // Primary: hide after CSS animation finishes (4.5s total)
  setTimeout(hideSplash, 4500);

  // Safety net: if something stalls, hide after 6s
  setTimeout(function () {
    if (splash.style.display !== "none") hideSplash();
  }, 6000);

  // Also hide if user clicks/touches the splash
  splash.addEventListener("click", hideSplash);
  document.body.style.overflow = "hidden";
})();
