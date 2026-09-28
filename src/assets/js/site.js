// Theme: "auto" (follow OS) is the default; "light"/"dark" override it and persist.
// Every localStorage access is guarded: it throws outright in some privacy modes.
(function () {
  var root = document.documentElement;
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-theme-set]"));

  function current() {
    try {
      var stored = localStorage.getItem("theme");
      return stored === "light" || stored === "dark" ? stored : "auto";
    } catch (e) {
      return "auto";
    }
  }

  function paint(mode) {
    if (mode === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", mode);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.themeSet === mode));
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var mode = b.dataset.themeSet;
      try {
        if (mode === "auto") localStorage.removeItem("theme");
        else localStorage.setItem("theme", mode);
      } catch (e) {}
      paint(mode);
    });
  });

  paint(current());
})();
